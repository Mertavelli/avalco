import React, { useState, useEffect } from "react";
import Register1 from "../../components/Auth/Register1";
import Register2 from "../../components/Auth/Register2";
import Register3 from "../../components/Auth/Register3";

const tabs = {
    1: Register1,
    2: Register2,
    3: Register3,
};

const SignUp = () => {
    const [activeTab, setActiveTab] = useState(1);
    const Tab = tabs[activeTab];
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
        <div>
            {/* Desktop */}
            {windowWidth >= 1024 && (
                <div className="p-5">
                    <a href="/">
                        <img src="./images/logos/avalco_lettering_black.svg" className="h-6" />
                    </a>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-20">

                            <div className="w-full h-screen grid grid-cols-1 content-center">
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-bold text-4xl">Registrieren bei Avalco</h1>
                                    <h2 className="font-semibold text-xl">Werde noch flexibler!</h2>
                                </div>

                                <br></br>

                                <div className="text-sm">
                                    <p>Wenn du bereits einen Account hast</p>
                                    <div className="flex space-x-1">
                                        <p>kannst du dich</p>
                                        <a href="/sign-in" className="text-primary font-medium">hier einloggen!</a>
                                    </div>
                                </div>

                                <img src="./images/other/auth_content.png" className="max-w-[525px]" />
                            </div>

                            <div className="w-[500px]">
                                <br></br>
                                {activeTab === 1 && (
                                    <h2 className="font-semibold text-xl">Registrieren</h2>
                                )}
                                {activeTab === 2 && (
                                    <div>
                                        <h2 className="font-semibold text-xl">E-Mail Adresse bestätigen</h2>
                                        <br></br>
                                        <p className="text-sm">Gib den Verifizierungscode ein, den wir dir vor kurzem an deine E-Mail Adresse gesendet haben.</p>
                                    </div>
                                )}
                                {activeTab === 3 && (
                                    <h2 className="font-semibold text-xl">Anschrift</h2>
                                )}
                                <Tab setActiveTab={setActiveTab} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile */}
            {windowWidth < 1024 && (
                <div className="p-5 min-h-screen">
                    <a href="/">
                        <img src="./images/logos/avalco_lettering_black.svg" className="h-6" />
                    </a>

                    <div className="flex flex-col justify-center mt-10">
                        <div className="grid grid-cols-1">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold text-2xl">Registrieren bei Avalco</h1>
                                <h2 className="font-semibold text-xl">Werde noch flexibler!</h2>
                            </div>

                            <br></br>

                            <div className="text-sm">
                                <p>Wenn du bereits einen Account hast</p>
                                <div className="flex space-x-1">
                                    <p>kannst du dich</p>
                                    <a href="/sign-in" className="text-primary font-medium">hier einloggen!</a>
                                </div>
                            </div>

                            <Tab setActiveTab={setActiveTab} />
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}
export default SignUp;