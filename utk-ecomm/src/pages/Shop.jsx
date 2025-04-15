import React from "react";
import { categories } from "../data";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";



export function Shop ()  {

    return (
        <section>
            <div className="h-screen w-screen bg-gray-100 flex flex-col md:w-auto">
                <div className="flex justify-between px-10">
                <h2 className="text-2xl font-bold pb-4 text-black">Shop</h2>
                <div className="text-sm text-gray-500 mb-4 flex items-center">
                    <Link to="/" className="hover:underline text-black">
                        Home
                    </Link>
                    <ChevronRight />
                    <span className="text-gray-500 font-medium">Shop</span>
                </div>
                </div>
                {/* Kategori Grid */}
                <div className="flex flex-col gap-4 mx-auto w-2/3 md:flex-row md:justify-evenly">
                    {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative"
                    >
                        <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-sm">{category.items} Items</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

