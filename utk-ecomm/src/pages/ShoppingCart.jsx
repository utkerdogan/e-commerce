import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2 } from "lucide-react";
import { setCart } from "../store/actions/shoppingCartActions";
import { useHistory, Link } from "react-router-dom";

export const ShoppingCart = () => {
    const cart = useSelector((state) => state.shoppingCart.cart);
    const dispatch = useDispatch();
    const history = useHistory();
    const cargoPayment = 29.99;

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
        <div className="px-4 md:px-6 py-6 bg-gray-100 min-h-screen w-screen ">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-black">Sepetiniz</h2>
        
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Ürün Listesi */}
                <div className="flex-1 space-y-4">
                {cart.map((item, index) => (
                    <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-between border-b py-4 px-4 bg-white rounded"
                    >
                    <div className="flex items-center gap-4">
                        <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => toggleChecked(item.product.id)}
                        />
                        <Link
                        to={{
                            pathname: `/product/${item.product.id}`,
                            state: { from: location.pathname + location.search },
                        }}
                        className="flex items-center gap-4"
                        >
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
                        </Link>
                    </div>
        
                    <div className="flex gap-3 items-center mt-4 md:mt-0">
                        <button className="bg-white text-black text-xl" onClick={() => decreaseCount(item.product.id)}>-</button>
                        <span className="bg-white text-black text-lg">{item.count}</span>
                        <button className="bg-white text-black text-xl" onClick={() => increaseCount(item.product.id)}>+</button>
                        <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 bg-white"
                        >
                        <Trash2 size={18} />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
        
                <div className="w-full lg:w-96 bg-white p-6 rounded shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Sipariş Özeti</h3>
                    <div className="text-sm space-y-2 text-gray-700">
                        <div className="flex justify-between">
                        <span>Seçilen Ürünlerin Toplamı:</span>
                        <span className="font-semibold">{total.toFixed(2)} TL</span>
                        </div>
                        <div className="flex justify-between">
                        <span>Kargo:</span>
                        <span className="text-gray-800">{cargoPayment} TL</span>
                        </div>
                        <hr />
                        <div className="flex justify-between text-lg font-bold">
                        <span>Toplam:</span>
                        <span>{(total + cargoPayment).toFixed(2)} TL</span>
                        </div>
                    </div>
            
                    <button
                        onClick={() => history.push("/checkout")}
                        className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
                    >
                        Sepeti Onayla
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

