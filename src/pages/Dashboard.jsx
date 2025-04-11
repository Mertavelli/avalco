import React, { useState, useEffect } from "react";
import RingDiagramm from "../components/Dashboard/RingDiagramm";
import BarChart from "../components/Dashboard/BarChart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const data = {
    labels: ['M', 'D', 'M', 'D', 'F', 'S', 'S'],
    datasets: [
        {
            label: 'Wöchentliche Zahlungen (EUR)',
            data: [100, 150, 120, 200, 180, 250, 210],
            backgroundColor: '#1167FF', // Benutzerdefinierte Farbe für die Balken
            borderColor: '#1167FF', // Randfarbe für die Balken
            borderWidth: 1,
            barThickness: 35, // Dicke der Balken in Pixeln
        },
    ],
};

const Dashboard = ({ isOpen }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const loggedInUser = useSelector((state) => state.auth.user || {});

/*     console.log("loggedInUser", loggedInUser) */

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

                    <p className="font-semibold text-primary text-2xl">Dashboard</p>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="flex space-x-5">
                        <div className="grid grid-cols-2 gap-5 h-fit">

                            <div className="bg-white px-8 py-10 rounded-lg">
                                <p className="font-semibold text-sm">Rückzahlungsstatus</p>
                                <p className="text-sm text-gray-500 font-medium">1.250€</p>
                                <RingDiagramm />
                            </div>

                            <div className="grid grid-cols-1 gap-5">
                                <div className="bg-white px-8 py-10 rounded-lg flex flex-col gap-2">
                                    <p className="font-bold text-sm">Avalco-Guthaben</p>
                                    <h1 className="font-semibold text-4xl">{loggedInUser?.balance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</h1>
                                    <p className="text-xs text-gray-500">Verfügbar</p>
                                    <br></br>
                                    <button onClick={() => navigate("/payment")} className="bg-primary py-2 px-4 text-sm text-white font-medium rounded-lg">Geld einzahlen oder auszahlen</button>
                                </div>
                            </div>

                            <div className="col-span-2 bg-white py-10 rounded-lg px-5 w-full flex flex-col items-start justify-start">
                                <p className="font-semibold text-sm">Wöchentliche Zahlungen</p>
                                <p className="text-gray-500 text-xs font-medium">Vor 1 Woche aktualisiert</p>
                                <br></br>
                                <BarChart data={data} />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 w-96">

                            <a href="/transfer" className="bg-white px-8 py-4 rounded-lg flex justify-between items-center space-x-20 w-full h-fit">
                                <p className="font-semibold">Geld senden</p>
                                <div className="bg-primary rounded-sm p-1.5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 6.44772 2.44772 6 3 6H20.5C21.0523 6 21.5 6.44772 21.5 7C21.5 7.55228 21.0523 8 20.5 8H3C2.44772 8 2 7.55228 2 7Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071C15.9024 11.3166 15.9024 10.6834 16.2929 10.2929L19.5858 7L16.2929 3.70711C15.9024 3.31658 15.9024 2.68342 16.2929 2.29289Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 17C2.5 16.4477 2.94772 16 3.5 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3.5C2.94772 18 2.5 17.5523 2.5 17Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071L4.41421 17L7.70711 20.2929C8.09763 20.6834 8.09763 21.3166 7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929Z" fill="#FFFFFF" />
                                    </svg>
                                </div>
                            </a>

                            <div className="bg-white rounded-lg px-8 py-4">
                                <p className="font-medium">Letzte Aktivitäten</p>

                                <br></br>

                                <div className="flex flex-col gap-5">

                                    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                        <div className="flex space-x-4">
                                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                            <div>
                                                <p className="font-medium text-sm">Max Mustermann</p>
                                                <p className="text-xs text-gray-500">Offen • Rechnung</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>

                                    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                        <div className="flex space-x-4">
                                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                            <div>
                                                <p className="font-medium text-sm">Max Mustermann</p>
                                                <p className="text-xs text-gray-500">Offen • Ratenzahlung</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>

                                    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                        <div className="flex space-x-4">
                                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                            <div>
                                                <p className="font-medium text-sm">Max Mustermann</p>
                                                <p className="text-xs text-gray-500">Abgeschlossen • Überweisung</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>

                                    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                        <div className="flex space-x-4">
                                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                            <div>
                                                <p className="font-medium text-sm">Max Mustermann</p>
                                                <p className="text-xs text-gray-500">Abgeschlossen • Überweisung</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>

                                    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                        <div className="flex space-x-4">
                                            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                            <div>
                                                <p className="font-medium text-sm">Max Mustermann</p>
                                                <p className="text-xs text-gray-500">Abgeschlossen • Überweisung</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && !isOpen && (
                <div className="mb-10 w-full px-5">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">

                        <div className="grid grid-cols-1 gap-5">
                            <div className="bg-white px-8 py-5 rounded-lg flex flex-col gap-2">
                                <p className="font-bold text-sm">Avalco-Guthaben</p>
                                <h1 className="font-semibold text-4xl">{loggedInUser?.balance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</h1>
                                <p className="text-xs text-gray-500">Verfügbar</p>
                                <br></br>
                                <button onClick={() => navigate("/payment")} className="bg-primary py-2 px-4 text-sm text-white font-medium rounded-lg">Geld einzahlen oder auszahlen</button>
                            </div>
                        </div>

                        <div className="bg-white px-8 py-5 rounded-lg">
                            <p className="font-semibold text-sm">Rückzahlungsstatus</p>
                            <p className="text-sm text-gray-500 font-medium">1.250€</p>
                            <div className="flex justify-center">
                                <RingDiagramm />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg px-8 py-4">
                            <p className="font-medium">Letzte Aktivitäten</p>

                            <br></br>

                            <div className="flex flex-col gap-5">

                                <a href="/activities/installment" className="flex justify-between items-center rounded-lg py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                    <div className="flex space-x-4">
                                        <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                        <div>
                                            <p className="font-medium text-sm">Max Mustermann</p>
                                            <p className="text-xs text-gray-500">Offen • Rechnung</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>

                                <a href="/activities/installment" className="flex justify-between items-center rounded-lg py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                    <div className="flex space-x-4">
                                        <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                        <div>
                                            <p className="font-medium text-sm">Max Mustermann</p>
                                            <p className="text-xs text-gray-500">Offen • Rechnung</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>

                                <a href="/activities/installment" className="flex justify-between items-center rounded-lg py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                    <div className="flex space-x-4">
                                        <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                        <div>
                                            <p className="font-medium text-sm">Max Mustermann</p>
                                            <p className="text-xs text-gray-500">Offen • Rechnung</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>

                                <a href="/activities/installment" className="flex justify-between items-center rounded-lg py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
                                    <div className="flex space-x-4">
                                        <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>
                                        <div>
                                            <p className="font-medium text-sm">Max Mustermann</p>
                                            <p className="text-xs text-gray-500">Offen • Rechnung</p>
                                        </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 text-[#757575]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>
                                <a className="text-primary">Alle anzeigen</a>
                            </div>
                        </div>

                    </main>

                </div >
            )}
        </div >

    );
}
export default Dashboard;