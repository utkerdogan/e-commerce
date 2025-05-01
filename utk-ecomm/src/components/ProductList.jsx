import React from "react";
import { ProductCard } from "./ProductCard";

export function ProductList({ productList }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mx-auto max-w-7xl">
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
