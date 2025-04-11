import React from "react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/auth/authSlice";

export default function DropdownIntern() {
    const dispatch = useDispatch();

    // logout
    const logout = () => {
        dispatch(userLoggedOut());
    };

    return (
        <div className="bg-white min-h-screen px-8 pt-5">
            <button onClick={logout} className="font-medium">AUSLOGGEN</button>
            <br></br>
            <br></br>
            <a href="/settings" className="flex flex-col items-center justify-center">
                <div className="p-3 text-xl h-20 w-20 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                <p className="font-medium mt-3">Max Mustermann</p>
            </a>

            <br></br>
            <br></br>

            <div className="flex flex-col gap-7">
                <a href="/dashboard" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Dashboard</a>
                <a href="/transfer" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Geld senden</a>
                <a href="/wallet" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Wallet</a>
                <a href="/activities" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Aktivitäten</a>
                <a href="/help" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Hilfe</a>
                <a href="/settings" className="font-medium rounded-lg py-1 px-2 hover:text-primary hover:bg-gray-100 transition-all ease-in-out duration-300">Einstellungen</a>
            </div>

        </div>
    )
}
