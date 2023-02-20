import React from "react";
function Footer() {
    return (
        <>
            <div className="bg-linear-pink-invert pb-12 bg-gray-900 shadow-2xl text-white">
                <div className="mx-auto container pt-10 lg:pt-12 flex flex-col items-center justify-center">
                    <div>
                    <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                    </div>
                    <div className="text-white flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-white">Build. Review. Ship.</h1>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
                            <h2 className="cursor-pointer">License</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Home</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Shops</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Products</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Cart</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Zelly. All rights reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    
                </div>
            </div>
        </>
    );
}

export default Footer;
