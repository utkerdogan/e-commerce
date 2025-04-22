import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { BestSeller } from "../components/BestSeller";

export function Contact() {
    return (
        <>
        <section>
            <div className="flex flex-col md:flex-row items-center justify-evenly px-6 md:px-20 py-16 bg-white">
                <div className="w-full md:w-1/3 text-center md:text-left pb-8 px-10">
                    <h4 className="hidden md:flex text-sm text-black font-bold mb-2">
                        CONTACT US
                    </h4>
                    <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 py-4 md:py-8">
                        Get In Touch Today!
                    </h2>
                    <p className="text-gray-600 font-semibold mb-6 md:pr-32 px-8 md:px-0">
                        We know how large objects will act, but things on a small scale.
                    </p>
                    
                    <h2 className="text-slate-900 font-semibold mb-2 text-xl md:text-3xl">
                        Phone : +451 215 215
                    </h2>
                    <h2 className="text-slate-900 font-semibold mb-2 text-xl md:text-3xl">
                        Fax : +451 215 215
                    </h2>

                    <p className="flex text-slate-900 gap-12 py-4 px-2">
                        <Twitter />
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                    </p>

                </div>
        
                <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                    <img
                        src="https://picsum.photos/300/400"
                        className="md:w-full max-w-sm rounded-3xl"
                    />
                </div>
            </div>
        </section>

        <section>
            <div className="flex flex-col items-center pt-16 bg-white">
                <p className="text-sm uppercase text-gray-500">VISIT OUR OFFICE</p>
                <h2 className="text-3xl md:text-4xl font-bold text-center mt-2 mb-10 w-1/2 md:w-1/4 text-slate-900">
                    We help small businesses with big ideas
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
                    {/* Phone */}
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                    <div className="text-blue-500 mb-4">
                        <Phone size={42} />
                    </div>
                    <p className="text-sm text-gray-600">georgia.young@example.com</p>
                    <p className="text-sm text-gray-600 mb-4">georgia.young@ple.com</p>
                    <p className="font-medium mb-2">Get Support</p>
                    <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm hover:bg-blue-50">
                        Submit Request
                    </button>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center text-center p-6 bg-gray-900 text-white rounded-lg">
                    <div className="text-blue-500 mb-4">
                        <MapPin size={42} />
                    </div>
                    <p className="text-sm">georgia.young@example.com</p>
                    <p className="text-sm mb-4">georgia.young@ple.com</p>
                    <p className="font-medium mb-2">Get Support</p>
                    <button className="bg-white text-blue-400 border border-blue-400 rounded-full px-4 py-2 text-sm hover:bg-blue-800">
                        Submit Request
                    </button>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                    <div className="text-blue-500 mb-4">
                        <Mail size={42} />
                    </div>
                    <p className="text-sm text-gray-600">georgia.young@example.com</p>
                    <p className="text-sm text-gray-600 mb-4">georgia.young@ple.com</p>
                    <p className="font-medium mb-2">Get Support</p>
                    <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-4 py-2 text-sm hover:bg-blue-50">
                        Submit Request
                    </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}