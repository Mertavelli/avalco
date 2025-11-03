import React from "react";
import NavbarButton from "../utilities/NavbarButton";

// Navbar (all links/buttons visually intact but non-interactive)
const Navbar = ({ isOpen, toggleNavbar }) => {
    return (
        <div className="pointer-events-none select-none opacity-90">
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className="mx-auto max-w-[1200px] grid grid-cols-2 items-center py-5 px-4">
                    {/* Left cluster (brand + nav) */}
                    <div className="flex items-center gap-6">
                        {/* If NavbarButton renders brand/menu, keep it here */}
                        <NavbarButton />
                    </div>

                    {/* Right cluster (auth) */}
                    <div className="flex items-center justify-end gap-3">
                        <a
                            href="#"
                            aria-disabled="true"
                            tabIndex="-1"
                            className="bg-white px-4 py-1.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 pointer-events-none cursor-default select-none opacity-90"
                        >
                            Sign in
                        </a>

                        <a
                            href="#"
                            aria-disabled="true"
                            tabIndex="-1"
                            className="bg-dark px-4 py-1.5 rounded-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark pointer-events-none cursor-default select-none opacity-90"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <div className="flex justify-between items-center py-3 px-5">
                    <a
                        href="#"
                        aria-disabled="true"
                        tabIndex="-1"
                        className="inline-flex items-center pointer-events-none cursor-default select-none"
                        aria-label="Avalco home"
                    >
                        <img
                            src="/images/logos/avalco_lettering_black.svg"
                            alt="Avalco logo"
                            className="h-6 w-auto"
                            loading="lazy"
                        />
                    </a>

                    <button
                        type="button"
                        aria-disabled="true"
                        tabIndex="-1"
                        className={`rounded-md p-1.5 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${isOpen ? "bg-black text-white focus:ring-black" : "bg-white focus:ring-gray-900"
                            } pointer-events-none cursor-default select-none`}
                        aria-label="Toggle menu"
                        aria-expanded={false}
                        aria-controls="mobile-menu"
                    >
                        {/* Hamburger icon stays static */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-6 h-6"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                {/* The dropdown content itself would normally render here */}
                <div id="mobile-menu" hidden />
            </div>
        </div>
    );
};

export default Navbar;
