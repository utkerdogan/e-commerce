import { products } from "../data";
import { ProductCard } from "./ProductCard";

export function BestSeller(){
    return (
        <section >
            <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:mx-auto max-w-6xl px-10">
                {products.map((product, index) => (
                <ProductCard
                    key={index}
                    product={product}
                    imageUrl={`https://picsum.photos/400/500?random=${index + 1}`}
                />
                ))}
            </div>
        </section>
    )
}