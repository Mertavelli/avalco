import React, { useState, useEffect } from "react";
import NavbarButton from "../utilities/NavbarButton";

const Navbar = ({ isOpen, toggleNavbar }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        <div>
            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div className="border mb-20 backdrop-blur-md bg-light/50 flex justify-center">
                    <div className="py-5 grid grid-cols-2 min-w-[1000px] relative">

                        <NavbarButton />

                        <div className="flex space-x-3 items-center justify-end">

                            <a href="/sign-in" className="bg-white px-4 py-1.5 rounded-lg">
                                <p className="font-semibold">Einloggen</p>
                            </a>

                            <a href="/sign-up" className="bg-dark px-4 py-1.5 rounded-lg">
                                <p className="font-semibold text-white">Registrieren</p>
                            </a>
                        </div>

                    </div>
                </div>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && (
                <div className="flex justify-between items-center border mb-5 backdrop-blur-md bg-light/50 py-3 px-5">

                    <img src="/images/logos/avalco_lettering_black.svg" alt="logo_black" className="h-6" />

                    <button
                        onClick={toggleNavbar}
                        className={`rounded-md p-1.5 transition-all duration-300 ease-in-out ${isOpen ? "bg-black text-white hover:bg-dark" : "bg-white"}`}>
                        {!isOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}

                        {isOpen && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}

                    </button>
                </div>

            )}

        </div>
    );
}

export default Navbar;