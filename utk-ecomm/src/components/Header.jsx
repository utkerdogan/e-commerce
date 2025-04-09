import React, { useState } from "react";
import { Facebook, Heart, Instagram, Menu, Search, ShoppingCart, Twitter, User, X, Youtube } from "lucide-react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full">
            <div className="hidden md:flex justify-between items-center text-sm bg-slate-900 text-white px-8 py-2">
                <div>
                    <span>(543) 207-9657</span>
                    <span> utukerdogan@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Follow Us and get a chance to win 80% off</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Follow Us :</span>
                <Instagram />
                <Youtube />
                <Facebook />
                <Twitter />
                </div>
            </div>

            <header className="bg-white text-black flex items-center justify-between p-4 border-b md:px-8 md:py-6">
                <div className="font-bold text-xl md:text-2xl">Bandage</div>

                <nav className="hidden md:flex gap-6 text-gray-700 bg-white">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                    <a href="#">Pages</a>
                </nav>

                <div className="flex items-center gap-4 md:text-blue-600">
                    
                    <a href="#" className="hidden md:flex"><User className=" hidden md:block text-xs"/>Login</a>
                    <a href="#" className="hidden md:flex">/ Register</a>
                    <Search />
                    <ShoppingCart />
                    <Heart />

                    <button className="bg-white md:hidden" onClick={toggleMenu}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <nav className="flex flex-col md:hidden items-center py-2 gap-2 bg-white">
                    <a href="#" className="text-gray-600">Home</a>
                    <a href="#" className="text-gray-600">Product</a>
                    <a href="#" className="text-gray-600">Pricing</a>
                    <a href="#" className="text-gray-600">Contact</a>
                </nav>
            )}
        </div>
    );
}