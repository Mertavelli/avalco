import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()

    useEffect(() => {
        const checkMobileAndWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', checkMobileAndWidth);

        return () => {
            window.removeEventListener('resize', checkMobileAndWidth);
        };
    }, []);

    return (
        <div className="flex justify-center flex-grow">

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div className="px-5 mt-10 grid grid-cols-1 h-fit max-w-[1000px]">

                    <p className="font-semibold text-primary text-2xl">Wallet</p>
                    <br></br>
                    <br></br>
                    <br></br>


                    <div className="grid grid-cols-3 gap-5">
                        <div className="flex space-x-5 bg-white py-5 px-10 rounded-xl">

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col items-center">
                                    <img src="/images/other/bank_blue.png" className="w-16 mb-5" />
                                    <a className="font-semibold">Bankkonto hinzufügen</a>
                                </div>


                                <br></br>

                                <div className="flex items-center space-x-5">
                                    <img src="/images/logos/logo_solo.svg" className="h-10" />
                                    <div>
                                        <p className="font-medium">Avalco-Guthaben</p>
                                        <p className="text-sm text-gray-500">27.632 EUR Verfügbar</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-5">
                                    <img src="/images/other/bank.png" className="h-10" />
                                    <div>
                                        <p className="font-medium">Bankkonto</p>
                                        <p className="text-sm text-gray-500">DE6238372872922728398</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-5 bg-white py-5 px-10 rounded-xl justify-center">

                            <div className="flex flex-col items-center">

                                <div className="flex flex-col items-center">
                                    <img src="/images/logos/logo_solo.svg" className="w-16 mb-5" />
                                    <a className="font-semibold">Avalco-Guthaben</a>
                                </div>

                                <br></br>

                                <p className="font-semibold text-2xl mb-2">27.632 EUR</p>
                                <p className="text-sm text-gray-500">Verfügbar</p>

                                <br></br>

                                <button onClick={() => navigate("/payment")} className="bg-primary text-white font-medium rounded-lg py-1">Geld einzahlen oder abbuchen</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">

                        <div className="flex justify-center space-x-5">
                            <button className="flex flex-col justify-center items-center gap-3">
                                <img src="/images/other/bank_blue.png" className="w-10" />
                                <p className="text-xs font-semibold">Bankkonto hinzufügen</p>
                            </button>

                            <button onClick={() => navigate("/payment")} className="flex flex-col justify-center items-center gap-3">
                                <img src="/images/other/credit-card.png" className="w-10" />
                                <p className="text-xs font-semibold">Geld einzahlen oder abbuchen</p>
                            </button>
                        </div>

                        <div className="flex items-center space-x-5 mt-10">
                            <img src="/images/logos/logo_solo.svg" className="h-10" />
                            <div>
                                <p className="font-semibold text-primary">Avalco-Guthaben</p>
                                <p className="text-sm font-medium">27.632 EUR Verfügbar</p>
                            </div>
                        </div>


                        <div className="flex items-center space-x-5 mt-5">
                            <img src="/images/other/bank.png" className="h-10" />
                            <div>
                                <p className="font-medium">Landesbank Baden-Wurttemberg</p>
                                <p className="text-sm font-medium">Bankkonto ••5042</p>
                                <p className="text-xs font-medium bg-green-200 w-fit py-1 px-2 rounded-lg mt-2">Bevorzugt</p>
                            </div>
                        </div>



                    </main>
                </div>
            )}
        </div>
    );
}
export default Wallet;