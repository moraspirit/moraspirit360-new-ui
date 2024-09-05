// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5 flex flex-col items-center relative bottom-0 w-full mt-20">

            <div className="flex justify-between w-full max-w-screen-xl mb-2.5 flex-row text-[#ADADAD]">
                <div className="text-left mb-2.5 font-light">
                    <h3 className="text-red-500 mb-2.5 text-xl font-bold">CONTACT</h3>
                    <p className="my-1 ">077 842 3916</p>
                    <p className="my-1">moraspirit360@moraspirit.com</p>
                    <p className="my-1 font">125, 56A Peterson Ln, Colombo, Sri Lanka</p>
                </div>
                <div className="flex gap-6 justify-center mt-5">
                    <a href="#" className="inline-block no-underline">
                        <img src="/fb.png" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="#" className="inline-block no-underline">
                        <img src="/ig.png" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="#" className="inline-block no-underline">
                        <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
                    </a>
                    <a href="#" className="inline-block no-underline">
                        <img src="/twitt.png" alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </div>
            <div className="text-center w-full pt-2.5 font-light text-[#ADADAD]">
                <p className="mb-5">
                    Copyright © 2024. Moraspirit Initiative. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
