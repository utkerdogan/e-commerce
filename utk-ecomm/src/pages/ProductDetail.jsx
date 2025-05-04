import React, { useEffect, useState } from "react";
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import { ChevronRight, Eye, Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../store/actions/productActions";
import { Icons } from "../components/Icons";
import { BestSeller } from "../components/BestSeller";
import useAddToCart from "../hooks/useAddToCart";

export function ProductDetail() {
    const { productId } = useParams();
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("description");
    const addToCart = useAddToCart();

    const productList = useSelector(state => state.product.productList);
    const [loading, setLoading] = useState(true);

    const product = productList.find(p => p.id === Number(productId));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const fetchProduct = async () => {
            if (!product) {
                try {
                    const res = await fetch(`https://workintech-fe-ecommerce.onrender.com/products/${productId}`);
                    const data = await res.json();
                    dispatch(setProductList([data]));
                } catch (error) {
                    console.error("Product fetch failed:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId, dispatch, product]);

    if (loading || !product) {
        return (
            <div className="h-screen flex items-center justify-center">
                <span className="text-gray-600">Loading...</span>
            </div>
        );
    }


    return (
        <div className="w-screen md:w-auto">
            <section className="bg-gray-100 py-10">
                <div className="flex justify-between items-center mb-4 mx-auto px-6 md:w-4/5 text-gray-900">
                        <button onClick={() => {
                            if (location.state?.from) {
                                history.push(location.state.from);
                            } else {
                                history.push("/shop");
                            }
                        }} className="text-sm text-blue-600 hover:underline bg-white">
                            ← Back
                        </button>
                        <div className="text-sm text-gray-500 mb-4 flex items-center">
                            <Link to="/" className="hover:underline text-black">Home</Link>
                            <ChevronRight />
                            <span className="text-gray-500 font-medium">Product Detail</span>
                        </div>
                    </div>
                <div className="flex flex-col md:flex-row justify-evenly mx-auto px-6 md:w-4/5 text-gray-900 gap-10">
                    <div className="w-full md:w-1/3">
                        <img src={product.images?.[0]?.url} alt={product.name} className="rounded-md w-full object-cover" />
                    </div>
                    <div className="flex flex-col text-center md:text-start gap-10 md:w-1/2">
                        <div className="flex flex-col w-full md:w-1/2 space-y-4">
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p className="text-gray-600 text-sm">{product.description}</p>
                            <p className="text-2xl font-semibold text-gray-900">{product.price.toFixed(2)} ₺</p>
                            <p className="text-sm">Stock: {product.stock}</p>
                            <p className="text-sm">Rating: {product.rating}</p>
                            <p className="text-sm">Sold: {product.sell_count}</p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <div className="flex mt-4 w=1/3 justify-between items-center">
                                <button className="bg-blue-500 text-white px-6 rounded hover:bg-blue-600 transition" onClick={() => addToCart(product)}>
                                    Sepete Ekle
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

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 text-gray-700">
                        
                        <div className="flex-1">
                            <img src={`https://picsum.photos/300/400?random=${+productId + 3}`} alt="info" className="rounded" />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold mb-2 text-sm">the quick fox jumps over</h3>
                            <p>{product.description}</p>
                            <p className="mt-4">{product.description}</p>
                        </div>

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
        </div>
    );
}
