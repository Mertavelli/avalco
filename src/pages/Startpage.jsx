import React, { useEffect, useState } from "react";
import Navbar from "../components/Startpage/Navbar";
import Footer from "../components/Footer";
import Cookies from "../components/Startpage/Cookies";
import DropdownMobile from "../components/utilities/DropdownMobile";

const Startpage = () => {
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showCookieBanner, setShowCookieBanner] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobileAndWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', checkMobileAndWidth);

        return () => {
            window.removeEventListener('resize', checkMobileAndWidth);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const contentContainerStyle = {
        width: '100%', // Containerbreite auf 100% setzen
        overflow: 'hidden', // Überlauf ausblenden
    };

    // Berechne die Größe basierend auf dem Scrollwert (scrollY)
    const size = 20 + scrollY * 0.005; // Du kannst den Faktor ändern, um die Wachstumsrate anzupassen
    const opacity = 1 - scrollY * 0.0015; // Du kannst den Faktor ändern, um die Transparenzrate anzupassen

    const leftImageStyle = {
        width: `${size}%`, // Größe ändern
        height: `${size}%`,
        opacity: opacity, // Transparenz ändern
        transform: `translateX(-${scrollY * 0.25}px)`, // Bewegung nach außen
        transition: 'all 0.3s ease', // Übergangseffekte
    };

    const rightImageStyle = {
        width: `${size}%`, // Größe ändern
        height: `${size}%`,
        opacity: opacity, // Transparenz ändern
        transform: `translateX(${scrollY * 0.25}px)`, // Bewegung nach außen
        transition: 'all 0.3s ease', // Übergangseffekte
    };

    // Schließe das Cookie-Banner
    const closeCookieBanner = () => {
        setShowCookieBanner(false);
        // Hier kannst du den Cookie-Status speichern, z.B. in localStorage
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <header className="sticky top-0 z-40">
                <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
            </header>


            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div>
                    <main className="relative">
                        {showCookieBanner && <Cookies onClose={closeCookieBanner} />}

                        <div className="flex justify-between" style={contentContainerStyle}>
                            <img src="/images/other/parallax-left.png" className="w-1/5 h-1/5" style={leftImageStyle} />

                            <div className="flex flex-col items-center mt-20">
                                <h1 className="font-bold text-8xl text-center">
                                    Mach es dir leicht
                                </h1>
                                <h1 className="font-bold text-8xl text-center">
                                    mit Avalco
                                </h1>

                                <p className="font-semibold text-xl mt-10">Online. Offline. Raten. Sofort. Du hast die Wahl.</p>
                                <p className="font-semibold text-xl">Eröffne dein Konto superschnell</p>

                                <a href="/sign-up" className="bg-dark rounded-lg py-2 px-3 mt-6 ">
                                    <p className="text-white font-semibold">Ein kostenloses Konto eröffnen</p>
                                </a>
                            </div>

                            <img src="/images/other/parallax-right.png" className="w-1/5 h-1/5" style={rightImageStyle} />
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-2 gap-5 max-w-[1000px]">

                                <div className="flex flex-col items-center gap-5 col-span-2">
                                    <p className="text-center text-gray-600 font-semibold text-xl">Menschen im Mittelpunkt</p>
                                    <h2 className="text-center font-semibold text-6xl">Individueller. Geld senden.</h2>
                                    <h2 className="text-center font-semibold text-6xl">Familie und Freunde.</h2>
                                    <p className="text-center text-xl font-medium">Nie wieder Probleme beim senden von Geld</p>
                                </div>

                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>

                                <div className="bg-primary flex rounded-2xl pl-10 pb-10 items-center overflow-hidden space-x-5 col-span-2">
                                    <div>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                        <h3 className="text-white font-semibold text-4xl">Bequem Geld senden nach deinen eigenen Regeln</h3>
                                        <br></br>
                                        <p className="text-white text-xl font-medium">Einfach per Ratenzahlung, nach 30 Tagen zahlen oder Sofortüberweisung</p>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>

                                        <button className="transition-all hover:bg-blue-700 rounded-full py-2 px-4 duration-300">
                                            <div className="flex space-x-3">
                                                <p className="text-white text-xl font-medium">Zahlungsmöglichkeiten</p>
                                                <img src="/images/other/icons/arrow_right.svg" />
                                            </div>
                                        </button>
                                    </div>

                                    <img src="/images/other/iPhone_12_Pro.png" className="w-[900px] transition-all hover:scale-125 duration-500" />
                                </div>

                                <div className="bg-white py-5 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                    <div className="bg-[#FCEBDB] p-3 rounded-full w-16 h-16 flex justify-center items-center">
                                        <img src="/images/other/icons/persons.svg" />
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-2xl">1.220</h3>
                                        <p className="text-gray-600 font-medium text-lg">Registrierungen</p>
                                    </div>
                                </div>

                                <div className="bg-white py-5 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                    <div className="bg-[#F1E1F7] p-3 rounded-full w-16 h-16 flex justify-center items-center">
                                        <img src="/images/other/icons/transactions.svg" />
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-2xl">16.000</h3>
                                        <p className="text-gray-600 font-medium text-lg">Transaktionen</p>
                                    </div>

                                </div>

                                <div className="bg-white py-5 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                    <div className="bg-[#D6EAF8] p-3 rounded-full w-16 h-16 flex justify-center items-center">
                                        <img src="/images/other/icons/revenue.svg" />
                                    </div>

                                    <div>
                                        <h3 className="font-medium text-2xl">50.000 EUR</h3>
                                        <p className="text-gray-600 font-medium text-lg">Umsatz</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </main>
                    {/* <Footer /> */}
                </div>

            )}

            {/* Mobile */}
            {windowWidth < 1024 && !isOpen && (
                <main className="relative">

                    <img src="/images/other/parallax.png" className="w-full" />

                    <div className="flex flex-col items-center mt-10 px-10">
                        <h1 className="font-bold text-4xl text-center">
                            Mach es dir leicht mit Avalco
                        </h1>

                        <p className="font-medium mt-4 text-center">Online. Offline. Raten. Sofort. Du hast die Wahl.</p>
                        <p className="font-medium text-center">Eröffne dein Konto superschnell</p>

                        <a href="/sign-up" className="bg-dark rounded-lg py-2 px-3 mt-4">
                            <p className="text-white font-medium">Ein kostenloses Konto eröffnen</p>
                        </a>

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="flex flex-col items-center gap-5">
                            <p className="text-center text-gray-600 font-semibold">Menschen im Mittelpunkt</p>
                            <div>
                                <h2 className="text-center font-semibold text-3xl">Individueller. Geld senden.</h2>
                                <h2 className="text-center font-semibold text-3xl">Familie und Freunde.</h2>
                            </div>

                            <p className="text-center font-medium">Nie wieder Probleme beim senden von Geld</p>
                        </div>

                        <br></br>

                        <div className="bg-primary rounded-2xl overflow-hidden w-full">
                            <br></br>
                            <div className="flex flex-col gap-5 px-6">
                                <h3 className="text-white font-semibold text-2xl">Bequem Geld senden nach deinen eigenen Regeln</h3>
                                <p className="text-white">Einfach per Ratenzahlung, nach 30 Tagen zahlen oder Sofortüberweisung</p>
                                <button className="transition-all hover:bg-blue-700 rounded-full py-1 px-1 duration-300">
                                    <div className="flex space-x-3 items-center">
                                        <p className="text-white font-medium">Zahlungsmöglichkeiten</p>
                                        <img src="/images/other/icons/arrow_right.svg" className="h-3" />
                                    </div>
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <img src="/images/other/iPhone_12_Pro.png" className="w-[400px] transition-all hover:scale-125 duration-500" />
                            </div>

                        </div>

                        <br></br>

                        <div className="grid grid-cols-1 gap-3 w-full">

                            <div className="bg-white py-4 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                <div className="bg-[#FCEBDB] p-3 rounded-full w-14 h-14 flex justify-center items-center">
                                    <img src="/images/other/icons/persons.svg" className="w-8" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-xl">1.220</h3>
                                    <p className="text-gray-600 font-medium">Registrierungen</p>
                                </div>
                            </div>

                            <div className="bg-white py-4 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                <div className="bg-[#F1E1F7] p-3 rounded-full w-14 h-14 flex justify-center items-center">
                                    <img src="/images/other/icons/transactions.svg" className="w-8" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-xl">16.000</h3>
                                    <p className="text-gray-600 font-medium">Transaktionen</p>
                                </div>

                            </div>

                            <div className="bg-white py-4 flex items-center rounded-2xl pl-5 space-x-5 w-full">
                                <div className="bg-[#D6EAF8] p-3 rounded-full w-14 h-14 flex justify-center items-center">
                                    <img src="/images/other/icons/revenue.svg" className="w-8" />
                                </div>

                                <div>
                                    <h3 className="font-medium text-xl">50.000 EUR</h3>
                                    <p className="text-gray-600 font-medium">Umsatz</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <footer className="sticky bottom-0">
                        {showCookieBanner && <Cookies onClose={closeCookieBanner} />}
                    </footer>

                </main>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && isOpen && (
                <DropdownMobile />
            )}

        </div>
    );
}

export default Startpage;