import { Link } from "react-router-dom";

export function ProductCard({ product, imageUrl, index }) {
    return (
        <Link to={`/product/${index}`}>
            <div className="bg-gray-200 border rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition">
                <div>
                    <img src={imageUrl} alt={product.title} />
                </div>
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
        </Link>
    );
}
