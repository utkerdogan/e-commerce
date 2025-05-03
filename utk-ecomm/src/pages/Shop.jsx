import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ProductList } from "../components/ProductList";
import { Pagination } from "../components/Pagination";
import { Icons } from "../components/Icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import { FilterBar } from "../components/FilterBar";
import { useLocation, useParams, useHistory } from "react-router-dom";

export function Shop() {
    const dispatch = useDispatch();
    const history = useHistory();
    const productList = useSelector(state => state.product.productList);
    const total = useSelector(state => state.product.total);
    const categories = useSelector(state => state.product.categories);

    const { categoryId } = useParams();

    const top5Categories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get("page") || "1", 10);
    const [productsPerPage, setProductsPerPage] = useState(12);

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
        return () => {
            window.removeEventListener("resize", updateProductsPerPage);
        };
    }, [dispatch]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const offset = (currentPage - 1) * productsPerPage;

        if (categoryId) {
            queryParams.set("category", categoryId);
        }

        queryParams.set("offset", offset);
        queryParams.set("limit", productsPerPage);
        dispatch(fetchProducts(queryParams.toString()));
    }, [location.search, currentPage, productsPerPage, categoryId, dispatch]);

    useEffect(() => {
        window.scrollTo({ top: FilterBar.current, behavior: "smooth" });
    }, [currentPage]);

    const getGenderPath = (gender) => {
        return gender === 'k' ? 'kadin' : 'erkek';
    };  
    const handleCategoryClick = (category) => {
        
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("category", category.id);
        searchParams.set("page", "1");
        const path = `/shop/${getGenderPath(category.gender)}/${category.title.toLowerCase()}/${category.id}?${searchParams.toString()}`;
        history.push(path);
    };

    return (
        <div className="w-screen md:w-auto">
            <section>
                <div className="h-auto bg-gray-100 flex flex-col md:w-auto pb-6">
                    <div className="flex flex-col items-center gap-4 md:justify-between md:flex-row px-10">
                        <h2 className="text-2xl font-bold pb-4 text-black">Shop</h2>
                        <div className="text-sm text-gray-500 mb-4 flex items-center">
                            <Link to="/" className="hover:underline text-black">Home</Link>
                            <ChevronRight />
                            <span className="text-gray-500 font-medium">Shop</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mx-auto w-2/3 md:flex-row md:justify-evenly">
                        {top5Categories.map((category) => (
                            <div
                                key={category.id}
                                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                                onClick={() => handleCategoryClick(category)}
                            >
                                <img
                                    src={category.img}
                                    alt={category.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-2">
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <FilterBar />
            </section>

            <section className="px-4 py-12 w-auto bg-white items-center">
                <div className="text-center mb-10">
                    <h4 className="text-sm text-gray-500 uppercase">All Products</h4>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop Now</h2>
                    <p className="text-gray-400 text-sm">Explore our full product catalog</p>
                </div>
                <ProductList productList={productList} />

                <Pagination
                    totalProducts={total}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                />
            </section>

            <section>
                <Icons />
            </section>
        </div>
    );
}
