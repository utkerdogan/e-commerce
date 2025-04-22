import React, { useEffect, useState } from "react";
import { categories, products } from "../data";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { Icons } from "../components/Icons";

export function Shop() {
    const shopProducts = new Array(15).fill(products[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const updateProductsPerPage = () => {
        const width = window.innerWidth;
        if (width < 768) {
            setProductsPerPage(4);
        } else {
            setProductsPerPage(12);
        }
    };

    useEffect(() => {
        updateProductsPerPage();
        window.addEventListener("resize", updateProductsPerPage);
    }, []);

    const lastPostIndex = currentPage * productsPerPage;
    const firstPostIndex = lastPostIndex - productsPerPage;
    const currentProducts = shopProducts.slice(firstPostIndex, lastPostIndex);

    return (
        <div>
            <section>
                <div className="h-auto w-screen bg-gray-100 flex flex-col md:w-auto pb-6">
                    <div className="flex flex-col items-center gap-4 md:justify-between md:flex-row px-10">
                        <h2 className="text-2xl font-bold pb-4 text-black">Shop</h2>
                        <div className="text-sm text-gray-500 mb-4 flex items-center">
                            <Link to="/" className="hover:underline text-black">Home</Link>
                            <ChevronRight />
                            <span className="text-gray-500 font-medium">Shop</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mx-auto w-2/3 md:flex-row md:justify-evenly">
                        {categories.map((category) => (
                            <div key={category.id} className="relative">
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

            <section className="px-4 py-12 w-auto bg-white items-center">
                <div className="text-center mb-10">
                    <h4 className="text-sm text-gray-500 uppercase">All Products</h4>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop Now</h2>
                    <p className="text-gray-400 text-sm">Explore our full product catalog</p>
                </div>
                <ProductList shopProducts={currentProducts} />
                <Pagination
                    totalProducts={shopProducts.length}
                    productsPerPage={productsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            </section>

            <section>
                <Icons />
            </section>
        </div>
    );
}
