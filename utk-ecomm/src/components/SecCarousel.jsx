import { useState } from "react";
import { images } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SecCarousel() {

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

return (
    <div className="relative w-full h-screen overflow-hidden">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt="carousel"
                className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:pl-32 text-white bg-black bg-opacity-40">
                <div className="w-1/2 md:w-2/5 text-center items-center flex flex-col md:items-start md:text-start">
                    <p className="text-xl md:text-4xl mb-14">SUMMER 2020</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">VITE CLASSIC PRODUCT</h2>
                    <p className="text-sm md:text-base w-2/3 mb-6">
                        We know how large objects will act, We know how are objects will act, We know
                    </p>
                </div>
                <div className="flex flex-col md:gap-16 md:flex-row justify-center items-center">
                <span className="text-white font-semibold md:text-2xl mb-6 md:mb-0">$16.48</span>
                    <button className="flex items-center bg-green-500 text-white py-2 px-5 rounded-md text-sm md: ">
                        SHOP NOW
                    </button>
                </div>
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
)
}