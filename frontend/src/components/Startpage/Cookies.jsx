import React, { useEffect, useRef } from "react";

const Cookies = ({ onClose, onAccept, onDecline, onManage }) => {
    const closeRef = useRef(null);

    // Focus the first actionable button when mounted (accessibility)
    useEffect(() => {
        closeRef.current?.focus();
    }, []);

    const handleAccept = () => {
        if (onAccept) onAccept();
        if (onClose) onClose();
    };

    const handleDecline = () => {
        if (onDecline) onDecline();
        if (onClose) onClose();
    };

    const handleManage = () => {
        if (onManage) onManage();
    };

    return (
        <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-description"
        >
            {/* Desktop / Large screens: bottom-right card */}
            <div className="hidden lg:flex items-end justify-end h-full w-full pointer-events-none">
                <div className="pointer-events-auto bg-white max-w-[380px] w-[90vw] m-10 p-4 rounded-2xl shadow-lg border">
                    <div className="flex justify-end">
                        <button
                            ref={closeRef}
                            onClick={onClose}
                            aria-label="Close cookie banner"
                            className="rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4">
                        <img
                            src="/images/other/cookies.svg"
                            alt="Cookie illustration"
                            className="w-16 h-16"
                            loading="lazy"
                        />
                        <h2 id="cookie-title" className="font-semibold text-lg">
                            Avalco uses cookies
                        </h2>
                        <p id="cookie-description" className="text-sm text-gray-700">
                            We use cookies to improve security, personalize your experience, and serve relevant content. By clicking
                            <span className="font-semibold"> Accept</span>, you agree to the use of cookies as outlined in our
                            <a href="/privacy" className="underline ml-1">Privacy Policy</a>.
                        </p>
                    </div>

                    <div className="flex justify-between mt-4 gap-3">
                        <button
                            onClick={handleAccept}
                            className="bg-primary rounded-lg px-3 py-2 shadow-lg text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            <span className="inline-flex items-center gap-2">
                                <img src="/images/other/icons/cookie.svg" alt="" aria-hidden="true" />
                                Accept cookies
                            </span>
                        </button>

                        <div className="flex gap-2">
                            <button
                                onClick={handleDecline}
                                className="rounded-lg px-3 py-2 shadow-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleManage}
                                className="rounded-lg px-3 py-2 text-sm font-medium underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Manage
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile / Small screens: bottom sheet */}
            <div className="flex lg:hidden items-end h-full w-full">
                <div className="w-full bg-light rounded-t-2xl py-6 px-4 shadow-[0_-6px_24px_rgba(0,0,0,0.08)] border-t">
                    <h3 id="cookie-title-mobile" className="font-semibold text-base">
                        Cookies enable a personalized experience
                    </h3>
                    <p id="cookie-description-mobile" className="text-xs text-gray-700 mt-2">
                        Not the crunchy kind. These help keep our site secure, improve your experience, and show relevant content. We
                        won’t enable optional cookies unless you agree. Want to learn more or adjust your preferences?
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                        <button
                            onClick={handleAccept}
                            className="bg-dark text-white rounded-lg py-2 px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        >
                            Allow all cookies
                        </button>
                        <button
                            onClick={handleDecline}
                            className="bg-white text-gray-900 rounded-lg py-2 px-4 font-medium text-sm border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            Decline all
                        </button>
                    </div>
                    <div className="mt-2 text-center">
                        <a href="/privacy" className="text-xs underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
