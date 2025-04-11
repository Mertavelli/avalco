import React, { useState, useEffect } from "react";

const Help = () => {

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
        <div className="flex justify-center flex-grow">

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div className="px-5 mt-10 max-w-[1000px] w-full grid grid-cols-1 h-fit">

                    <p className="font-semibold text-primary text-2xl">Hilfe</p>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="grid grid-cols-3 gap-5">

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Sicherheit und Betrug</h1>
                            <a className="text-gray-500">Melden einer betrügerischen Transaktion</a>
                            <a className="text-gray-500">Phishing melden – verdächtige(r) E-Mail, Anruf, Textnachricht oder Link</a>
                            <a className="text-gray-500">Beanstandung einer Transaktion</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Profil</h1>
                            <a className="text-gray-500">Persönliche Daten aktualisieren</a>
                            <a className="text-gray-500">Währungskonten und Umtausch</a>
                            <a className="text-gray-500">Meine Identität verifizieren</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Geld einzahlen</h1>
                            <a className="text-gray-500">Wie kann ich Geld auf mein Avalco Konto einzahlen?</a>
                            <a className="text-gray-500">Geld per Karte hinzufügen</a>
                            <a className="text-gray-500">Geld mit einem verknüpften Bankkonto einzahlen</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Überweisungen</h1>
                            <a className="text-gray-500">Eine Überweisung erhalten</a>
                            <a className="text-gray-500">Eine Überweisung senden</a>
                            <a className="text-gray-500">Überweisungen zwischen Avalco Nutzer*innen</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Kredite und Darlehen</h1>
                            <a className="text-gray-500">Wie erhalte ich ein Avalco-Darlehen?</a>
                            <a className="text-gray-500">Bin ich berechtigt für einen Privatkredit?</a>
                            <a className="text-gray-500">Wie entscheidet Avalco, ob mir ein Kredit angeboten wird?</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Sonstige Themen</h1>
                            <a className="text-gray-500">Krieg in der Ukraine</a>
                            <a className="text-gray-500">Bei Avalco registrieren</a>
                            <a className="text-gray-500">Avalco Web App</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">

                    <div className="grid grid-cols-1 gap-5">

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Sicherheit und Betrug</h1>
                            <a className="text-gray-500">Melden einer betrügerischen Transaktion</a>
                            <a className="text-gray-500">Phishing melden – verdächtige(r) E-Mail, Anruf, Textnachricht oder Link</a>
                            <a className="text-gray-500">Beanstandung einer Transaktion</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Profil</h1>
                            <a className="text-gray-500">Persönliche Daten aktualisieren</a>
                            <a className="text-gray-500">Währungskonten und Umtausch</a>
                            <a className="text-gray-500">Meine Identität verifizieren</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Geld einzahlen</h1>
                            <a className="text-gray-500">Wie kann ich Geld auf mein Avalco Konto einzahlen?</a>
                            <a className="text-gray-500">Geld per Karte hinzufügen</a>
                            <a className="text-gray-500">Geld mit einem verknüpften Bankkonto einzahlen</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Überweisungen</h1>
                            <a className="text-gray-500">Eine Überweisung erhalten</a>
                            <a className="text-gray-500">Eine Überweisung senden</a>
                            <a className="text-gray-500">Überweisungen zwischen Avalco Nutzer*innen</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Kredite und Darlehen</h1>
                            <a className="text-gray-500">Wie erhalte ich ein Avalco-Darlehen?</a>
                            <a className="text-gray-500">Bin ich berechtigt für einen Privatkredit?</a>
                            <a className="text-gray-500">Wie entscheidet Avalco, ob mir ein Kredit angeboten wird?</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 bg-white rounded-xl p-5 relative">
                            <h1 className="font-semibold text-xl">Sonstige Themen</h1>
                            <a className="text-gray-500">Krieg in der Ukraine</a>
                            <a className="text-gray-500">Bei Avalco registrieren</a>
                            <a className="text-gray-500">Avalco Web App</a>
                            <br></br>
                            <button className="absolute bottom-3 flex text-primary py-1 px-4 font-medium rounded-lg w-fit hover:text-white hover:bg-primary tranition-all ease-in-out duration-200">
                                <p>Alle anzeigen</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    </main>
                </div >
            )}
        </div>
    )
}
export default Help;