import React, { useState } from "react";

const NavbarButton = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleSelectedButton = (buttonText) => {
        setSelectedButton(buttonText);
    };

    return (
        <div>
            <div className="flex space-x-10 items-end justify-start">

                <img src="/images/logos/avalco_lettering_black.svg" alt="logo_black" className="h-8" />

                <button
                    className={`rounded-lg px-2 transition-all hover:bg-white`}
                    onMouseEnter={() => handleSelectedButton("Privat")}
                    onMouseLeave={() => handleSelectedButton(null)}>
                    <p className="text-gray-600">Privat</p>

                    {selectedButton === "Privat" && (
                        <div className="grid grid-cols-1 max-w-[1000px]">

                            <div className="absolute top-12 bottom-0 left-0 right-0 py-20 max-w-[1000px]"></div>
                            <div
                                className="bg-light absolute top-24 left-0 right-0 pt-4 pb-16 px-4 rounded-lg shadow-xl grid grid-cols-1 gap-5 max-w-[1000px] transition-all duration-500 ease-in-out text-start">

                                <div className="flex space-x-2 items-center">
                                    <h3 className="font-bold text-lg">Avalco entdecken</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">Essentials</p>
                                    <a>Zahlungsmöglichkeiten</a>
                                    <a>Internationale Zahlungen</a>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">Hilfe</p>
                                    <a>FAQ</a>
                                    <a>Community</a>
                                    <a>Kundendienst</a>
                                </div>
                            </div>
                        </div>
                    )}
                </button>

                <button
                    className={`rounded-lg px-2 transition-all hover:bg-white`}
                    onMouseEnter={() => handleSelectedButton("Business")}
                    onMouseLeave={() => handleSelectedButton(null)}>
                    <p className="text-gray-600">Business</p>

                    {selectedButton === "Business" && (
                        <div className="grid grid-cols-1 max-w-[1000px]">

                            <div className="absolute top-12 bottom-0 left-0 right-0 py-20 max-w-[1000px]"></div>
                            <div
                                className="bg-light absolute top-24 left-0 right-0 pt-4 pb-16 px-4 rounded-lg shadow-xl grid grid-cols-1 gap-5 max-w-[1000px] transition-all duration-500 ease-in-out text-start">

                                <div className="flex space-x-2 items-center">
                                    <h3 className="font-bold text-lg">Avalco Business entdecken</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">Essentials</p>
                                    <a>Wir arbeiten aktuell an Avalco Business</a>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-medium">Hilfe</p>
                                    <a>FAQ</a>
                                    <a>Community</a>
                                    <a>Kundendienst</a>
                                </div>
                            </div>
                        </div>
                    )}
                </button>

                <button
                    className={`rounded-lg px-2 transition-all hover:bg-white`}
                    onMouseEnter={() => handleSelectedButton("Avalco")}
                    onMouseLeave={() => handleSelectedButton(null)}>
                    <p className="text-gray-600">Avalco</p>

                    {selectedButton === "Avalco" && (
                        <div className="grid grid-cols-1 max-w-[1000px]">

                            <div className="absolute top-12 bottom-0 left-0 right-0 py-20 max-w-[1000px]"></div>
                            <div
                                className="bg-light absolute top-24 left-0 right-0 pt-4 pb-16 px-4 rounded-lg shadow-xl grid grid-cols-1 gap-5 max-w-[1000px] transition-all duration-500 ease-in-out text-start">

                                <div className="flex space-x-2 items-center">
                                    <h3 className="font-bold text-lg">Avalco kennenlernen</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <a>Über uns</a>
                                    <a>Karriere</a>
                                </div>
                            </div>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}
export default NavbarButton;