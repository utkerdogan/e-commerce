import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export function BestSeller() {
    const productList = useSelector(state => state.product.productList);

    const topRatedProducts = [...productList]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    return (
        <section>
            <div className="flex flex-col md:grid md:grid-cols-4 gap-6 md:mx-auto max-w-6xl px-10">
                {topRatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
