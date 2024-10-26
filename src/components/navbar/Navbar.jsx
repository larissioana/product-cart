import { useState, useContext, useRef, useEffect } from 'react'
import { CartContext } from '../../context/cartContext/CartContext';
import './navbar.css'
import Cart from '../cart/Cart';

const Navbar = () => {
    const { cartCount } = useContext(CartContext);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    const handleToggle = (e) => {
        e.stopPropagation();
        setIsModalOpen(true)
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="#">Men</a>
                <a href="#">Women</a>
            </div>
            <div className="nav-right">
                <a href="#">Account</a>
                <a href="#">Search</a>
                <a href="#">Cart</a>
                <p className="cart-count" onClick={handleToggle}>[{cartCount}]</p>
            </div>
            <div className="burger" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
            {
                isMobileNavOpen &&
                <div className="mobile-nav">
                    <div className="left">
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                    </div>
                </div>
            }
            {
                isModalOpen &&
                <div className="modal" ref={modalRef} >
                    <Cart setIsModalOpen={setIsModalOpen} />
                </div>
            }
        </nav>
    )
}

export default Navbar
