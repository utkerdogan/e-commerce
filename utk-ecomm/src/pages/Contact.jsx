import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Contact() {
    return (
            <div className="text-center px-4 h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Get answers to all your questions.
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    Problems trying to resolve the conflict between the two major realms of Classical physics:
                </p>
                <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition">
                    CONTACT OUR COMPANY
                </button>
                <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-700">
                    <a href="#"><Twitter /></a>
                    <a href="#"><Facebook /></a>
                    <a href="#"><Instagram /></a>
                    <a href="#"><Linkedin /></a>
                </div>
            </div>
    );
}