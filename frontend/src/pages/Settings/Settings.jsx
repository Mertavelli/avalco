import React, { useState, useEffect } from "react";

const Settings = () => {
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

                    <p className="font-semibold text-primary text-2xl">Einstellungen</p>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className="grid grid-cols-3 gap-5">

                        <div className="col-span-3 relative">

                            <div className="absolute top-32 left-10 border-white border-2 text-2xl p-5 h-28 w-28 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>

                            <div className="bg-primary h-48 rounded-t-xl">
                                <p className="p-8 text-white font-semibold text-2xl">Profil</p>
                            </div>

                            <div className="bg-white rounded-b-xl px-10 flex flex-col gap-10">

                                <br></br>
                                <br></br>

                                <div className="flex justify-between items-end">
                                    <p className="text-xl font-semibold">Max Mustermann</p>
                                    <a href="/settings/change/name" className="font-medium text-primary">Name ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">E-Mail-Adresse</p>
                                        <p className="">maxmustermann@muster.com</p>
                                    </div>

                                    <a href="/settings/change/email" className="font-medium text-primary">Ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">Telefonnummer</p>
                                        <p className="">+49 1** ***1040</p>
                                    </div>

                                    <a href="/settings/change/telephone" className="font-medium text-primary">Ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">Adresse</p>
                                        <p className="">Musterstraße 2</p>
                                        <p className="">Musterstadt</p>
                                        <p className="">73252</p>
                                    </div>

                                    <a href="/settings/change/adress" className="font-medium text-primary">Bearbeiten</a>
                                </div>

                                <br></br>

                            </div>
                        </div>

                    </div>
                </div>
            )}

            {windowWidth < 1024 && (
                <div className="mb-10 w-full px-5 h-screen">
                    <br></br>
                    <main className="grid grid-cols-1 gap-5">
                        <div className="relative">

                            <div className="absolute top-36 left-10 border-white border-2 text-2xl p-5 h-24 w-24 rounded-full bg-pink font-semibold text-white items-center flex justify-center">MM</div>

                            <div className="bg-primary h-48 rounded-t-xl">
                                <p className="p-8 text-white font-semibold text-2xl">Profil</p>
                            </div>

                            <div className="bg-white rounded-b-xl px-5 flex flex-col gap-10">

                                <br></br>
                                <br></br>

                                <div className="flex justify-between items-end">
                                    <p className="text-xl font-semibold">Max Mustermann</p>
                                    <a href="/settings/change/name" className="font-medium text-primary">Name ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">E-Mail-Adresse</p>
                                        <p className="text-sm">maxmustermann@muster.com</p>
                                    </div>

                                    <a href="/settings/change/email" className="font-medium text-primary">Ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">Telefonnummer</p>
                                        <p className="text-sm">+49 1** ***1040</p>
                                    </div>

                                    <a href="/settings/change/telephone" className="font-medium text-primary">Ändern</a>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xl font-medium">Adresse</p>
                                        <p className="text-sm">Musterstraße 2</p>
                                        <p className="text-sm">Musterstadt</p>
                                        <p className="text-sm">73252</p>
                                    </div>

                                    <a href="/settings/change/adress" className="font-medium text-primary">Bearbeiten</a>
                                </div>

                                <br></br>

                            </div>
                        </div>
                    </main>
                </div>
            )}

        </div>
    )
}
export default Settings;