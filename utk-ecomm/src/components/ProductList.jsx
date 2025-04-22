
import { ProductCard } from "./ProductCard";

export function ProductList({ shopProducts }) {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-auto max-w-7xl">
            {shopProducts.map((product, index) => (
            <ProductCard
                key={index}
                product={product}
                imageUrl={`https://picsum.photos/400/500?random=${index + 1}`}
            />
            ))}
        </div>
    );
        
};