import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-white pt-20 pb-10">
            {/* 3-column section */}
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Column 1: Contact Info */}
                <div>
                    <h3 className="font-semibold mb-2">Contact Info</h3>
                    <p className="text-gray-400">petcare@gmail.com</p>
                    <p className="text-gray-400">+880192425772</p>
                </div>

                {/* Column 2: Social Links */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="#" className="hover:text-green-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="#" className="hover:text-pink-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-500 transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                {/* Column 3: Privacy Policy */}
                <div>
                    <h3 className="font-semibold mb-2">Privacy Policy</h3>
                    <p className="text-gray-400">Terms & Conditions</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
                © 2025 All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
