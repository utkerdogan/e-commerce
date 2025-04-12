import { ChartArea, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import React, { useState } from "react";
import { posts, products } from "../data";
import { MainCarousel } from "../components/MainCarousel";
import { SecCarousel } from "../components/SecCarousel";


export function Home() {


    return (
        <>
        <MainCarousel />
        
        {/*EDITOR'S PICK SECTION*/} 
        <section className="px-4 py-6 bg-gray-200">
            <div className="text-center mb-8">
                
                <p className="hidden justify-center mb-4 text-gray-500">Featured Products</p>
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
        
        <SecCarousel />
        {/*PART OF THE NEURAL UNIVERSE SECTION*/} 
        <section class="bg-white w-full flex flex-col-reverse md:flex-row items-center justify-evenly">
            <div class="w-full md:w-1/2 mt-4 md:h-full md:mt-0">
                <img src="https://picsum.photos/400/300?random=13" alt="Banner" class="w-full h-auto object-cover" />
            </div>

            <div class="flex justify-center items-center px-4 w-full md:w-2/5">
                <div class="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
                <p class="text-sm text-gray-500 uppercase">Summer 2020</p>
                <h2 class="text-3xl font-bold text-gray-900 mt-2 mb-4">Part of the Neural Universe</h2>
                <p class="text-gray-700 mb-6">We know how large objects will act, but things on a small scale.</p>
                <div class="flex flex-col md:flex-row gap-4 items-center ">
                    <button class="bg-blue-400 text-white rounded-md hover:bg-blue-700 md:bg-green-500">Buy Now</button>
                    <button class="bg-white border-blue-600 text-blue-600 rounded-md hover:bg-blue-200 md:border-green-500 md:text-green-500">Learn More</button>
                </div>
                </div>

            </div>
        </section>
        
        {/*FEATURED POSTS SECTION*/} 
        <section className="bg-white py-12 px-4 md:px-8">
            <div className="text-center mb-10">
                <p className="text-sm text-blue-500 font-bold mb-2">PRACTICE ADVICE</p>
                <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
                <p className="text-gray-600 mt-2">
                Problems trying to resolve the conflict between the two major realms of classical physics.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 mx-auto max-w-6xl">
                {posts.map((post) => (
                <div key={post.id} className="bg-white border rounded-lg shadow-sm overflow-hidden">
                    <div className="relative">
                    <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                    {post.isNew && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        NEW
                        </span>
                    )}
                    </div>
                    <div className="p-4">
                    <div className="text-xs text-gray-500 mb-2 space-x-2">
                        {post.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                        ))}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                    <div className="flex justify-between items-center text-gray-500 mb-4 space-x-2">
                        <div className="flex items-center">
                            <Clock color="#0055ff" className="w-4 h-4 mr-1"/>
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center ">
                        <ChartArea color="#008009" className="w-4 h-4 mr-1"/>
                        <span>{post.comments} comments</span>
                        </div>
                        
                    </div>
                    <a href="#" className="text-gray-500 font-semibold hover:underline flex">
                        Learn More 
                        <ChevronRight className="text-sm text-blue-600" />
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
        </>
    );
}