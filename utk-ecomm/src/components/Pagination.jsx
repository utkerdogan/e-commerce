import React from "react";

export function Pagination({totalProducts, productsPerPage, setCurrentPage}) {
    let pages = [];

    for(let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++){
        pages.push(i);
    }
    return(
        <div className="flex justify-center mt-4 gap-4">
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}