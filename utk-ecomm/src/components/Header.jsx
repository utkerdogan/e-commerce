import React, {  useEffect, useState } from "react";
import { ChevronDown, Facebook, Heart, Instagram, Mail, Menu, Phone, Search, ShoppingCart, Twitter, User, X, Youtube } from "lucide-react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/actions/clientActions";
import Gravatar from 'react-gravatar';
import { fetchCategories } from "../store/actions/productActions";

export function Header() {

    const history = useHistory();

    const location = useLocation();
    const pathname = location.pathname;
    const dispatch = useDispatch();

    const noTopBarPages = ["/about-us", "/contact", "/team", "/signup", "/login"];
    const noBecomeMemberPages = ["/", "/shop"];
    const noRegisterPages = ["/about-us"];
    
    const hideTopBar = noTopBarPages.includes(pathname);
    const hideBecomeMember = noBecomeMemberPages.includes(pathname) || pathname.startsWith("/product/");
    const hideRegister = noRegisterPages.includes(pathname);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const user = useSelector((state) => state.client.user);

    const categories = useSelector(state => state.product.categories);

    const womenCategories = categories.filter(cat => cat.gender === 'k');
    const menCategories = categories.filter(cat => cat.gender === 'e');

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const getGenderPath = (gender) => {
        return gender === 'k' ? 'kadin' : 'erkek';
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem('token');
        history.push('/');
    };

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
                        <div className="absolute w-64 bg-white opacity-0 mt-8 group-hover:opacity-100 invisible group-hover:visible duration-300 z-10">
                            <div className="grid grid-cols-2 p-4">
                                <div>
                                    <h3 className="font-semibold mb-4">Kadın</h3>
                                    <ul>
                                        {womenCategories.map((cat) => (
                                            <li key={cat.id}>
                                            <Link
                                                to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                                                className="hover:text-pink-500 transition"
                                            >
                                                {cat.title}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4">Erkek</h3>
                                    <ul>
                                        {menCategories.map((cat) => (
                                            <li key={cat.id}>
                                                <Link
                                                    to={`/shop/${getGenderPath(cat.gender)}/${cat.title.toLowerCase()}/${cat.id}`}
                                                    className="hover:text-blue-500 transition"
                                                >
                                                    {cat.title}
                                                </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="cursor-pointer" onClick={() => history.push("/about-us")}>About</span>
                    <span className="cursor-pointer">Blog</span>
                    <span className="cursor-pointer" onClick={() => history.push("/contact")}>Contact</span>
                    <span className="cursor-pointer" onClick={() => history.push("/team")}>Pages</span>
                </nav>

                <div className="flex items-center gap-4 md:text-blue-600">
                    {!hideRegister && (
                        <>
                            {user && user.name ? (
                                <div className="flex items-center gap-2">
                                    {user?.email && <Gravatar email={user.email.trim()} size={30} className="rounded-full" />}
                                    <span>{user?.name || "User"}</span>
                                    <a onClick={handleLogout} className="text-red-500 cursor-pointer">Logout</a>
                                </div>
                                
                                
                            ) : (
                                <>
                                    <a onClick={() => history.push("/login")} className="hidden md:flex cursor-pointer"><User className=" hidden md:block text-xs"/>Login</a>
                                    <a onClick={() => history.push("/signup")} className="hidden md:flex cursor-pointer">/ Register</a>
                                </>
                            )}
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
