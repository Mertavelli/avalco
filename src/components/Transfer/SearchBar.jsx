import React, { useState, useEffect, useRef } from "react"
import { useGetUsersQuery } from "../../features/user/userApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setTransfer } from "../../features/transfer/transferSlice";
import { selectUserData } from "./selectAuthData";
import Cookies from "js-cookie";

const SearchBar = () => {
    const [isSearchActive, setSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const searchBarRef = useRef(null);
    const { data: users, isLoading, isError } = useGetUsersQuery();
    const [user, setUser] = useState(() => {
        const storedUser = Cookies.get("user");
        if (storedUser) {
            return JSON.parse(storedUser);
        }
        return {};
    });
    const transfer = useSelector((state) => state.transfer || {});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const loggedInUser = useSelector(selectUserData);
    const navigate = useNavigate()

    const handleSearchClick = () => {
        setSearchActive(true)
    };

    const filteredUsers = users
        ? users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const handleClickOutside = (event) => {
        if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
            setSearchActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const extractInitials = (fullName) => {
        const names = fullName.split(" ");
        let initials = "";

        if (names.length >= 1) {
            initials += names[0].charAt(0);
        }

        if (names.length > 1) {
            initials += names[names.length - 1].charAt(0);
        }

        return initials.toUpperCase();
    };

    const submitHandler = () => {
        const validationErrors = {};

        if (!user || Object.keys(user).length === 0) {
            validationErrors.user = "Bitte nach einem Empfänger suchen.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        
        dispatch(
            setTransfer({
                ...transfer,
                receiver: user,
                sender: loggedInUser,
            })
        );

        navigate("/transfer/amount")
    }


    return (
        <div>
            <div ref={searchBarRef} className="relative w-full">
                {!isSearchActive && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer text-tertiary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                )}
                <input
                    required
                    value={searchTerm}
                    className={`px-10 pl-10 py-3 w-full rounded-lg bg-secondary font-medium ${isSearchActive ? "placeholder-transparent" : "placeholder:text-tertiary"
                        }`}
                    onClick={handleSearchClick}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={isSearchActive ? "" : "Nach Namen oder E-Mail Adressen suchen"}
                />
            </div>

            {user?._id && (
                <div className="mt-3">
                    <div className="px-5 py-2 shadow-sm rounded-lg bg-white flex items-center justify-between">
                        <div className="flex items-center space-x-5">
                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">
                                {extractInitials(user.name)}
                            </div>
                            <div>
                                <p className="text-left font-medium">{user.name}</p>
                                <p className="text-left">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                const userJsonString = JSON.stringify({});
                                Cookies.set("user", userJsonString, { expires: 2 / 1440, path: "/transfer" });
                                setUser({})
                            }} className="font-medium text-primary">Ändern</button>
                    </div>
                </div>
            )}

            {users && searchTerm && !user?._id && (filteredUsers.length > 0) && (
                <div className="bg-white rounded-xl py-1 shadow-md flex flex-col gap-2 max-h-[400px] overflow-y-auto">
                    <p className="font-semibold text-lg px-5">Avalco-Kunden</p>


                    {isLoading && <div>Lade...</div>}
                    {isError && <div>Fehler beim Laden der Daten.</div>}

                    {!isLoading && !isError && users && (users.length > 0) && searchTerm &&
                        filteredUsers.map((user) => (
                            <button
                                onClick={() => {
                                    const userJsonString = JSON.stringify(user);
                                    Cookies.set("user", userJsonString, { expires: 2 / 1440, path: "/transfer" });
                                    setUser(user);
                                }}
                                key={user._id}
                                className="flex items-center space-x-5 px-5 py-1 hover:bg-gray-100">
                                <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">
                                    {extractInitials(user.name)}
                                </div>
                                <div>
                                    <p className="text-left font-medium">{user.name}</p>
                                    <p className="text-left">{user.email}</p>
                                </div>
                            </button>
                        ))
                    }
                </div>
            )}

            <div>
                {errors?.user && (
                    <p className="text-red-600">{errors?.user}</p>
                )}
                <br></br>
                <button onClick={submitHandler} className="bg-primary text-white font-medium px-16 py-2 rounded-lg">Weiter</button>
            </div>


        </div>

    );
};

export default SearchBar;
