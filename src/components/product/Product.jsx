import './product.css';
import img from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import Sizes from '../sizes/Sizes';
import Deliveries from '../deliveries/Deliveries';
import Care from '../care/Care';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext/CartContext';
import { ProductContext } from '../../context/productContext/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const product = {
        image: img,
        secondImage: img2,
        title: "New Go-To Green Bell-Sleeved Coat",
        price: 80,
        color: ["#787B6A"],
        size: ["xs", "s", "m", "l", "xl", "xxl"]
    };

    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const { addToCart, removeFromCart } = useContext(CartContext);
    const { updateProduct } = useContext(ProductContext);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size before adding to the cart.");
            return;
        }

        const productDetails = {
            id: product.title,
            title: product.title,
            price: product.price,
            size: selectedSize,
            quantity: quantity,
            image: product.image,
        };

        updateProduct(productDetails);
        addToCart(productDetails);
        toast.success("Added to cart!");
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.title, selectedSize);
        setQuantity(1);
        toast.info("Removed from cart");
    };

    const handleSize = (size) => setSelectedSize(size);

    return (
        <div className="product-container">
            <div className="product">
                <div className="image-container">
                    <img src={product.image} alt={product.title} />
                    <img src={product.secondImage} alt={product.title} />
                </div>
                <div className="product-description">
                    <h1 className="title">{product.title}</h1>
                    <p className="price">{product.price}$</p>
                    <div className="colors-container">
                        Color:
                        <div className="colors">
                            {
                                product.color.map((color, index) => (
                                    <p key={index} style={{
                                        width: "1.2rem",
                                        height: "1.2rem",
                                        background: color,
                                        borderRadius: "50%",
                                    }}></p>
                                ))}
                        </div>
                    </div>
                    <p>SIZE</p>
                    <div className="sizes-container">
                        <div className="sizes-wrapper">
                            {
                                product.size.map((size, index) => (
                                    <Sizes size={size} handleSize={handleSize} key={index} />
                                ))}
                        </div>
                        <div className="quantity-controls">
                            <button onClick={handleDecrement}>-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={handleAddToCart} className="cart-btn">Add to Cart</button>
                        <button onClick={handleRemoveFromCart} className="cart-btn">Remove from Cart</button>
                    </div>
                    <Care />
                    <Deliveries />
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
}

export default Product;
