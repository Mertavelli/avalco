import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Transfer/SearchBar"

const Activities = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selectedButton, setSelectedButton] = useState("Alle")

    const handleClick = (buttonName) => {
        setSelectedButton(buttonName)
    }

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

                    <p className="font-semibold text-primary text-2xl">Aktivitäten</p>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="grid grid-cols-3 gap-5">

                        <div className="col-span-3">
                            <SearchBar />
                        </div>

                        <p>Filtern nach</p>

                        <div className="col-span-3 flex flex-grow space-x-2">
                            <button onClick={() => handleClick("Alle")} className={`w-1/4 px-10 py-3 font-medium rounded-lg ${selectedButton === "Alle" ? "bg-primary text-white" : "bg-white"}`}>Alle</button>
                            <button onClick={() => handleClick("Überweisungen")} className={`w-1/4 px-10 py-3 font-medium rounded-lg ${selectedButton === "Überweisungen" ? "bg-primary text-white" : "bg-white"}`}>Überweisungen</button>
                            <button onClick={() => handleClick("Rechnungen")} className={`w-1/4 px-10 py-3 font-medium rounded-lg ${selectedButton === "Rechnungen" ? "bg-primary text-white" : "bg-white"}`}>Rechnungen</button>
                            <button onClick={() => handleClick("Ratenzahlungen")} className={`w-1/4 px-10 py-3 font-medium rounded-lg ${selectedButton === "Ratenzahlungen" ? "bg-primary text-white" : "bg-white"}`}>Ratenzahlungen</button>
                        </div>

                        <p className="font-semibold text-sm col-span-3">Offen</p>

                        <a href="/activities/installment" className="bg-white rounded-lg w-full col-span-3 p-5 flex justify-between items-center">
                            <div className="flex items-center space-x-5">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                <div>
                                    <p className="text-lg font-medium mb-2">Max Mustermann</p>
                                    <p className="text-sm text-gray-500">19. September • Überweisung</p>
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-medium">-0,01 EUR</p>
                                <p className="text-gray-500">Offen</p>
                            </div>
                        </a>

                        <p className="font-semibold text-sm col-span-3">Abgeschlossen</p>

                        <div className="bg-white rounded-lg w-full col-span-3 p-5 flex justify-between items-center">
                            <div className="flex items-center space-x-5">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                <div>
                                    <p className="text-lg font-medium mb-2">Max Mustermann</p>
                                    <p className="text-sm text-gray-500">19. September • Überweisung</p>
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-medium">-0,01 EUR</p>
                                <p className="text-green-400">Bezahlt</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg w-full col-span-3 p-5 flex justify-between items-center">
                            <div className="flex items-center space-x-5">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                <div>
                                    <p className="text-lg font-medium mb-2">Max Mustermann</p>
                                    <p className="text-sm text-gray-500">19. September • Rechnung</p>
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-medium">-0,01 EUR</p>
                                <p className="text-green-400">Bezahlt</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg w-full col-span-3 p-5 flex justify-between items-center">
                            <div className="flex items-center space-x-5">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                <div>
                                    <p className="text-lg font-medium mb-2">Max Mustermann</p>
                                    <p className="text-sm text-gray-500">19. September • Ratenzahlung</p>
                                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-medium">-0,01 EUR</p>
                                <p className="text-green-400">Bezahlt</p>
                            </div>
                        </div>


                    </div>

                </div>
            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">
                        <SearchBar className="w-full" />

                        <p className="font-medium">Filtern nach</p>
                        <div className="flex flex-grow overflow-x-scroll space-x-2">
                            <button onClick={() => handleClick("Alle")} className={`px-10 py-3 font-medium rounded-lg text-sm ${selectedButton === "Alle" ? "bg-primary text-white" : "bg-white"}`}>Alle</button>
                            <button onClick={() => handleClick("Überweisungen")} className={`px-10 py-3 font-medium rounded-lg text-sm ${selectedButton === "Überweisungen" ? "bg-primary text-white" : "bg-white"}`}>Überweisungen</button>
                            <button onClick={() => handleClick("Rechnungen")} className={`px-10 py-3 font-medium rounded-lg text-sm ${selectedButton === "Rechnungen" ? "bg-primary text-white" : "bg-white"}`}>Rechnungen</button>
                            <button onClick={() => handleClick("Ratenzahlungen")} className={`px-10 py-3 font-medium rounded-lg text-sm ${selectedButton === "Ratenzahlungen" ? "bg-primary text-white" : "bg-white"}`}>Ratenzahlungen</button>
                        </div>

                        <p className="font-semibold">Offen</p>

                        <a href="/activities/installment">
                            <div className="bg-white rounded-lg w-full col-start-1 col-end-4 p-3 py-5 flex justify-between items-center border">
                                <div className="flex items-center space-x-5">
                                    <div className="p-3 h-12 w-12 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                    <div>
                                        <p className="text-lg font-medium">Max Mustermann</p>
                                        <p className="text-xs font-medium whitespace-nowrap">19. September • Rechnung</p>
                                        <p className="text-xs font-medium">Lorem ipsum dolor...</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="font-medium whitespace-nowrap">-0,01 EUR</p>
                                </div>
                            </div>
                        </a>

                        <p className="font-semibold">Abgeschlossen</p>

                        <div>
                            <div className="bg-white rounded-lg w-full col-start-1 col-end-4 p-3 py-5 flex justify-between items-center border">
                                <div className="flex items-center space-x-5">
                                    <div className="p-3 h-12 w-12 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                    <div>
                                        <p className="text-lg font-medium">Max Mustermann</p>
                                        <p className="text-xs font-medium whitespace-nowrap">19. September • Überweisung</p>
                                        <p className="text-xs font-medium">Lorem ipsum dolor...</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="font-medium whitespace-nowrap">-0,01 EUR</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-lg w-full col-start-1 col-end-4 p-3 py-5 flex justify-between items-center border">
                                <div className="flex items-center space-x-5">
                                    <div className="p-3 h-12 w-12 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                    <div>
                                        <p className="text-lg font-medium">Max Mustermann</p>
                                        <p className="text-xs font-medium whitespace-nowrap">19. September • Rechnung</p>
                                        <p className="text-xs font-medium">Lorem ipsum dolor...</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="font-medium whitespace-nowrap">-0,01 EUR</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white rounded-lg w-full col-start-1 col-end-4 p-3 py-5 flex justify-between items-center border">
                                <div className="flex items-center space-x-5">
                                    <div className="p-3 h-12 w-12 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                    <div>
                                        <p className="text-lg font-medium">Max Mustermann</p>
                                        <p className="text-xs font-medium whitespace-nowrap">19. September • Ratenzahlung</p>
                                        <p className="text-xs font-medium">Lorem ipsum dolor...</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <p className="font-medium whitespace-nowrap">-0,01 EUR</p>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            )}
        </div>
    );
}
export default Activities;