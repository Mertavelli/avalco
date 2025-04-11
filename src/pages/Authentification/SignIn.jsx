import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Login from "../../components/Auth/Login";

const SignIn = () => {
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
                                    <h1 className="font-bold text-4xl">Einloggen bei Avalco</h1>
                                    <h2 className="font-semibold text-xl">Wilkommen zurück!</h2>
                                </div>

                                <br></br>

                                <div className="text-sm">
                                    <p>Wenn du noch keinen Account hast</p>
                                    <div className="flex space-x-1">
                                        <p>kannst du dich</p>
                                        <a href="/sign-up" className="text-primary font-medium">hier registrieren!</a>
                                    </div>
                                </div>

                                <img src="./images/other/auth_content.png" className="max-w-[525px]" />
                            </div>

                            <div className="w-[500px]">
                                <h2 className="font-semibold text-xl">Einloggen</h2>
                                <Login />
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
                                <h1 className="font-bold text-2xl">Einloggen bei Avalco</h1>
                                <h2 className="font-semibold text-xl">Wilkommen zurück!</h2>
                            </div>

                            <br></br>

                            <div className="text-sm">
                                <p>Wenn du noch keinen Account hast</p>
                                <div className="flex space-x-1">
                                    <p>kannst du dich</p>
                                    <a href="/sign-up" className="text-primary font-medium">hier registrieren!</a>
                                </div>
                            </div>

                            <Login />
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}
export default SignIn;