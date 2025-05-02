import React from "react";
import { useHistory } from "react-router-dom";

export function Pagination({ totalProducts, productsPerPage, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const history = useHistory();

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("...");
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                if (i > 1 && i < totalPages) pages.push(i);
            }
            if (currentPage < totalPages - 2) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    const handleClick = (page) => {
        if (page === "...") return;

        const params = new URLSearchParams(location.search);

        params.set("page", page);
        history.replace({ pathname: location.pathname, search: params.toString() });
        
    };

    return (
        <div className="flex flex-wrap justify-center mt-4 gap-2 px-2 bg-white">
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(page)}
                    className={`px-3 py-1 rounded ${
                        page === currentPage
                            ? "bg-black text-white"
                            : page === "..."
                            ? "cursor-default text-gray-400"
                            : "bg-gray-200 text-black hover:bg-black hover:text-white"
                    }`}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}
