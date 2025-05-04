import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export const ShoppingCartDropdown = () => {
    const [hovered, setHovered] = useState(false);
    const cart = useSelector((state) => state.shoppingCart.cart);
    const history = useHistory();
    const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
    const total = cart.reduce((acc, item) => acc + (item.product.price * item.count), 0);

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="relative cursor-pointer">
                <ShoppingCart />
                {totalCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {totalCount}
                    </span>
                )}
            </div>

            {hovered && (
                <div className="absolute right-0 w-96 bg-white rounded-lg shadow-lg z-50 p-4">
                    <h3 className="text-lg font-semibold mb-4">
                        Sepetim ({cart.length} Ürün)
                    </h3>
                    <div className="divide-y divide-gray-200 max-h-64 overflow-auto">
                        {cart.length === 0 ? (
                            <p className="text-center text-gray-500">Sepetiniz boş</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className="flex items-center py-2">
                                    <img
                                        src={item.product.images?.[0]?.url}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded mr-4"
                                    />
                                    <div className="flex-1">
                                        <p className="font-medium text-sm">{item.product.name}</p>
                                        <p className="text-sm text-gray-500">Adet: {item.count}</p>
                                            {item.product.price * item.count}
                                    </div>
                                </div>
                            ))
                        )}
                        <p className="text-orange-600 font-semibold text-sm">
                            Toplam: {total.toFixed(2)} TL
                        </p>
                    </div>
                    {cart.length > 0 && (
                        <div className="mt-4 flex justify-between items-center">
                            <button
                                onClick={() => history.push("/cart")}
                                className="px-4 py-2 border rounded text-gray-700"
                            >
                                Sepete Git
                            </button>
                            <button
                                onClick={() => history.push("/checkout")}
                                className="px-4 py-2 bg-orange-500 text-white rounded"
                            >
                                Siparişi Tamamla
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};