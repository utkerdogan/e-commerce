import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";


export function Home() {
    const images = [
        "https://picsum.photos/800/300?random=1",
        "https://picsum.photos/800/300?random=2",
        "https://picsum.photos/800/300?random=3"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
        <div className="relative w-full h-screen overflow-hidden">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel"
                className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
                <p className="text-xs md:text-sm mb-2">SUMMER 2020</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">NEW COLLECTION</h2>
                <p className="text-sm md:text-base max-w-md mb-6">
                    We know how large objects will act, but things on a small scale.
                </p>
                <button className="flex items-center bg-green-500 text-white py-2 px-5 rounded-md text-sm md: ">
                    SHOP NOW
                </button>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent  text-black focus:outline-none p-0"
                >
                <ChevronLeft size={64} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent text-black focus:outline-none p-0"
                >
                <ChevronRight size={64} />
            </button>

        </div>
        
        <div className="bg-gray-100 h-screen border-1 items-center justify-center flex">
            <div className="flex flex-col items-center justify-center gap-4 border-2 w-1/2">
            <img src="https://picsum.photos/200/300?random=4" className="w-1/2"></img>
            <img src="https://picsum.photos/200/300?random=5"></img>
            </div>
        </div>
        </>
    );
}