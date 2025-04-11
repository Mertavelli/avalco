import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TransferSuccess() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate()
    const [description, setDescription] = useState("")
    const transfer = useSelector((state) => state.transfer || {});

    useEffect(() => {
        const checkMobileAndWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', checkMobileAndWidth);

        return () => {
            window.removeEventListener('resize', checkMobileAndWidth);
        };
    }, []);

    const submitHandler = () => {
        navigate("/transfer")
    }

    return (
        <div className="flex justify-center items-center flex-grow">

            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div>
                    <div className="h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                        <div className="flex justify-center flex-col items-center">
                            <img src="/images/other/tik.svg" className="w-40" />
                        </div>

                        <br></br>
                        <p className="font-medium text-xl text-center">Sie haben {transfer?.netto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR an {transfer?.receiver?.name} gesendet.</p>
                        <br></br>
                        <p className="text-sm text-center">Wir sagen {transfer?.receiver?.name} Bescheid, dass Sie Geld gesendet haben.</p>
                        <br></br>
                    </div>


                    <br></br>

                    <div className="px-10">
                        <button onClick={submitHandler} className="bg-primary text-white font-medium w-full rounded-lg py-3">Mehr Geld senden</button>
                        <button onClick={() => navigate("/dashboard")} className="text-primary font-medium w-full mt-5">Zum Dashboard</button>
                    </div>

                </div>

            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>

                    <div>
                        <div className="h-fit max-w-[1000px] bg-white rounded-xl py-5 px-10">
                            <div className="flex justify-center flex-col items-center">
                                <img src="/images/other/tik.svg" className="w-30" />
                            </div>

                            <br></br>
                            <p className="font-medium text-xl text-center">Sie haben {transfer?.netto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} EUR an {transfer?.receiver?.name} gesendet.</p>
                            <br></br>
                            <p className="text-sm text-center">Wir sagen {transfer?.receiver?.name} Bescheid, dass Sie Geld gesendet haben.</p>
                            <br></br>
                        </div>

                        <br></br>

                        <div className="px-10">
                            <button onClick={submitHandler} className="bg-primary text-white font-medium w-full rounded-lg py-3">Mehr Geld senden</button>
                            <button onClick={() => navigate("/dashboard")} className="text-primary font-medium w-full mt-5">Zum Dashboard</button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
