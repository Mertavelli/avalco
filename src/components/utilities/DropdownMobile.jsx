import React, { useState } from "react";

const DropdownMobile = () => {
    const [selectedButton, setSelectedButton] = useState("Privat")

    const handleClick = (buttonName) => {
        setSelectedButton(buttonName)
    }

    return (
        <div className="px-4">
            <div className="flex justify-start space-x-2">
                <button
                    onClick={() => handleClick("Privat")}
                    className={`py-1 px-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-white ${selectedButton === "Privat" ? "bg-white text-black" : ""}`}
                >Privat</button>

                <button
                    onClick={() => handleClick("Business")}
                    className={`py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white ${selectedButton === "Business" ? "bg-white text-black" : ""}`}
                >Business</button>

                <button
                    onClick={() => handleClick("Avalco")}
                    className={`py-1 px-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white ${selectedButton === "Avalco" ? "bg-white text-black" : ""}`}
                >Avalco</button>
            </div>

            <br></br>

            <div className="px-4">
                {selectedButton === "Privat" && (
                    <div className="grid grid-cols-1 gap-4 transition-all text-start">

                        <a href="/" className="flex space-x-2 items-center">
                            <h3 className="font-semibold text-lg hover:text-primary transition-all duration-100 ease-in-out">Avalco entdecken</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <div className="flex flex-col gap-4 font-medium">
                            <a href="/" className="flex justify-between">
                                <p>Essentials</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>Zahlungsmöglichkeiten</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>Internationale Zahlungen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>Hilfe</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>FAQ</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>


                            <a href="/" className="flex justify-between">
                                <p>Community</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>


                            <a href="/" className="flex justify-between">
                                <p>Kundendienst</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}

                {selectedButton === "Business" && (
                    <div className="grid grid-cols-1 gap-4 transition-all text-start">

                        <a href="/" className="flex space-x-2 items-center">
                            <h3 className="font-semibold text-lg hover:text-primary transition-all duration-100 ease-in-out">Avalco Business entdecken</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <div className="flex flex-col gap-4 font-medium">

                            <a href="/" className="flex justify-between">
                                <p>Essentials</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>Wir arbeiten aktuell an Avalco Business</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>Hilfe</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                            <a href="/" className="flex justify-between">
                                <p>FAQ</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>


                            <a href="/" className="flex justify-between">
                                <p>Community</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>


                            <a href="/" className="flex justify-between">
                                <p>Kundendienst</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </a>

                        </div>
                    </div>
                )}

                {selectedButton === "Avalco" && (
                    <div className="grid grid-cols-1 gap-3 transition-all text-start">

                        <a href="/" className="flex space-x-2 items-center">
                            <h3 className="font-semibold text-lg">Avalco kennenlernen</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>

                        <div className="flex flex-col gap-3 text-sm">
                            <a href="/" className="hover:bg-gray-200 hover:text-primary py-1 rounded-lg transition-all duration-100 ease-in-out">Über uns</a>
                            <a href="/" className="hover:bg-gray-200 hover:text-primary py-1 rounded-lg transition-all duration-100 ease-in-out">Karriere</a>
                        </div>
                    </div>
                )}
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div className="flex space-x-3 items-center justify-center">
                <a href="/sign-in" className="bg-white px-4 py-1.5 rounded-lg">
                    <p className="font-semibold">Einloggen</p>
                </a>

                <a href="/sign-up" className="bg-dark px-4 py-1.5 rounded-lg">
                    <p className="font-semibold text-white">Registrieren</p>
                </a>
            </div>
        
        </div>
    );
}
export default DropdownMobile;