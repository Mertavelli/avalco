import React, { useState, useEffect } from "react";

const Cookies = ({ onClose }) => {
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
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 flex items-center justify-center">
                    <div className="bg-white max-w-[350px] p-4 rounded-2xl shadow-lg absolute right-10 bottom-10">
                        <div className="flex justify-end">
                            <button onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-4">
                            <img src="/images/other/cookies.svg" alt="Cookies" className="w-16" />
                            <h1 className="font-semibold text-center">Avalco verwendet Cookies</h1>
                            <p className="text-sm text-center">
                                Avalco verwendet Cookies. Wenn Sie fortfahren, gehen wir davon aus, dass Sie der Verwendung von Cookies zustimmen, wie in unserer Datenschutzrichtlinie beschrieben.
                            </p>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button onClick={onClose} className="bg-primary rounded-lg px-2 py-1.5 shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <img src="/images/other/icons/cookie.svg" alt="Cookie" />
                                    <p className="text-white text-sm">Cookies akzeptieren</p>
                                </div>
                            </button>

                            <button onClick={onClose} className="shadow-lg rounded-lg px-2 py-1.5">
                                <p className="text-sm">Ablehnen</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && (

                <div className="flex justify-center items-center">
                    <div className="px-4 flex flex-col gap-4 bg-light rounded-t-2xl py-8">
                        <h3 className="font-semibold text-sm">Cookies ermöglichen dir eine personalisierte Erfahrung</h3>
                        <p className="text-xs">Wir reden hier nicht von der knusprigen, leckeren Art. Diese Cookies helfen uns, unsere Website sicherer zu machen, dir ein besseres Erlebnis zu bieten und relevantere Werbung zu zeigen. Wir schalten sie nicht ein, wenn du nicht zustimmst. Möchtest du mehr wissen oder deine Einstellungen anpassen?</p>
                        <div className="flex justify-center space-x-2">
                            <button onClick={onClose} className="bg-dark text-white rounded-lg py-2 px-4 font-medium text-sm">Alle Cookies zulassen</button>
                            <button onClick={onClose} className="bg-dark text-white rounded-lg py-2 px-4 font-medium text-sm">Alle Cookies ablehnen</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default Cookies;