import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import "animate.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-md fixed top-0 z-50">
            {/* Container */}
            <div className="w-11/12 mx-auto py-3 flex items-center justify-between
                      md:grid md:grid-cols-3 md:items-center
                      animate__animated animate__fadeInDown">

                {/* Left: Logo + Title */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <span className="text-2xl font-bold text-gray-800">Pet Care</span>
                </div>

                {/* Center: Nav Links (Larger screens) */}
                <div className="hidden md:flex justify-center space-x-8">
                    <NavLink
                        to="/"
                        className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                    >
                        My Profile
                    </NavLink>
                </div>

                {/* Right: User + Buttons (Larger Screens) */}
                <div className="hidden md:flex justify-end items-center space-x-3">
                    <img src={user} alt="User" className="h-8 w-8 rounded-full mr-5" />
                    <NavLink
                        to="/login"
                        className="px-6 py-2 bg-[#289a0f] text-white font-medium rounded-lg cursor-pointer hover:bg-[#065a3e] transition-colors duration-300 text-center"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="px-4 py-2 bg-[#1499a8] text-white font-medium rounded-lg cursor-pointer hover:bg-[#0f7f87] transition-colors duration-300 text-center"
                    >
                        Sign Up
                    </NavLink>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white shadow-md">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <NavLink
                            to="/"
                            className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/services"
                            className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className="text-gray-700 font-medium hover:text-[#289a0f] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            My Profile
                        </NavLink>
                        <div className="flex flex-col space-y-2 mt-2 w-full px-6">
                            <NavLink
                                to="/login"
                                className="w-full text-center px-4 py-2 bg-[#289a0f] text-white font-medium rounded cursor-pointer hover:bg-[#065a3e] transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="w-full text-center px-4 py-2 bg-[#1499a8] text-white font-medium rounded cursor-pointer hover:bg-[#0f7f87] transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
