import React, { useEffect, useState } from "react";
import RingDiagramm from "../../components/Dashboard/RingDiagramm";
import BarChart from "../../components/Dashboard/BarChart";
const staticUser = { balance: 4820.75 };

const weeklyChartData = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
        {
            label: "Weekly payments (EUR)",
            data: [100, 150, 120, 200, 180, 250, 210],
            backgroundColor: "#1167FF",
            borderColor: "#1167FF",
            borderWidth: 1,
            barThickness: 35,
        },
    ],
};

const activities = [
    { name: "Max Mustermann", status: "Open • Invoice" },
    { name: "Max Mustermann", status: "Open • Installments" },
    { name: "Max Mustermann", status: "Completed • Transfer" },
    { name: "Max Mustermann", status: "Completed • Transfer" },
    { name: "Max Mustermann", status: "Completed • Transfer" },
];

const Currency = ({ value }) => (
    <span>
        {Number(value).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR
    </span>
);

const ActivityRow = ({ name, status }) => (
    <div className="flex justify-between items-center rounded-lg px-2 py-1 hover:bg-gray-100 transition-all ease-in-out duration-300">
        <div className="flex space-x-4">
            <div className="p-5 h-10 w-10 rounded-full bg-pink font-semibold text-white items-center flex justify-center">
                {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
            </div>
            <div>
                <p className="font-medium text-sm">{name}</p>
                <p className="text-xs text-gray-500">{status}</p>
            </div>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 text-[#757575]"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
);

const DashboardStatic = ({ isOpen, forceLayout }) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const setWidth = () => setWindowWidth(window.innerWidth);
            setWidth();
            window.addEventListener("resize", setWidth, { passive: true });
            return () => window.removeEventListener("resize", setWidth);
        }
    }, []);

    const isDesktop = forceLayout
        ? forceLayout === "desktop"
        : windowWidth >= 1024;

    return (
        <div className="flex justify-center flex-grow">
            {/* Desktop */}
            {isDesktop && (
                <div className="px-5 mt-10 grid grid-cols-1 h-fit max-w-[1000px]">
                    <p className="font-semibold text-primary text-2xl">Dashboard</p>
                    <div className="h-8" />

                    <div className="flex space-x-5">
                        <div className="grid grid-cols-2 gap-5 h-fit">
                            {/* Repayment status */}
                            <div className="bg-white px-8 py-10 rounded-lg">
                                <p className="font-semibold text-sm">Repayment status</p>
                                <p className="text-sm text-gray-500 font-medium">€1,250</p>
                                <RingDiagramm />
                            </div>

                            {/* Balance */}
                            <div className="grid grid-cols-1 gap-5">
                                <div className="bg-white px-8 py-10 rounded-lg flex flex-col gap-2">
                                    <p className="font-bold text-sm">Avalco balance</p>
                                    <h1 className="font-semibold text-4xl">
                                        <Currency value={staticUser.balance} />
                                    </h1>
                                    <p className="text-xs text-gray-500">Available</p>
                                    <div className="h-4" />
                                    <button
                                        aria-disabled="true"
                                        tabIndex="-1"
                                        className="bg-primary/80 py-2 px-4 text-sm text-white font-medium rounded-lg pointer-events-none select-none cursor-default"
                                    >
                                        Deposit or withdraw money
                                    </button>
                                </div>
                            </div>

                            {/* Weekly payments */}
                            <div className="col-span-2 bg-white py-10 rounded-lg px-5 w-full flex flex-col items-start justify-start">
                                <p className="font-semibold text-sm">Weekly payments</p>
                                <p className="text-gray-500 text-xs font-medium">Updated 1 week ago</p>
                                <div className="h-4" />
                                <BarChart data={weeklyChartData} />
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="flex flex-col gap-5 w-96">
                            {/* Send money card (non-interactive) */}
                            <div className="bg-white px-8 py-4 rounded-lg flex justify-between items-center space-x-20 w-full h-fit pointer-events-none select-none">
                                <p className="font-semibold">Send money</p>
                                <div className="bg-primary rounded-sm p-1.5">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 6.44772 2.44772 6 3 6H20.5C21.0523 6 21.5 6.44772 21.5 7C21.5 7.55228 21.0523 8 20.5 8H3C2.44772 8 2 7.55228 2 7Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071C15.9024 11.3166 15.9024 10.6834 16.2929 10.2929L19.5858 7L16.2929 3.70711C15.9024 3.31658 15.9024 2.68342 16.2929 2.29289Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 17C2.5 16.4477 2.94772 16 3.5 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3.5C2.94772 18 2.5 17.5523 2.5 17Z" fill="#FFFFFF" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071L4.41421 17L7.70711 20.2929C8.09763 20.6834 8.09763 21.3166 7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929Z" fill="#FFFFFF" />
                                    </svg>
                                </div>
                            </div>

                            {/* Recent activity */}
                            <div className="bg-white rounded-lg px-8 py-4">
                                <p className="font-medium">Recent activity</p>
                                <div className="h-3" />
                                <div className="flex flex-col gap-5">
                                    {activities.map((a, idx) => (
                                        <ActivityRow key={idx} name={a.name} status={a.status} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile */}
            {!isDesktop && !isOpen && (
                <div className="mb-10 w-full px-5">
                    <main className="grid grid-cols-1 gap-5">
                        {/* Balance */}
                        <div className="bg-white px-8 py-5 rounded-lg flex flex-col gap-2">
                            <p className="font-bold text-sm">Avalco balance</p>
                            <h1 className="font-semibold text-4xl">
                                <Currency value={staticUser.balance} />
                            </h1>
                            <p className="text-xs text-gray-500">Available</p>
                            <div className="h-4" />
                            <button
                                aria-disabled="true"
                                tabIndex="-1"
                                className="bg-primary/80 py-2 px-4 text-sm text-white font-medium rounded-lg pointer-events-none select-none cursor-default"
                            >
                                Deposit or withdraw money
                            </button>
                        </div>

                        {/* Repayment status */}
                        <div className="bg-white px-8 py-5 rounded-lg">
                            <p className="font-semibold text-sm">Repayment status</p>
                            <p className="text-sm text-gray-500 font-medium">€1,250</p>
                            <div className="flex justify-center">
                                <RingDiagramm />
                            </div>
                        </div>

                        {/* Recent activity */}
                        <div className="bg-white rounded-lg px-8 py-4">
                            <p className="font-medium">Recent activity</p>
                            <div className="h-3" />
                            <div className="flex flex-col gap-5">
                                {activities.slice(0, 4).map((a, idx) => (
                                    <ActivityRow key={idx} name={a.name} status={a.status} />
                                ))}
                                <span className="text-primary pointer-events-none select-none">See all</span>
                            </div>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
};

export default DashboardStatic;
