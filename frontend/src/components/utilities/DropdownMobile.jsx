import React, { useState } from "react";

/**
 * DropdownMobile.jsx
 * - Plain .jsx (no TS)
 * - English copy
 * - Removes <br/> in favor of Tailwind spacing
 * - Fixes SVG attributes (className, strokeWidth)
 * - Accessible: buttons with aria-pressed, focus styles
 */

const TABS = [
    { key: "Personal", label: "Personal" },
    { key: "Business", label: "Business" },
    { key: "Avalco", label: "Avalco" },
];

const ChevronDown = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-4 h-4"
        aria-hidden="true"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const ArrowRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
        aria-hidden="true"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
);

const TabButton = ({ active, onClick, children }) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={
            "py-1 px-3 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 " +
            (active ? "bg-white text-black ring-gray-900" : "hover:bg-white")
        }
    >
        {children}
    </button>
);

const LinkRow = ({ href = "/", children }) => (
    <a href={href} className="flex justify-between items-center py-1">
        <p>{children}</p>
        <ChevronDown />
    </a>
);

const DropdownMobile = () => {
    const [selected, setSelected] = useState("Personal");

    return (
        <div className="px-4">
            {/* Tabs */}
            <div className="flex justify-start gap-2">
                {TABS.map((t) => (
                    <TabButton key={t.key} active={selected === t.key} onClick={() => setSelected(t.key)}>
                        {t.label}
                    </TabButton>
                ))}
            </div>

            {/* Content */}
            <div className="px-4 mt-4">
                {selected === "Personal" && (
                    <section className="grid grid-cols-1 gap-4 text-start">
                        <a href="/" className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg hover:text-primary transition-colors">Explore Avalco</h3>
                            <ArrowRight />
                        </a>

                        <div className="flex flex-col gap-4 font-medium">
                            <LinkRow>Essentials</LinkRow>
                            <LinkRow>Payment options</LinkRow>
                            <LinkRow>International transfers</LinkRow>
                            <LinkRow>Help</LinkRow>
                            <LinkRow>FAQ</LinkRow>
                            <LinkRow>Community</LinkRow>
                            <LinkRow>Customer service</LinkRow>
                        </div>
                    </section>
                )}

                {selected === "Business" && (
                    <section className="grid grid-cols-1 gap-4 text-start">
                        <a href="/" className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg hover:text-primary transition-colors">Explore Avalco Business</h3>
                            <ArrowRight />
                        </a>

                        <div className="flex flex-col gap-4 font-medium">
                            <LinkRow>Essentials</LinkRow>
                            <LinkRow>We are currently working on Avalco Business</LinkRow>
                            <LinkRow>Help</LinkRow>
                            <LinkRow>FAQ</LinkRow>
                            <LinkRow>Community</LinkRow>
                            <LinkRow>Customer service</LinkRow>
                        </div>
                    </section>
                )}

                {selected === "Avalco" && (
                    <section className="grid grid-cols-1 gap-3 text-start">
                        <a href="/" className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg">Get to know Avalco</h3>
                            <ArrowRight />
                        </a>

                        <div className="flex flex-col gap-3 text-sm">
                            <a href="/" className="hover:bg-gray-200 hover:text-primary py-1 rounded-lg transition-colors">About us</a>
                            <a href="/" className="hover:bg-gray-200 hover:text-primary py-1 rounded-lg transition-colors">Careers</a>
                        </div>
                    </section>
                )}
            </div>

            {/* Auth actions */}
            <div className="flex items-center justify-center gap-3 mt-10">
                <a href="/sign-in" className="bg-white px-4 py-1.5 rounded-lg font-semibold">Sign in</a>
                <a href="/sign-up" className="bg-dark px-4 py-1.5 rounded-lg font-semibold text-white">Sign up</a>
            </div>
        </div>
    );
};

export default DropdownMobile;
