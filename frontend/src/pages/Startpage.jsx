import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Startpage/Navbar";
import Footer from "../components/Footer";
import Cookies from "../components/Startpage/Cookies";
import DropdownMobile from "../components/utilities/DropdownMobile";

const LG_BREAKPOINT = 1024; // Tailwind lg breakpoint
const COOKIE_CONSENT_KEY = "cookieConsent";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const Startpage = () => {
    // SSR-safe initial values
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    // rAF throttling
    const ticking = useRef(false);

    // On mount, initialize windowWidth and cookie banner state
    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
            setShowCookieBanner(!hasConsent);
        }
    }, []);

    // Resize listener (passive)
    useEffect(() => {
        if (typeof window === "undefined") return;

        const onResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", onResize, { passive: true });
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Scroll listener with rAF throttling (passive)
    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => {
            if (!ticking.current) {
                ticking.current = true;
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY || window.pageYOffset || 0);
                    ticking.current = false;
                });
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Parallax/opacity values (clamped for stability)
    const size = clamp(20 + scrollY * 0.005, 15, 55); // %
    const opacity = clamp(1 - scrollY * 0.0015, 0, 1);
    const translate = clamp(scrollY * 0.25, 0, 400); // px

    const leftImageStyle = {
        width: `${size}%`,
        height: `${size}%`,
        opacity,
        transform: `translateX(-${translate}px)`,
        transition: "transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease",
    };

    const rightImageStyle = {
        width: `${size}%`,
        height: `${size}%`,
        opacity,
        transform: `translateX(${translate}px)`,
        transition: "transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease",
    };

    const closeCookieBanner = () => {
        setShowCookieBanner(false);
        try {
            localStorage.setItem(COOKIE_CONSENT_KEY, "true");
        } catch { }
    };

    const toggleNavbar = () => setIsNavOpen((v) => !v);

    const isDesktop = windowWidth >= LG_BREAKPOINT;

    return (
        <div className="min-h-screen bg-[#F7F8FA] text-gray-900">
            <header className="sticky top-0 z-40">
                <Navbar isOpen={isNavOpen} toggleNavbar={toggleNavbar} />
            </header>

            {/* Desktop */}
            {isDesktop && (
                <div>
                    <main className="relative">
                        {showCookieBanner && <Cookies onClose={closeCookieBanner} />}

                        {/* Hero with parallax side images */}
                        <section
                            className="w-full overflow-hidden"
                            aria-label="Avalco hero section"
                        >
                            <div className="flex justify-between items-start">
                                <img
                                    src="/images/other/parallax-left.png"
                                    alt="Decorative abstract shape left"
                                    className="w-1/5 h-1/5 select-none pointer-events-none"
                                    style={leftImageStyle}
                                    loading="lazy"
                                />

                                <div className="flex flex-col items-center mt-20 px-4 text-center">
                                    <h1 className="font-bold text-8xl leading-none">Make it easy</h1>
                                    <h1 className="font-bold text-8xl leading-none">with Avalco</h1>

                                    <p className="font-medium text-lg mt-10">
                                        Online. Offline. Installments. Instant. Your choice.
                                    </p>
                                    <p className="font-medium text-lg">Open your account in minutes.</p>

                                    <a
                                        href="/" // /sign-up
                                        className="bg-dark rounded-lg py-2 px-4 mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark"
                                        aria-label="Open a free account"
                                    >
                                        <span className="text-white font-semibold">Open a free account</span>
                                    </a>
                                </div>

                                <img
                                    src="/images/other/parallax-right.png"
                                    alt="Decorative abstract shape right"
                                    className="w-1/5 h-1/5 select-none pointer-events-none"
                                    style={rightImageStyle}
                                    loading="lazy"
                                />
                            </div>
                        </section>

                        {/* Value prop + stats */}
                        <section className="flex justify-center items-center py-24">
                            <div className="grid grid-cols-2 gap-5 max-w-[1000px] w-full px-4">
                                <div className="flex flex-col items-center gap-5 col-span-2">
                                    <p className="text-center text-gray-600 font-semibold text-xl">
                                        People first
                                    </p>
                                    <h2 className="text-center font-semibold text-6xl leading-tight">
                                        More personal. Send money.
                                    </h2>
                                    <h2 className="text-center font-semibold text-6xl leading-tight">
                                        Family and friends.
                                    </h2>
                                    <p className="text-center text-xl font-medium">
                                        Never struggle sending money again.
                                    </p>
                                </div>

                                <div className="bg-primary flex rounded-2xl pl-10 pb-10 items-center overflow-hidden space-x-5 col-span-2 mt-10">
                                    <div className="py-10">
                                        <h3 className="text-white font-semibold text-4xl max-w-xl">
                                            Send money your way — comfortably and on your terms
                                        </h3>
                                        <p className="text-white text-xl font-medium mt-6 max-w-xl">
                                            Pay in installments, pay in 30 days, or send instantly.
                                        </p>

                                        <button
                                            type="button"
                                            className="mt-8 transition-all hover:bg-blue-700 rounded-full py-2 px-4 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                            aria-label="Learn about payment options"
                                        >
                                            <span className="flex items-center space-x-3">
                                                <span className="text-white text-xl font-medium">Payment options</span>
                                                <img src="/images/other/icons/arrow_right.svg" alt="" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>

                                    <img
                                        src="/images/other/iPhone_12_Pro.png"
                                        alt="Avalco app on iPhone"
                                        className="w-[900px] transition-all hover:scale-105 duration-500"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Stats */}
                                <StatCard
                                    bgClass="bg-[#FCEBDB]"
                                    icon="/images/other/icons/persons.svg"
                                    value="1,220"
                                    label="Registrations"
                                />
                                <StatCard
                                    bgClass="bg-[#F1E1F7]"
                                    icon="/images/other/icons/transactions.svg"
                                    value="16,000"
                                    label="Transactions"
                                />
                                <StatCard
                                    bgClass="bg-[#D6EAF8]"
                                    icon="/images/other/icons/revenue.svg"
                                    value="€50,000"
                                    label="Revenue"
                                />
                            </div>
                        </section>
                    </main>
                    <div className="mt-10">
                        <Footer />
                    </div>

                </div>
            )}

            {/* Mobile (and initial SSR render before width is known) */}
            {!isDesktop && !isNavOpen && (
                <main className="relative">

                    <section className="flex flex-col items-center mt-10 px-10 text-center">
                        <h1 className="font-bold text-4xl">Make it easy with Avalco</h1>
                        <p className="font-medium mt-4 text-sm">Online. Offline. Installments. Instant. Your choice.</p>

                        <a
                            href="/sign-up"
                            className="bg-dark rounded-lg py-2 px-3 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark"
                            aria-label="Open a free account"
                        >
                            <span className="text-white font-medium">Open a free account</span>
                        </a>

                        <div className="flex flex-col items-center gap-5 mt-16">
                            <p className="text-gray-600 font-semibold">People first</p>
                            <div>
                                <h2 className="font-semibold text-3xl">More personal. Send money.</h2>
                                <h2 className="font-semibold text-3xl">Family and friends.</h2>
                            </div>
                            <p className="font-medium">Never struggle sending money again.</p>
                        </div>

                        <div className="bg-primary rounded-2xl overflow-hidden w-full mt-8">
                            <div className="flex flex-col gap-5 px-6 py-8">
                                <h3 className="text-white font-semibold text-2xl">
                                    Send money your way — comfortably and on your terms
                                </h3>
                                <p className="text-white">
                                    Pay in installments, pay in 30 days, or send instantly.
                                </p>
                                <button
                                    type="button"
                                    className="transition-all hover:bg-blue-700 rounded-full py-1 px-3 duration-300 self-start focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                                    aria-label="Learn about payment options"
                                >
                                    <span className="flex space-x-3 items-center">
                                        <span className="text-white font-medium">Payment options</span>
                                        <img src="/images/other/icons/arrow_right.svg" className="h-3" alt="" aria-hidden="true" />
                                    </span>
                                </button>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="/images/other/iPhone_12_Pro.png"
                                    alt="Avalco app on iPhone"
                                    className="w-[400px] transition-all hover:scale-105 duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 gap-3 w-full mt-6">
                            <StatCard
                                bgClass="bg-[#FCEBDB]"
                                icon="/images/other/icons/persons.svg"
                                value="1,220"
                                label="Registrations"
                            />
                            <StatCard
                                bgClass="bg-[#F1E1F7]"
                                icon="/images/other/icons/transactions.svg"
                                value="16,000"
                                label="Transactions"
                            />
                            <StatCard
                                bgClass="bg-[#D6EAF8]"
                                icon="/images/other/icons/revenue.svg"
                                value="€50,000"
                                label="Revenue"
                            />
                        </div>
                    </section>

                    <div className="sticky bottom-0">
                        {showCookieBanner && <Cookies onClose={closeCookieBanner} />}
                    </div>
                    <div className="mt-10">
                        <Footer />
                    </div>

                </main>
            )}

            {/* Mobile nav open */}
            {!isDesktop && isNavOpen && <DropdownMobile />}
        </div>
    );
};

const StatCard = ({ bgClass, icon, value, label }) => (
    <div className="bg-white py-5 flex items-center rounded-2xl pl-5 space-x-5 w-full shadow-sm">
        <div className={`${bgClass} p-3 rounded-full w-16 h-16 flex justify-center items-center`}>
            <img src={icon} alt="" aria-hidden="true" loading="lazy" />
        </div>
        <div>
            <h3 className="font-medium text-2xl">{value}</h3>
            <p className="text-gray-600 font-medium text-lg">{label}</p>
        </div>
    </div>
);

export default Startpage;
