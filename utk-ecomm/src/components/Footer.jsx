import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export function Footer() {

    return (
        <footer className="bg-gray-50 text-sm text-gray-700 px-6 pt-10 md:px-12 footer">

        <div className="flex flex-col md:flex-row md:justify-between mb-10 gap-4">
            <h2 className="text-xl font-bold">Bandage</h2>
            <div className="flex gap-4 text-blue-500 text-xl">
            <Facebook />
            <Instagram />
            <Twitter />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-10">

            <div>
            <h3 className="font-semibold mb-2">Company Info</h3>
            <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carrier</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="space-y-2">
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytic</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
            </ul>
            </div>

            <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
                <li><a href="#">IOS & Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
            </ul>
            </div>

            <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">Get In Touch</h3>
            <div className="flex sm:flex-row w-full mb-2">
                <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-2 border rounded-l-md text-sm"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md text-sm">
                Subscribe
                </button>
            </div>
            </div>
        </div>

        <div className="border-t pt-4 pb-8 text-center text-xs text-gray-400">
            Made With Love By UTKU All Right Reserved
        </div>
        </footer>
    );
}
