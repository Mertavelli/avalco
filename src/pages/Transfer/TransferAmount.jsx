import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTransfer } from "../../features/transfer/transferSlice";
import Cookies from "js-cookie";

export default function TransferAmount() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()
    const [amount, setAmount] = useState("")
    const [fee, setFee] = useState("0,00")
    const [description, setDescription] = useState(Cookies.get("description") || "")
    const transfer = useSelector((state) => state.transfer || {});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const checkMobileAndWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', checkMobileAndWidth);

        return () => {
            window.removeEventListener('resize', checkMobileAndWidth);
        };
    }, []);

    const submitHandler = () => {
        const validationErrors = {};

        if (!amount || amount === "0,00") {
            validationErrors.amount = "Bitte einen Betrag eingeben.";
        } else {
            // Entferne eventuelle Tausendertrennzeichen
            const amountWithoutSeparator = amount.replace(/\./g, '');

            // Prüfe, ob der Wert eine gültige Dezimalzahl ist
            const validAmountRegex = /^\d{1,10}(,\d{1,2})?$/;
            if (!validAmountRegex.test(amountWithoutSeparator)) {
                validationErrors.amount = "Ungültiger Betrag. Bitte geben Sie einen positiven Wert mit maximal 2 Dezimalstellen ein.";
            }
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const sanitizedAmountString = amount.replace(',', '.');
        const parsedAmount = parseFloat(sanitizedAmountString);

        dispatch(
            setTransfer({
                ...transfer,
                netto: parsedAmount,
                description
            })
        );

        navigate("/transfer/amount/summary")
    }

    const extractInitials = (fullName) => {
        if (fullName) {
            const names = fullName.split(" ");
            let initials = "";

            if (names.length >= 1) {
                initials += names[0].charAt(0);
            }

            if (names.length > 1) {
                initials += names[names.length - 1].charAt(0);
            }

            return initials.toUpperCase();
        }
    };

    return (
        <div className="flex justify-center items-center flex-grow">

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div>
                    <div className="grid grid-cols-1 h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                        <br></br>
                        <div className="grid grid-cols-1 gap-5">

                            <div className="flex items-center space-x-5 px-5 py-1">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">{extractInitials(transfer?.receiver?.name)}</div>
                                <div>
                                    <p className="font-medium">{transfer?.receiver?.name}</p>
                                    <p className="text-sm">{transfer?.receiver?.email}</p>
                                </div>
                            </div>

                        </div>

                        <br></br>
                        <br></br>
                        <input
                            className="py-2 text-black font-semibold text-4xl text-center"
                            autoComplete="off"
                            type="tel"
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            placeholder="0,00"
                            value={amount}
                        />
                        {errors?.amount && (
                            <p className="text-red-600 text-center">{errors?.amount}</p>
                        )}
                        <br></br>
                        <br></br>
                        <textarea
                            onChange={(e) => {
                                const newDescription = e.target.value;
                                setDescription(newDescription);
                                Cookies.set("description", newDescription, { expires: 2 / 1440, path: "/transfer" });
                            }}
                            className="resize min-w-full font-medium"
                            placeholder="Wofür ist diese Zahlung?"
                            value={description}
                        ></textarea>
                    </div>

                    <br></br>

                    <div className="px-10">
                        <button onClick={submitHandler} className="bg-primary text-white font-medium w-full rounded-lg py-3">Weiter</button>
                        <button onClick={() => navigate("/transfer")} className="text-primary font-medium w-full mt-5">Zurück</button>
                    </div>

                </div>

            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>

                    <div>
                        <div className="grid grid-cols-1 h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                            <br></br>
                            <div className="grid grid-cols-1 gap-5">

                                <div className="flex items-center space-x-5 px-5 py-1">
                                    <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">{extractInitials(transfer?.receiver?.name)}</div>
                                    <div>
                                        <p className="font-medium">{transfer?.receiver?.name}</p>
                                        <p className="text-sm">{transfer?.receiver?.email}</p>
                                    </div>
                                </div>

                            </div>

                            <br></br>
                            <br></br>
                            <input
                                className="py-2 text-black font-semibold text-4xl text-center"
                                autoComplete="off"
                                type="tel"
                                onChange={(e) => setAmount(e.target.value)}
                                required
                                placeholder="0,00"
                                value={amount}
                            />
                            <br></br>
                            <br></br>
                            <textarea
                                onChange={(e) => {
                                    const newDescription = e.target.value;
                                    setDescription(newDescription);
                                    Cookies.set("description", newDescription, { expires: 2 / 1440, path: "/transfer/amount" });
                                }}
                                className="resize min-w-full font-medium"
                                placeholder="Wofür ist diese Zahlung?"
                                value={description}
                            ></textarea>
                        </div>

                        <br></br>

                        <div className="px-10">
                            <button onClick={submitHandler} className="bg-primary text-white font-medium w-full rounded-lg py-3">Weiter</button>
                            <button onClick={() => navigate("/transfer")} className="text-primary font-medium w-full mt-5">Zurück</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
