import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BestSeller } from "../components/BestSeller";
import { ChevronRight, Eye, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Icons } from "../components/Icons";

export function ProductDetail() {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState("description");

    const product = {
        title: "Floating Phone",
        reviews: 10,
        stars: 4,
        price: "$1,139.33",
        availability: "In Stock",
        description: `Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.`,
        colors: ["bg-cyan-500", "bg-orange-500", "bg-teal-500", "bg-blue-900"],
    };

    return (
        <>
            <section className="bg-gray-100 flex">
                <div className=" mx-auto px-10 md:w-2/3 py-12 text-gray-900">
                    <div className="flex flex-col items-center gap-4 md:justify-between md:flex-row">
                        <div className="text-sm text-gray-500 mb-4 flex items-center">
                            <Link to="/" className="hover:underline text-black">Home</Link>
                            <ChevronRight />
                            <span className="text-gray-500 font-medium">Shop</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">

                    <div className="w-full md:w-1/2">
                        <img
                            src={`https://picsum.photos/600/600?random=${id}`}
                            alt={product.title}
                            className="rounded-md w-full object-cover"
                        />
                        <div className="flex gap-2 mt-4">
                            {[1, 2].map((i) => (
                                <img
                                    key={i}
                                    src={`https://picsum.photos/100/100?random=${+id + i}`}
                                    alt={`thumb-${i}`}
                                    className="w-14 h-14 md:w-20 md:h-20 object-cover rounded cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <div className="flex items-center gap-1 text-yellow-400">
                            {Array.from({ length: product.stars }, (_, i) => (
                                <span key={i}>★</span>
                            ))}
                            {Array.from({ length: 5 - product.stars }, (_, i) => (
                                <span key={i}>☆</span>
                            ))}
                            <span className="ml-2 text-sm text-gray-600">{product.reviews} Reviews</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-900">{product.price}</p>
                        <p>
                            Availability:{" "}
                            <span className="text-green-600 font-semibold">{product.availability}</span>
                        </p>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <div className="flex gap-4 mt-3">
                            {product.colors.map((color, i) => (
                                <span key={i} className={`w-5 h-5 rounded-full ${color}`}></span>
                            ))}
                        </div>
                        <div className="flex mt-4 items-center gap-8">
                            <button className="bg-blue-500 text-white px-6 rounded hover:bg-blue-600 transition">
                                Select Options
                            </button>
                            <Heart />
                            <ShoppingCart /> 
                            <Eye />
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto md:w-4/5 pt-6 px-10">
                    <div className="flex justify-center gap-6 text-sm font-semibold text-gray-700">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`bg-white pb-2 border-none focus:outline-none ${
                                activeTab === "description" ? "underline" : "no-underline"
                            }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab("additional")}
                            className={`bg-white pb-2 border-none focus:outline-none ${
                                activeTab === "additional" ? "underline" : "no-underline"
                            }`}
                        >
                            Additional Information
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`bg-white pb-2 border-none focus:outline-none ${
                                activeTab === "reviews" ? "underline" : "no-underline"
                            }`}
                        >
                            Reviews (0)
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-gray-700">
                        {/* Left */}
                        <div className="flex-1">
                            <img src={`https://picsum.photos/300/400?random=${+id + 3}`} alt="info" className="rounded" />
                        </div>

                        {/* Middle */}
                        <div className="flex-1">
                            <h3 className="font-bold mb-2 text-sm">the quick fox jumps over</h3>
                            <p>{product.description}</p>
                            <p className="mt-4">{product.description}</p>
                        </div>

                        {/* Right */}
                        <div className="flex-1 w-full space-y-4">
                            <h3 className="font-bold text-2xl">the quick fox jumps over</h3>
                            <ul className="space-y-1 text-base">
                                <li>› the quick fox jumps over the lazy dog</li>
                                <li>› the quick fox jumps over the lazy dog</li>
                                <li>› the quick fox jumps over the lazy dog</li>
                            </ul>
                            <h3 className="font-bold text-2xl">the quick fox jumps over</h3>
                            <ul className="space-y-1 text-base">
                                <li>› the quick fox jumps over the lazy dog</li>
                                <li>› the quick fox jumps over the lazy dog</li>
                                <li>› the quick fox jumps over the lazy dog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 md:flex-row items-center">
                <div className="flex flex-col  items-center">
                    <h2 className="text-2xl font-bold text-gray-900 py-8 ">BESTSELLER PRODUCTS</h2>
                    <BestSeller />
                </div>
            </section>
            <section className="py-16 bg-gray-100">
                <Icons />
            </section>
        </>
    );
}
