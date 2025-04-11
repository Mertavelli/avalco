import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "./PaymentMethod";
import { useSelector } from "react-redux";
import { useCreateTransferMutation } from "../../features/transfer/transferApi";
import { useDispatch } from "react-redux";
import { setTransfer } from "../../features/transfer/transferSlice";
import Cookies from "js-cookie";

function calculateMonthlyPayments(brutto, annualInterestRate, selectedRate) {
    // Umwandlung des effektiven Jahreszinses von Prozent in Dezimalzahl
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    // Berechne den Gesamtbetrag inklusive Gebühr/Zinsen
    const totalAmount = brutto * (1 + monthlyInterestRate);

    // Berechne die monatliche Rate basierend auf dem effektiven Jahreszins
    const monthlyPayment = totalAmount / selectedRate;

    // Runde die monatliche Rate auf 2 Dezimalstellen
    const roundedMonthlyPayment = Math.round(monthlyPayment * 100) / 100;

    return roundedMonthlyPayment;
}

export default function TransferSummary({ }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const transfer = useSelector((state) => state.transfer || {});
    const loggedInUser = useSelector((state) => state.auth.user || {});
    const [createTransfer, { data: newTransfer }] = useCreateTransferMutation();
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")

    const balance = !transfer.invoice && !transfer.installment
    const invoice = transfer.invoice
    const installment = transfer.installment
    const [selectedRate, setSelectedRate] = useState(2)

    const brutto = (p_selectedRate) => {
        if (invoice) {
            const monthlyInterestRate = transfer.fee / 100 / 12;
            const totalAmount = transfer.netto * (1 + monthlyInterestRate) + 0.45;
            const roundedAmount = Math.floor(totalAmount * 100) / 100; // Rundet auf zwei Dezimalstellen ab
            return roundedAmount;
        } else if (installment) {
            const monthlyInterestRate = transfer.fee / 100 / 12;
            const totalAmount = transfer.netto * (1 + monthlyInterestRate) + (p_selectedRate * 0.45);
            const roundedAmount = Math.floor(totalAmount * 100) / 100; // Rundet auf zwei Dezimalstellen ab
            return roundedAmount;
        }
        return transfer.netto;
    };

    useEffect(() => {
        Cookies.set('transfer', JSON.stringify(transfer));
    }, [transfer]);

    useEffect(() => {
        dispatch(
            setTransfer({
                ...transfer,
                brutto: brutto(selectedRate)
            })
        );
    }, [brutto()])

    const handleIsOpen = () => {
        setIsOpen(false)
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

    useEffect(() => {
        if (newTransfer?._id) {
            dispatch(
                setTransfer({
                    ...newTransfer
                })
            );
            navigate("/transfer/amount/summary/success")
        }
    }, [newTransfer]);

    const extractInitials = (fullName) => {
        if (fullName) {
            const names = fullName.split(" ");
            let initials = "";

            if (names.length >= 1) {
                initials += names[0].charAt(0);
            }

            if (names.length > 1) {
                initials += names[names.length - 1].charAt(0);
            }

            return initials.toUpperCase();
        }
    };

    return (

        <div className={`flex justify-center items-center flex-grow`}>

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div>
                    <div className="h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                        <br></br>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="flex items-center space-x-5 px-5 py-1">
                                <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">{extractInitials(transfer?.receiver?.name) || "Loading..."}</div>
                                <div>
                                    <p className="font-medium">{transfer?.receiver?.name}</p>
                                    <p className="text-sm">{transfer?.receiver?.email}</p>
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <h1 className="text-black font-semibold text-4xl text-center">{transfer?.netto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                        <br></br>
                        <br></br>
                        <p>{transfer?.description}</p>
                    </div>

                    {installment && (
                        <div className="mt-5 h-fit max-w-[1000px] grid grid-cols-2 gap-2">

                            <button
                                onClick={() => setSelectedRate(2)}
                                className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 2 ? "border-2 border-primary" : ""} `}>
                                <p className="font-semibold">2 Raten</p>
                                <p>{calculateMonthlyPayments(brutto(2), transfer.fee, 2).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                            </button>

                            <button
                                onClick={() => setSelectedRate(6)}
                                className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 6 ? "border-2 border-primary" : ""} `}>
                                <p className="font-semibold">6 Raten</p>
                                <p>{calculateMonthlyPayments(brutto(6), transfer.fee, 6).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                            </button>

                            <button
                                onClick={() => setSelectedRate(4)}
                                className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 4 ? "border-2 border-primary" : ""} `}>
                                <p className="font-semibold">4 Raten</p>
                                <p>{calculateMonthlyPayments(brutto(4), transfer.fee, 4).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                            </button>

                            <button
                                onClick={() => setSelectedRate(12)}
                                className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 12 ? "border-2 border-primary" : ""} `}>
                                <p className="font-semibold">12 Raten</p>
                                <p>{calculateMonthlyPayments(brutto(12), transfer.fee, 12).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                            </button>

                        </div>
                    )}

                    <div className="mt-5 h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">

                        <button onClick={() => navigate("/transfer/payment-methods")} className="w-full hover:bg-gray-100 transition-all ease-in-out duration-100 p-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    {balance && <img src="/images/logos/logo_solo.svg" className="w-5" />}
                                    {invoice && <img src="/images/other/icons/invoice.svg" className="w-5" />}
                                    {installment && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Calendar / Calendar_Days">
                                            <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#1167FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>}

                                    {balance && <p className="text-sm">Avalco-Guthaben</p>}
                                    {invoice && <p className="text-sm">Nach 30 Tagen zahlen</p>}
                                    {installment && <p className="text-sm">In Raten zahlen</p>}
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </button>

                        <br></br>
                        <br></br>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between space-x-10">
                                <p>Avalco-Gebühr</p>
                                <p>{(brutto(selectedRate) - transfer?.netto).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                            </div>
                            <div className="flex justify-between space-x-10">
                                <p className="font-bold">Summe</p>
                                <p className="font-bold">{brutto(selectedRate).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                            </div>
                            <div className="flex justify-between space-x-10">
                                <p>Abwicklungszeit</p>
                                <p>In wenigen Sekunden</p>
                            </div>
                        </div>


                    </div>

                    <br></br>

                    {msg && <p className="text-red-600">{msg}</p>}

                    {installment && (
                        <div className="flex flex-col justify-center gap-5 text-justify max-w-[1000px]">
                            <p className="text-gray-500 text-sm">Repräsentatives Beispiel: Basierend auf deiner Zahlung von 0,00 EUR. Der Gesamtbetrag des Kredits in Höhe von 0,00 EUR wird über eine Gesamtlaufzeit von 2 Monaten zu einem Zinssatz von 10,00 % p. a. (fest) verteilt. Das entspricht 2 monatlichen Ratenzahlungen in Höhe von 0,00 EUR. Insgesamt zu zahlen 0,00 EUR. 10 % eff. Jahreszins ist ein repräsentatives Beispiel. Die Gesamtkosten des Kredits betragen 0,00 EUR</p>
                            <p className="text-sm">Wenn ich fortfahre, akzeptiere ich die Nutzungsbedingungen von EasyCreditor und bestätige, dass ich die Datenschutzerklärung und die Cookie-Erklärung gelesen habe.</p>
                        </div>
                    )}

                    <br></br>

                    <div className="px-10">
                        <button onClick={() => {
                            if (loggedInUser?.balance >= transfer?.brutto) {
                                createTransfer({ ...transfer, selectedRate })
                            } else {
                                setMsg(`Ihr Avalco-Guthaben in Höhe von ${loggedInUser?.balance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR reicht leider nicht aus.`)
                            }
                        }} className="bg-primary text-white font-medium w-full rounded-lg py-3">Senden</button>
                        <button onClick={() => navigate("/transfer/amount")} className="text-primary font-medium w-full mt-5">Zurück</button>
                    </div>

                </div>

            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>
                    <div>
                        <div className="h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                            <br></br>
                            <div className="grid grid-cols-1 gap-5">
                                <div className="flex items-center space-x-5 px-5 py-1">
                                    <div className="p-5 h-14 w-14 rounded-full bg-pink font-semibold text-white items-center flex justify-center">
                                        {extractInitials(transfer?.receiver?.name) || ""}
                                    </div>
                                    <div>
                                        <p className="font-medium">{transfer?.receiver?.name}</p>
                                        <p className="text-sm">{transfer?.receiver?.email}</p>
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <br></br>
                            <h1 className="text-black font-semibold text-4xl text-center">{transfer?.netto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
                            <br></br>
                            <br></br>
                            <p>{transfer?.description}</p>
                        </div>


                        {installment && (
                            <div className="mt-5 h-fit max-w-[1000px] grid grid-cols-1 gap-2">

                                <button
                                    onClick={() => setSelectedRate(2)}
                                    className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 2 ? "border-2 border-primary" : ""} `}>
                                    <p className="font-semibold">2 Raten</p>
                                    <p>{calculateMonthlyPayments(brutto(2), transfer.fee, 2).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                                </button>

                                <button
                                    onClick={() => setSelectedRate(4)}
                                    className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 4 ? "border-2 border-primary" : ""} `}>
                                    <p className="font-semibold">4 Raten</p>
                                    <p>{calculateMonthlyPayments(brutto(4), transfer.fee, 4).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                                </button>

                                <button
                                    onClick={() => setSelectedRate(6)}
                                    className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 6 ? "border-2 border-primary" : ""} `}>
                                    <p className="font-semibold">6 Raten</p>
                                    <p>{calculateMonthlyPayments(brutto(6), transfer.fee, 6).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                                </button>

                                <button
                                    onClick={() => setSelectedRate(12)}
                                    className={`flex justify-between space-x-10 text-sm bg-white rounded-lg p-5 hover:bg-gray-100 transition-all ease-in-out duration-100 ${selectedRate === 12 ? "border-2 border-primary" : ""} `}>
                                    <p className="font-semibold">12 Raten</p>
                                    <p>{calculateMonthlyPayments(brutto(12), transfer.fee, 12).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR/Monat</p>
                                </button>

                            </div>
                        )}

                        <div className="mt-5 h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">

                            <button onClick={() => navigate("/transfer/payment-methods")} className="w-full hover:bg-gray-100 transition-all ease-in-out duration-100 p-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {balance && <img src="/images/logos/logo_solo.svg" className="w-5" />}
                                        {invoice && <img src="/images/other/icons/invoice.svg" className="w-5" />}
                                        {installment && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Calendar / Calendar_Days">
                                                <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#1167FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </svg>}

                                        {balance && <p className="text-sm">Avalco-Guthaben</p>}
                                        {invoice && <p className="text-sm">Nach 30 Tagen zahlen</p>}
                                        {installment && <p className="text-sm">In Raten zahlen</p>}
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </button>

                            <br></br>
                            <br></br>

                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between space-x-10">
                                    <p>Avalco-Gebühr</p>
                                    <p>{(brutto(selectedRate) - transfer.netto).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                                </div>
                                <div className="flex justify-between space-x-10">
                                    <p className="font-bold">Summe</p>
                                    <p className="font-bold">{brutto(selectedRate).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR</p>
                                </div>
                                <div className="flex justify-between space-x-10">
                                    <p>Abwicklungszeit</p>
                                    <p>In wenigen Sekunden</p>
                                </div>
                            </div>


                        </div>

                        <br></br>
                        {msg && <p className="text-red-600">{msg}</p>}
                        <br></br>

                        <div className="px-10">
                            <button onClick={() => {
                                if (loggedInUser?.balance >= transfer?.brutto) {
                                    createTransfer({ ...transfer, selectedRate })
                                } else {
                                    setMsg(`Ihr Avalco-Guthaben in Höhe von ${loggedInUser?.balance.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR reicht leider nicht aus.`)
                                }
                            }} className="bg-primary text-white font-medium w-full rounded-lg py-3">Senden</button>
                            <button onClick={() => navigate("/transfer/amount")} className="text-primary font-medium w-full mt-5">Zurück</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
