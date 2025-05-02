export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
});

export const setProductList = (list) => ({
    type: 'SET_PRODUCT_LIST',
    payload: list,
});

export const setTotal = (total) => ({
    type: 'SET_TOTAL',
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: 'SET_FETCH_STATE',
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: 'SET_LIMIT',
    payload: limit,
});

export const setOffset = (offset) => ({
    type: 'SET_OFFSET',
    payload: offset,
});

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter,
});

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://workintech-fe-ecommerce.onrender.com/categories');
            if (!res.ok) throw new Error('Categories fetch failed');
            const data = await res.json();
            dispatch(setCategories(data));
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
};

export const fetchProducts = (queryString = "", limit = 12, categoryId = null) => {
    return async (dispatch) => {
        dispatch(setFetchState("loading"));

        try {
            const params = new URLSearchParams(queryString);

            if (categoryId) {
                params.set("category", categoryId);
            }

            const page = parseInt(params.get("page") || "1", 10);
            const offset = (page - 1) * limit;

            const url = `https://workintech-fe-ecommerce.onrender.com/products?${params.toString()}&limit=${limit}&offset=${offset}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log("Fetch URL", url);
            dispatch(setProductList(data.products));
            dispatch(setTotal(data.total));
            dispatch(setFetchState("fetched"));
        } catch (err) {
            console.error("Product fetch error", err);
            dispatch(setFetchState("error"));
        }
    };
};