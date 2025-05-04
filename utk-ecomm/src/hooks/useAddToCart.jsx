import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/shoppingCartActions";

export default function useAddToCart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);

    const addToCart = (product) => {
        const existingIndex = cart.findIndex(item => item.product.id === product.id);
        let updatedCart;

        if (existingIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[existingIndex] = {
                ...updatedCart[existingIndex],
                count: updatedCart[existingIndex].count + 1,
            };
        } else {
            updatedCart = [...cart, { product, count: 1, checked: true }];
        }

        dispatch(setCart(updatedCart));
    };

    return addToCart;
}
