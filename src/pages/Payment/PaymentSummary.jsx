import React, { useState, useEffect } from "react";

export default function PaymentSummary() {
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

                    <a href="/activities" className="text-primary flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        <p className="font-semibold text-primary text-2xl">Übersicht</p>
                    </a>


                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="grid grid-cols-2 gap-10 bg-white rounded-xl mb-20">

                        <div className="rounded-t-lg border-b w-full p-5 flex justify-between items-center col-span-2">
                            <div className="flex items-center space-x-5">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                <div>
                                    <p className="text-lg font-medium mb-2">Max Mustermann</p>
                                    <p className="text-sm text-gray-500">19. September • Überweisung</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-medium">-0,01 EUR</p>
                                <p className="text-gray-500">Offen</p>
                            </div>
                        </div>

                        <div className="p-5">
                            <div>
                                <p className="font-semibold">Avalco Zahlung mit:</p>
                                <div className="flex justify-between">
                                    <p className="">In Raten zahlen</p>
                                    <p className="">0,01 EUR</p>
                                </div>
                            </div>

                            <br></br>
                            <br></br>

                            <div>
                                <p className="font-semibold">Transaktionscode</p>
                                <p className="">SG7802925L03652330</p>
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="font-semibold">Beschreibung</p>
                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                            <br></br>
                            <br></br>

                            <p className="font-semibold">Details</p>
                            <div className="flex justify-between border-b">
                                <p className="">Empfänger: Adriana Granata</p>
                                <p className="">0,01 EUR</p>
                            </div>

                            <br></br>

                            <div className="flex justify-between">
                                <p className="font-semibold">Summe</p>
                                <p className="font-semibold">0,01 EUR</p>
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="font-semibold text-xl">Zahlungsplan</p>

                            <br></br>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <p>Fälligkeitsdatum</p>
                                    <p>Betrag</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>22. März</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>

                                    <p>188,01 EUR</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>23. April</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>
                                    <p>188,01 EUR</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>23. Mai</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>
                                    <p>188,01 EUR</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>23. Juni</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>
                                    <p>188,01 EUR</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>23. Juli</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>
                                    <p>188,01 EUR</p>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div>
                                        <p>23. August</p>
                                        <p className="text-green-400">Bezahlt</p>
                                    </div>
                                    <p>180,29 EUR</p>
                                </div>
                            </div>

                            <br></br>

                        </div>

                    </div>

                </div>
            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-full">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">
                        <a href="/activities" className="text-primary flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <p className="font-semibold text-primary text-xl">Übersicht</p>
                        </a>

                        <div className="bg-white rounded-xl">

                            <div className="w-full p-3 flex justify-between items-center border-b">
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

                            <div>
                                <div className="p-3">
                                    <br></br>
                                    <div>
                                        <p className="font-semibold">Avalco Zahlung mit:</p>
                                        <div className="flex justify-between">
                                            <p className="">In Raten zahlen</p>
                                            <p className="">0,01 EUR</p>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <p className="font-semibold text-xl">Zahlungsplan</p>

                                        <br></br>

                                        <div className="flex flex-col gap-3">
                                            <div className="flex justify-between">
                                                <p>Fälligkeitsdatum</p>
                                                <p>Betrag</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>22. März</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>

                                                <p>188,01 EUR</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>23. April</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>
                                                <p>188,01 EUR</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>23. Mai</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>
                                                <p>188,01 EUR</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>23. Juni</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>
                                                <p>188,01 EUR</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>23. Juli</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>
                                                <p>188,01 EUR</p>
                                            </div>
                                            <div className="flex justify-between border-b">
                                                <div>
                                                    <p>23. August</p>
                                                    <p className="text-green-400">Bezahlt</p>
                                                </div>
                                                <p>180,29 EUR</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="font-semibold">Details</p>
                                    <div className="flex justify-between border-b">
                                        <p className="">Empfänger: Adriana Granata</p>
                                        <p className="">0,01 EUR</p>
                                    </div>

                                    <br></br>

                                    <div className="flex justify-between">
                                        <p className="font-semibold">Summe</p>
                                        <p className="font-semibold">0,01 EUR</p>
                                    </div>

                                    <br></br>
                                    <br></br>

                                    <div>
                                        <p className="font-semibold">Transaktionscode</p>
                                        <p className="">SG7802925L03652330</p>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="font-semibold">Beschreibung</p>
                                    <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                                    <br></br>
                                    <br></br>
                                </div>

                            </div>


                        </div>

                    </main>
                </div>
            )}

        </div>
    )
}
