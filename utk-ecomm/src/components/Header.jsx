import React, { useState } from "react";
import { ChevronDown, Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingCart, Twitter, User, X, Youtube } from "lucide-react";
import { useHistory, useLocation } from "react-router-dom";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const history = useHistory();
    const location = useLocation();
    const pathname = location.pathname;

    const noTopBarPages = ["/about-us", "/contact", "/team"];
    const noBecomeMemberPages = ["/", "/shop"];
    const noRegisterPages = ["/about-us", "/team", "/contact"];

    const hideTopBar = noTopBarPages.includes(pathname);
    const hideBecomeMember = noBecomeMemberPages.includes(pathname);
    const hideRegister = noRegisterPages.includes(pathname);

    return (
        <div className="w-full">
            {!hideTopBar && (
                <div className="hidden md:flex justify-between items-center text-sm bg-slate-900 text-white px-8 py-2">
                <div className="flex">
                    <span className="flex pr-6">
                    <Phone className="mr-2 w-4" />
                    (543) 207-9657
                    </span>
                    <span className="flex pl-6">
                    <Mail className="mr-2 w-4" />
                    utukerdogan@gmail.com
                    </span>
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
            )}

            <header className="bg-white text-black flex items-center justify-between p-4 border-b md:px-8 md:py-6">
                <div className="font-bold text-xl md:text-2xl cursor-pointer" onClick={() => history.push("/")}>Bandage</div>

                <nav className="hidden md:flex gap-6 bg-white text-gray-600 font-bold">
                    <span onClick={() => history.push("/")} className="cursor-pointer">Home</span>
                    <div className="group shop-dropdown flex">
                        <span className="flex cursor-pointer" onClick={() => history.push("/shop")}>
                            Shop <ChevronDown />
                        </span>
                        
                        <div className="absolute w-64 bg-white opacity-0 mt-8 group-hover:opacity-100 invisible group-hover:visible  duration-300 z-10">
                        <div className="grid grid-cols-2 p-4">
                            <div>
                            <h3 className="font-semibold mb-4">Kadın</h3>
                            <ul>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Cosmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                            </ul>
                            </div>
                            <div>
                            <h3 className="font-semibold mb-4">Erkek</h3>
                            <ul>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Belts</a></li>
                                <li><a href="#">Cosmetics</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Hats</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="cursor-pointer" onClick={() => history.push("/about-us")}>About</span>
                    <span href="#">Blog</span>
                    <span className="cursor-pointer" onClick={() => history.push("/contact")}>Contact</span>
                    <span className="cursor-pointer" onClick={() => history.push("/team")}>Pages</span>
                </nav>

                <div className="flex items-center gap-4 md:text-blue-600">
                    
                    <a href="#" className="hidden md:flex"><User className=" hidden md:block text-xs"/>Login</a>
                    {!hideRegister && ( 
                        <>
                            <a href="#" className="hidden md:flex">/ Register</a>
                            <Search />
                            <ShoppingCart />
                            <Heart />
                        </>
                    )}

                    {!hideBecomeMember && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hidden md:block">
                        Become a member
                        </button>
                    )}

                    <button className="bg-white md:hidden" onClick={toggleMenu}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <nav className="flex flex-col md:hidden items-center py-2 gap-2 bg-white">
                    <span onClick={() => history.push("/")} className="text-gray-600">Home</span>
                    <span onClick={() => history.push("/shop")} className="text-gray-600">Product</span>
                    <span className="text-gray-600">Pricing</span>
                    <span className="text-gray-600">Contact</span>
                </nav>
            )}
        </div>
    );
}