import { SyntheticEvent, useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import items from '../data/items.json'


type ShoppingCartProps = {
    isOpen: boolean;
}

function ShoppingCart({isOpen}: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const cartEl = useRef(null);
    useEffect(() => {
        window.addEventListener('mouseup', closeCartWhenClickedOutside);
        return () => {
            window.removeEventListener('mouseup', closeCartWhenClickedOutside);
        }
    }, []);

    function closeCartWhenClickedOutside(e: any) {
        console.log(e.target.className);
        // гениальное проектное решение
        const classes = ['cart-title', 'shopping-cart-bar', 'name', 'items-stack', 'cart-item', 'total', 'cart-remove-btn', "cart-item", 'cart-img', 'item-title', 'item-quantity', 'total-price', 'price'];
        if(!classes.includes(e.target.className)) {
            closeCart();
        }
    }
    return (
        <div ref={cartEl} style={{right: isOpen ? "0" : "-100%"}} className="shopping-cart-bar">
            <div className="cart-title">
                <h2 className="name">Shopping Cart</h2>
                <svg onClick={closeCart} className="close-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
            <div className="items-stack">
                {cartItems.map(item => {
                    return <CartItem key={item.id} {...item}/>
                })}
            </div>
            <h3 className="total">Total: {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                    const item = items.find(i => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
            )}</h3>
        </div>
    )
}

export default ShoppingCart;