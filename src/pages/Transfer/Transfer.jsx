import React, { useState, useEffect } from "react";
import SearchBar from "../../components/Transfer/SearchBar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setTransfer } from "../../features/transfer/transferSlice";

const Transfer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [invoice, setInvoice] = useState(false);
    const [installment, setInstallment] = useState(false);
    const dispatch = useDispatch();
    const transfer = useSelector((state) => state.transfer || {});
    /*     console.log(transfer) */

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
        dispatch(
            setTransfer({
                ...transfer,
                installment,
                invoice,
                fee: (!installment && !invoice) ? 0 : (installment ? 14.79 : 11.95) // Festlegung eff. Zins
            })
        );
    }, [invoice, installment])

    return (
        <div className="flex justify-center flex-grow">

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div className="px-5 mt-10 grid grid-cols-1 h-fit max-w-[1000px]">


                    <p className="font-semibold text-primary text-2xl">Geld senden</p>
                    {!invoice && !installment && <p className="font-semibold text-primary text-lg">Zahlungsart: Überweisung</p>}
                    {invoice && <p className="font-semibold text-primary text-lg">Zahlungsart: Nach 30 Tagen zahlen</p>}
                    {installment && <p className="font-semibold text-primary text-lg">Zahlungsart: In Raten zahlen</p>}

                    <br></br>
                    <br></br>
                    <br></br>


                    <div className="grid grid-cols-3 gap-20">

                        <div className="col-span-2">
                            <SearchBar className="w-full" />
                        </div>

                        <div className="flex flex-col gap-5 w-full">
                            <div className="text-2xl font-medium mb-5">
                                <h2>Weitere</h2>
                                <h2>Möglichkeiten Geld</h2>
                                <h2>zu senden</h2>
                            </div>

                            <button
                                onClick={() => {
                                    setInstallment(false)
                                    setInvoice(!invoice)
                                }}
                                className={`flex space-x-5 bg-white p-5 rounded-lg items-center col-span-2  ${invoice ? "border-2 border-primary" : "hover:bg-gray-200"}`}>
                                <img src="/images/other/icons/invoice.svg" className="h-6" />
                                <div>
                                    <h3 className="text-left font-semibold">Nach 30 Tagen zahlen</h3>
                                    <h3 className="text-left text-sm">Einfach mit dem nächsten gehalt zahlen.</h3>
                                </div>
                            </button>

                            <button
                                onClick={() => {
                                    setInstallment(!installment)
                                    setInvoice(false)
                                }}
                                className={`flex space-x-5 bg-white p-5 rounded-lg items-center col-span-2  ${installment ? "border-2 border-primary" : "hover:bg-gray-200"}`}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Calendar / Calendar_Days">
                                        <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#1167FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                                <div>
                                    <h3 className="text-left font-semibold">In Raten zahlen</h3>
                                    <h3 className="text-left text-sm">Zahle jeden Monat ein kleines Bisschen.</h3>
                                </div>
                            </button>

                            <p className="text-sm">Wählen Sie hierfür einfach die entsprechende Zahlungsart aus.</p>
                        </div>
                    </div>

                </div>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 bg-white h-screen">
                    <br></br>

                    <main>
                        <h2 className="text-xl font-medium">Geld senden</h2>
                        {transfer?.invoice && <p className="font-semibold text-primary">Zahlungsart: Nach 30 Tagen zahlen</p>}
                        {transfer?.installment && <p className="font-semibold text-primary">Zahlungsart: In Raten zahlen</p>}
                        <br></br>
                        <SearchBar className="w-full" />
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3 className="text-2xl font-medium">Weitere Möglichkeiten zum Senden</h3>
                        <br></br>

                        <button
                            onClick={() => {
                                setInstallment(false)
                                setInvoice(!invoice)
                            }}
                            className={`flex space-x-5 bg-white p-5 rounded-lg items-center col-span-2  ${invoice ? "border-2 border-primary" : "hover:bg-gray-200"}`}>
                            <img src="./images/other/icons/invoice.svg" className="h-6" />
                            <div>
                                <h3 className="font-semibold">Nach 30 Tagen zahlen</h3>
                                <h3 className="text-sm">Einfach mit dem nächsten gehalt zahlen.</h3>
                            </div>
                        </button>

                        <button
                            onClick={() => {
                                setInstallment(!installment)
                                setInvoice(false)
                            }}
                            className={`flex space-x-5 bg-white p-5 rounded-lg items-center col-span-2  ${installment ? "border-2 border-primary" : "hover:bg-gray-200"}`}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Calendar / Calendar_Days">
                                    <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="#1167FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                            <div>
                                <h3 className="font-semibold">In Raten zahlen</h3>
                                <h3 className="text-sm">Zahle jeden Monat ein kleines Bisschen.</h3>
                            </div>
                        </button>
                    </main>
                </div>

            )}
        </div>

    );
}
export default Transfer;