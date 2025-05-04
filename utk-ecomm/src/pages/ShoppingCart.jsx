import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { setCart } from "../store/actions/shoppingCartActions";
import { useHistory, Link } from "react-router-dom";

export const ShoppingCart = () => {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const updateCart = (newCart) => dispatch(setCart(newCart));

    const toggleChecked = (id) => {
        const updated = cart.map(item =>
            item.product.id === id ? { ...item, checked: !item.checked } : item
        );
        updateCart(updated);
    };

    const increaseCount = (id) => {
        const updated = cart.map(item =>
            item.product.id === id ? { ...item, count: item.count + 1 } : item
        );
        updateCart(updated);
    };

    const decreaseCount = (id) => {
        const updated = cart.map(item =>
            item.product.id === id && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
        );
        updateCart(updated);
    };

    const removeItem = (id) => {
        const updated = cart.filter(item => item.product.id !== id);
        updateCart(updated);
    };

    const total = cart.reduce((sum, item) =>
        item.checked ? sum + item.count * item.product.price : sum, 0
    );

    return (
        <div className="px-6 mx-auto bg-gray-100 h-screen w-screen md:w-auto">
            <h2 className="text-2xl font-bold mb-4 text-black">Sepetiniz</h2>
            {cart.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-between border-b py-4 text-black bg-white">
                    
                    <div className="flex items-center gap-4 pl-6">
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => toggleChecked(item.product.id)}
                        />
                        <Link
                            to={{
                                pathname: `/product/${item.product.id}`,
                                state: { from: location.pathname + location.search }
                            }}
                        >
                        <div className="flex items-center gap-4 pl-6">
                            <img
                                src={item.product.images?.[0]?.url}
                                alt={item.product.name}
                                className="w-24 h-24 object-contain rounded"
                            />
                            <div>
                                <p className="font-medium">{item.product.name}</p>
                                <p className="text-sm text-gray-500">
                                    {item.product.price.toFixed(2)} TL x {item.count}
                                </p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button className="bg-white" onClick={() => decreaseCount(item.product.id)}>-</button>
                        <span>{item.count}</span>
                        <button className="bg-white" onClick={() => increaseCount(item.product.id)}>+</button>
                        <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 bg-white "
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                    
                </div>
            ))}

            <div className="flex flex-col md:flex-row md:justify-between items-center justify-center mt-6 text-right text-black">
                <p className="text-lg font-bold">
                    Seçili Ürünler Toplamı: {total.toFixed(2)} TL
                </p>
                <button
                onClick={() => history.push("/checkout")}
                className="flex px-4 py-2 bg-orange-500 text-white rounded"
            >
                Siparişi Tamamla
            </button>
            </div>
            
        </div>
    );
};

