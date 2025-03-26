import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black mt-10 sm:mt-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center">
                    <div className="flex-1 mb-4 text-sm text-slate-200 sm:mb-0 font-light text-center sm:text-left">
                        <p className="font-medium text-lg mb-1">Contact</p>
                        <p>077 842 3916</p>
                        <a href="mailto:moraspirit360@moraspirit.com" className="hover:underline">
                            moraspirit360@moraspirit.com
                        </a>
                        <p>125, 56A Peterson Ln, Colombo, Sri Lanka, Colombo, Sri Lanka</p>
                    </div>
                    <div className="flex-1 flex justify-center mb-4 align-middle">
                        <a href="#" className="text-slate-200">
                            <img src="/facebook.svg" alt="Facebook" className="w-10 h-10" />
                        </a>
                        <a href="#" className="text-slate-200">
                            <img src="/instagram.svg" alt="Instagram" className="w-10 h-10" />
                        </a>
                        <a href="#" className="text-slate-200">
                            <img src="/youtube.svg" alt="YouTube" className="w-10 h-10" />
                        </a>
                        <a href="#" className="text-slate-200">
                            <img src="/twitter.svg" alt="Twitter" className="w-10 h-10" />
                        </a>
                    </div>
                    <ul className="flex-1 flex flex-wrap justify-center sm:justify-end items-center mb-6 text-sm font-medium text-slate-200 sm:mb-0">
                        <li>
                            <a href="/" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="/request" className="hover:underline ms-4 md:ms-6">Request</a>
                        </li>
                        <li>
                            <a href="/events" className="hover:underline ms-4 md:ms-6">Events</a>
                        </li>
                        <li>
                            <a href="/articles" className="hover:underline ms-4 md:ms-6">Articles</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-slate-200 text-center">
          © 2025 <a href="#" className="hover:underline">Moraspirit Initiative</a>. All Rights Reserved.
        </span>
            </div>
        </footer>
    );
};

export default Footer;
