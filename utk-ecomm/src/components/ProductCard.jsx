import { Link } from "react-router-dom";

export function ProductCard({ product }) {

    return (
        <Link
            to={{
                pathname: `/product/${product.id}`,
                state: { from: location.pathname + location.search }
            }}
        >
            <div className="bg-gray-200 border rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition h-96">
                <div>
                    <img src={product.images?.[0]?.url} alt={product.name} className="h-48 object-cover" />
                </div>
                <h3 className="text-black font-semibold text-xl mt-4 text-center">{product.name}</h3>
                <p className="text-gray-500 text-sm text-center mt-1">{product.description}</p>
                <div className="mt-2 text-sm">
                    <span className="text-green-600 font-semibold text-lg">{product.price.toFixed(2)} ₺</span>
                </div>
            </div>
        </Link>
    );
}
