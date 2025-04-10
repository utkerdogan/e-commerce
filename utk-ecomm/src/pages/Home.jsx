import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { images, products } from "../data";
import { MainCarousel } from "../components/MainCarousel";
import { SecCarousel } from "../components/SecCarousel";


export function Home() {


    return (
        <>
        <MainCarousel />
        
        {/*EDITOR'S PICK SECTION*/} 
        <section className="px-4 py-6 bg-gray-200">
            <div className="text-center mb-8">
                
                <p className="hidden md:flex justify-center mb-4 text-gray-500">Featured Products</p>
                <h2 className="text-lg font-bold text-black">EDITOR'S PICK</h2>
                <p className="text-sm text-gray-500">Problems trying to resolve the conflict between</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">

                <div className="relative group col-span-1 md:col-span-2 h-[500px] md:h-auto">
                <img src="https://picsum.photos/400/300?random=4" alt="Men" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-1 font-bold text-black">MEN</div>
                </div>

                <div className="relative group col-span-1 md:col-span-1 h-[500px] md:h-auto">
                <img src="https://picsum.photos/400/300?random=5" alt="Women" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-1 font-bold text-black">WOMEN</div>
                </div>

                <div className="flex flex-col justify-center relative gap-2 group col-span-1">
                <img src="https://picsum.photos/400/300?random=6" alt="Accessories" className="w-full h-full object-cover" />
                <div className="absolute left-4 bg-white px-4 py-1 mb-14 font-bold text-black">ACCESSORIES</div>
                <div>
                <img src="https://picsum.photos/400/300?random=7" alt="Kids" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-1 font-bold text-black">KIDS</div>
                </div>
                </div>
            </div>
        </section>
        {/*BEST SELLER SECTION*/} 
        <section className="px-4 py-12 w-auto bg-white items-center">
            <div className="text-center mb-10">
                <h4 className="text-sm text-gray-500 uppercase">Featured Products</h4>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">BESTSELLER PRODUCTS</h2>
                <p className="text-gray-400 text-sm">Problem trying to resolve the conflict between</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-auto max-w-6xl">
                {products.map((product, index) => (
                <div key={index} className="bg-gray-200 border rounded-xl p-4 flex flex-col items-center">
                    <div><img src="https://picsum.photos/400/300?random=9"/></div>
                    <h3 className="text-black font-semibold text-xl mt-4">{product.title}</h3>
                    <p className="text-gray-400 text-sm">{product.subtitle}</p>
                    <div className="mt-2 text-sm">
                    <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
                    <span className="text-green-500 font-semibold">{product.salePrice}</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                    {product.colors.map((color, i) => (
                        <span key={i} className={`w-3 h-3 rounded-full ${color}`}></span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
        
        <section className="flex justify-center items-center relative w-full h-screen">
        <SecCarousel />
        </section>

        </>
    );
}