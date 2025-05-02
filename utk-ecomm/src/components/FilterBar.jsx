import React, { useEffect, useState } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";

export function FilterBar() {
    const { categoryId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(location.search);
    const [filter, setFilter] = useState(queryParams.get("filter") || "");
    const [sort, setSort] = useState(queryParams.get("sort") || "");

    useEffect(() => {
        dispatch(fetchProducts(location.search.replace("?", "")));
    }, [location.search, dispatch]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.delete("sort");
    
        history.replace({ pathname: location.pathname, search: params.toString() });
        setFilter("");
        setSort("");
    }, [dispatch]);

    const handleFilter = () => {
        const params = new URLSearchParams();

        if (categoryId) params.set("category", categoryId);
        if (filter.trim()) params.set("filter", filter.trim());
        if (sort) params.set("sort", sort);
        params.set("page", 1);

        history.push({ pathname: location.pathname, search: params.toString() });

        dispatch(fetchProducts(params.toString()));
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-end gap-4 px-10 py-6 bg-white border-b">
            <input
                type="text"
                placeholder="Search product..."
                className="border border-black px-3 py-1 rounded text-sm w-40 bg-white text-black font-semibold"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleFilter();
                    }}
            />

            <select
                className="border px-3 py-1 rounded text-sm text-black font-semibold"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="">Sort</option>
                <option value="price:asc">Price Low → High</option>
                <option value="price:desc">Price High → Low</option>
                <option value="rating:asc">Rating Low → High</option>
                <option value="rating:desc">Rating High → Low</option>
            </select>

            <button
                onClick={handleFilter}
                className="bg-blue-500 text-white px-4 py-1 rounded text-sm"
            >
                Filter
            </button>
        </div>
    );
}
