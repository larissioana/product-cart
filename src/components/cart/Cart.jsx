import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import './cart.css'
import upIcon from '../../assets/up.png'
import downIcon from '../../assets/down.png'

const Cart = () => {
    const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, cartCount } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart ({cartCount})</h2>
            {
                cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="cart-item">
                            <div className="cart-item-flex-container">
                                <div className="cart-left">
                                    <img src={item.image} alt={item.title} width="250" />
                                </div>
                                <div className="cart-right">
                                    <h3>{item.title}</h3>
                                    <p className="size">Size: {item.size}</p>
                                    <div className="quantity">
                                        <p>Quantity</p>
                                        <div className="quantity-wrapper">
                                            <p>{item.quantity}</p>
                                            <div className="up-down-icons">
                                                <img src={upIcon} width="15px" onClick={() => incrementQuantity(item.id, item.size)} />
                                                <img src={downIcon} width="15px" onClick={() => decrementQuantity(item.id, item.size)} />
                                            </div>
                                        </div>
                                    </div>
                                    <p>Price: ${item.price}</p>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
        </div>
    );
};

export default Cart;
