import React from "react";

export function Pagination({totalProducts, productsPerPage, setCurrentPage}) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pages.push(i);
    }
    return(
        <div className="flex flex-wrap justify-center mt-4 gap-2 px-2 overflow-x-auto">
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}