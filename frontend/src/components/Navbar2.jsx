import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropdownIntern from "./DropdownIntern";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/auth/authSlice";

const Navbar2 = ({ isOpen, toggleNavbar }) => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();
    const dispatch = useDispatch();

    // logout
    const logout = () => {
      dispatch(userLoggedOut());
    };
  

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
            {windowWidth >= 1024 && (
                <div className="bg-white min-h-screen h-full w-[225px]">

                    <div className="pl-8 pt-16">
                        <img src="/images/logos/avalco_lettering_black.svg" className="max-h-6" />
                    </div>


                    <br></br>
                    <br></br>

                    <div className="grid grid-cols-1 gap-8">

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/dashboard") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/dashboard")
                            }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.93449 3.06551C8.15622 2.28723 7.10065 1.85 6 1.85C4.89935 1.85 3.84378 2.28723 3.06551 3.06551C2.28723 3.84378 1.85 4.89935 1.85 6C1.85 7.10065 2.28723 8.15622 3.06551 8.93449C3.84378 9.71277 4.89935 10.15 6 10.15H7.85V13.85H6C4.89935 13.85 3.84378 14.2872 3.06551 15.0655C2.28723 15.8438 1.85 16.8994 1.85 18C1.85 19.1006 2.28723 20.1562 3.06551 20.9345C3.84378 21.7128 4.89935 22.15 6 22.15C7.10065 22.15 8.15622 21.7128 8.93449 20.9345C9.71277 20.1562 10.15 19.1006 10.15 18V16.15H13.85V18C13.85 19.1006 14.2872 20.1562 15.0655 20.9345C15.8438 21.7128 16.8994 22.15 18 22.15C19.1006 22.15 20.1562 21.7128 20.9345 20.9345C21.7128 20.1562 22.15 19.1006 22.15 18C22.15 16.8994 21.7128 15.8438 20.9345 15.0655C20.1562 14.2872 19.1006 13.85 18 13.85H16.15V10.15H18C19.1006 10.15 20.1562 9.71277 20.9345 8.93449C21.7128 8.15622 22.15 7.10065 22.15 6C22.15 4.89935 21.7128 3.84378 20.9345 3.06551C20.1562 2.28723 19.1006 1.85 18 1.85C16.8994 1.85 15.8438 2.28723 15.0655 3.06551C14.2872 3.84378 13.85 4.89935 13.85 6V7.85H10.15V6C10.15 4.89935 9.71277 3.84378 8.93449 3.06551ZM16.6919 19.3081C16.3449 18.9612 16.15 18.4907 16.15 18V16.15H18C18.4907 16.15 18.9612 16.3449 19.3081 16.6919C19.6551 17.0388 19.85 17.5093 19.85 18C19.85 18.4907 19.6551 18.9612 19.3081 19.3081C18.9612 19.6551 18.4907 19.85 18 19.85C17.5093 19.85 17.0388 19.6551 16.6919 19.3081ZM10.15 13.85V10.15H13.85V13.85H10.15ZM4.69185 16.6919C5.03879 16.3449 5.50935 16.15 6 16.15H7.85V18C7.85 18.4907 7.65509 18.9612 7.30815 19.3081C6.96121 19.6551 6.49065 19.85 6 19.85C5.50935 19.85 5.03879 19.6551 4.69185 19.3081C4.34491 18.9612 4.15 18.4907 4.15 18C4.15 17.5093 4.34491 17.0388 4.69185 16.6919ZM7.30815 4.69185C7.65509 5.03879 7.85 5.50935 7.85 6V7.85H6C5.50935 7.85 5.03879 7.65509 4.69185 7.30815C4.34491 6.96121 4.15 6.49065 4.15 6C4.15 5.50935 4.34491 5.03879 4.69185 4.69185C5.03879 4.34491 5.50935 4.15 6 4.15C6.49065 4.15 6.96121 4.34491 7.30815 4.69185ZM19.3081 7.30815C18.9612 7.65509 18.4907 7.85 18 7.85H16.15V6C16.15 5.50935 16.3449 5.03879 16.6919 4.69185C17.0388 4.34491 17.5093 4.15 18 4.15C18.4907 4.15 18.9612 4.34491 19.3081 4.69185C19.6551 5.03879 19.85 5.50935 19.85 6C19.85 6.49065 19.6551 6.96121 19.3081 7.30815Z" fill={`${location.pathname.startsWith("/dashboard") ? "#1167FF" : "#757575"}`} stroke={`${location.pathname.startsWith("/dashboard") ? "#1167FF" : "#757575"}`} strokeWidth="0.3" />
                            </svg>

                            <p>Dashboard</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/transfer") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/transfer")
                            }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 6.44772 2.44772 6 3 6H20.5C21.0523 6 21.5 6.44772 21.5 7C21.5 7.55228 21.0523 8 20.5 8H3C2.44772 8 2 7.55228 2 7Z" fill={`${location.pathname.startsWith("/transfer") ? "#1167FF" : "#757575"}`} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071C15.9024 11.3166 15.9024 10.6834 16.2929 10.2929L19.5858 7L16.2929 3.70711C15.9024 3.31658 15.9024 2.68342 16.2929 2.29289Z" fill={`${location.pathname.startsWith("/transfer") ? "#1167FF" : "#757575"}`} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 17C2.5 16.4477 2.94772 16 3.5 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3.5C2.94772 18 2.5 17.5523 2.5 17Z" fill={`${location.pathname.startsWith("/transfer") ? "#1167FF" : "#757575"}`} />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071L4.41421 17L7.70711 20.2929C8.09763 20.6834 8.09763 21.3166 7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929Z" fill={`${location.pathname.startsWith("/transfer") ? "#1167FF" : "#757575"}`} />
                            </svg>

                            <p>Geld senden</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/wallet") || location.pathname.startsWith("/payment") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/wallet")
                            }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 10.8333V16.1667C22 19.3667 20 21.5 17 21.5H7C4 21.5 2 19.3667 2 16.1667V10.8333C2 7.932 3.64 5.90533 6.19 5.564C6.45 5.52133 6.72 5.5 7 5.5H17C17.26 5.5 17.51 5.51065 17.75 5.55332C20.33 5.87332 22 7.91067 22 10.8333Z" stroke={`${location.pathname.startsWith("/wallet") || location.pathname.startsWith("/payment") ? "#1167FF" : "#757575"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 16L7 11" stroke={`${location.pathname.startsWith("/wallet") || location.pathname.startsWith("/payment") ? "#1167FF" : "#757575"}`} strokeWidth="2" strokeLinecap="round" />
                                <path d="M3.35658 6.98037C3.15964 5.20289 4.35617 3.61171 6.02908 3.42636L15.8736 2.33566C17.5465 2.15031 19.0623 3.44098 19.2593 5.21846L19.3484 6.02306" stroke={`${location.pathname.startsWith("/wallet") || location.pathname.startsWith("/payment") ? "#1167FF" : "#757575"}`} strokeWidth="2" />
                                <path d="M18 11.5H21.1429C21.6162 11.5 22 11.8838 22 12.3571V14.6429C22 15.1162 21.6162 15.5 21.1429 15.5H18C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5Z" stroke={`${location.pathname.startsWith("/wallet") || location.pathname.startsWith("/payment") ? "#1167FF" : "#757575"}`} strokeWidth="2" strokeLinecap="round" />
                            </svg>

                            <p>Wallet</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/activities") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/activities")
                            }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Calendar / Calendar_Days">
                                    <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke={`${location.pathname.startsWith("/activities") ? "#1167FF" : "#757575"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>

                            <p>Aktivitäten</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/help") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/help")
                            }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 16H11V14H9V16ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C8.93913 4 7.92172 4.42143 7.17157 5.17157C6.42143 5.92172 6 6.93913 6 8H8C8 7.46957 8.21071 6.96086 8.58579 6.58579C8.96086 6.21071 9.46957 6 10 6C10.5304 6 11.0391 6.21071 11.4142 6.58579C11.7893 6.96086 12 7.46957 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 6.93913 13.5786 5.92172 12.8284 5.17157C12.0783 4.42143 11.0609 4 10 4Z" fill={`${location.pathname.startsWith("/help") ? "#1167FF" : "#757575"}`} />
                            </svg>

                            <p>Hilfe</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2 ${location.pathname.startsWith("/settings") ? "border-primary border-r-4 text-primary font-medium" : ""}`}
                            onClick={() => {
                                navigate("/settings")
                            }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93915 14 7.92173 13.5786 7.17159 12.8284C6.42144 12.0783 6.00001 11.0609 6.00001 10C6.00001 8.93913 6.42144 7.92172 7.17159 7.17157C7.92173 6.42143 8.93915 6 10 6ZM10 8C9.46958 8 8.96087 8.21071 8.5858 8.58579C8.21073 8.96086 8.00001 9.46957 8.00001 10C8.00001 10.5304 8.21073 11.0391 8.5858 11.4142C8.96087 11.7893 9.46958 12 10 12C10.5304 12 11.0392 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0392 8.21071 10.5304 8 10 8ZM8.00001 20C7.75001 20 7.54001 19.82 7.50001 19.58L7.13001 16.93C6.50001 16.68 5.96001 16.34 5.44001 15.94L2.95001 16.95C2.73001 17.03 2.46001 16.95 2.34001 16.73L0.340015 13.27C0.27881 13.167 0.257233 13.0452 0.279319 12.9274C0.301405 12.8096 0.365641 12.7039 0.460015 12.63L2.57001 10.97L2.50001 10L2.57001 9L0.460015 7.37C0.365641 7.29613 0.301405 7.19042 0.279319 7.07263C0.257233 6.95484 0.27881 6.83304 0.340015 6.73L2.34001 3.27C2.46001 3.05 2.73001 2.96 2.95001 3.05L5.44001 4.05C5.96001 3.66 6.50001 3.32 7.13001 3.07L7.50001 0.42C7.54001 0.18 7.75001 0 8.00001 0H12C12.25 0 12.46 0.18 12.5 0.42L12.87 3.07C13.5 3.32 14.04 3.66 14.56 4.05L17.05 3.05C17.27 2.96 17.54 3.05 17.66 3.27L19.66 6.73C19.79 6.95 19.73 7.22 19.54 7.37L17.43 9L17.5 10L17.43 11L19.54 12.63C19.73 12.78 19.79 13.05 19.66 13.27L17.66 16.73C17.54 16.95 17.27 17.04 17.05 16.95L14.56 15.95C14.04 16.34 13.5 16.68 12.87 16.93L12.5 19.58C12.46 19.82 12.25 20 12 20H8.00001ZM9.25001 2L8.88001 4.61C7.68001 4.86 6.62001 5.5 5.85001 6.39L3.44001 5.35L2.69001 6.65L4.80001 8.2C4.40001 9.36667 4.40001 10.6333 4.80001 11.8L2.68001 13.36L3.43001 14.66L5.86001 13.62C6.63001 14.5 7.68001 15.14 8.87001 15.38L9.24001 18H10.76L11.13 15.39C12.32 15.14 13.37 14.5 14.14 13.62L16.57 14.66L17.32 13.36L15.2 11.81C15.6 10.64 15.6 9.37 15.2 8.2L17.31 6.65L16.56 5.35L14.15 6.39C13.3642 5.48032 12.2983 4.85767 11.12 4.62L10.75 2H9.25001Z" fill={`${location.pathname.startsWith("/settings") ? "#1167FF" : "#757575"}`} />
                            </svg>

                            <p>Einstellungen</p>
                        </button>

                        <button
                            className={`flex items-center space-x-4 pl-8 py-2`}
                            onClick={logout}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#757575" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                            <p>Logout</p>
                        </button>
                    </div>


                </div>
            )}

            {windowWidth < 1024 && (
                <div>
                    <div className="bg-light border-b flex items-center justify-between p-4">
                        <button
                            onClick={toggleNavbar}
                            className={`rounded-md p-1.5 transition-all duration-300 ease-in-out ${isOpen ? "bg-black text-white hover:bg-dark" : "bg-white"}`}>
                            {!isOpen && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}

                            {isOpen && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-Width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>

                        <img src="/images/logos/logo_solo.svg" className="h-12" />

                        <button className="bg-white rounded-lg p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>

                    </div>

                    {isOpen && (
                        <DropdownIntern />
                    )}
                </div>
            )}
        </div>

    );
}
export default Navbar2;