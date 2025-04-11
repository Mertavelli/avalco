import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTransfer } from "../../features/transfer/transferSlice";

export default function PaymentMethod() {
    const navigate = useNavigate()
    const [showMethods, setShowMethods] = useState(false);
    const dispatch = useDispatch();
    const transfer = useSelector((state) => state.transfer || {});
    const [invoice, setInvoice] = useState(transfer.invoice || false);
    const [installment, setInstallment] = useState(transfer.installment || false);

    console.log("transfer", transfer)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMethods(true);
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    const submitHandler = () => {
        navigate("/transfer/amount/summary")
    }

    useEffect(() => {
        dispatch(
            setTransfer({
                ...transfer,
                installment,
                invoice,
                fee: (!installment && !invoice) ? 0 : (installment ? 0.1479 : 0.1195) // Festlegung eff. Zins
            })
        );
    }, [invoice, installment])

    return (
        <div className={`payment-gateway fixed bottom-0 left-0 right-0 transform transition-transform duration-300 ease-in-out ${showMethods ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex justify-center flex-grow">
                <div className="h-screen max-w-[1000px] w-full bg-white py-5 px-10">
                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 className="text-center text-xl font-medium">Wie möchten Sie bezahlen?</h1>
                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="flex flex-col gap-5">

                        <button onClick={() => {
                            setInstallment(false)
                            setInvoice(false)
                        }} className={`w-full p-3 ${(!invoice && !installment) ? "bg-primary bg-opacity-20" : "bg-white"}`}>
                            <div className="flex items-center space-x-5">
                                <img src="/images/logos/logo_solo.svg" className="w-10" />
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-left">Avalco-Guthaben</p>
                                    <p className="text-sm text-left">27.632 EUR Verfügbar</p>
                                </div>
                            </div>
                        </button>


                        <button onClick={() => {
                            setInstallment(false)
                            setInvoice(true)
                        }} className={`w-full p-3 ${invoice ? "bg-primary bg-opacity-20" : "bg-white"}`}>
                            <div className="flex items-center space-x-5">
                                <img src="/images/other/icons/invoice.svg" className="w-6.5" />
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-left">In 30 Tagen zahlen</p>
                                    <p className="text-sm text-left">Einfach mit dem nächsten Gehalt zahlen.</p>
                                </div>
                            </div>
                        </button>

                        <button onClick={() => {
                            setInstallment(true)
                            setInvoice(false)
                        }} className={`w-full p-3 ${installment ? "bg-primary bg-opacity-20" : "bg-white"}`}>
                            <div className="flex items-center space-x-5">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Calendar / Calendar_Days">
                                        <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#1167FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                                <div className="flex flex-col items-start">
                                    <p className="font-semibold text-left">In Raten zahlen</p>
                                    <p className="text-sm text-left">Zahle jeden Monat ein kleines Bisschen.</p>
                                </div>
                            </div>
                        </button>

                        <a className="text-primary font-semibold">+ Neues Bankkonto hinzufügen</a>

                        <br></br>

                        <div className="flex justify-center items-center flex-col gap-5">
                            <button onClick={submitHandler} className="bg-primary rounded-lg text-white font-medium py-2 w-fit px-16">Weiter</button>
                            <button onClick={submitHandler} className="text-primary font-medium">Zurück</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
