import { Link, useLocation } from "react-router-dom";
import useAddToCart from "../hooks/useAddToCart";

export function ProductCard({ product }) {
    const location = useLocation();

    const addToCart = useAddToCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <Link
            to={{
                pathname: `/product/${product.id}`,
                state: { from: location.pathname + location.search }
            }}
        >
            <div className="bg-gray-200 border rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition relative">
                <div>
                    <img src={product.images?.[0]?.url} alt={product.name} className="h-48 object-cover" />
                </div>
                <h3 className="text-black font-semibold text-xl mt-4 text-center">{product.name}</h3>
                <p className="text-gray-500 text-sm text-center mt-1">{product.description}</p>
                <div className="mt-2 text-sm">
                    <span className="text-green-600 font-semibold text-lg">{product.price.toFixed(2)} ₺</span>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600"
                >
                    Sepete Ekle
                </button>
            </div>
        </Link>
    );
}
