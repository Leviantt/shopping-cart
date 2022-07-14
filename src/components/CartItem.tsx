import { useShoppingCart } from '../context/ShoppingCartContext';
import items from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
    id: number,
    quantity: number
}
function CartItem({id, quantity}: CartItemProps) {
    const { removeItem } = useShoppingCart();
    const item = items.find(i => i.id === id);
    if(item == null) return null;

    return (
        <div className="cart-item">
            <img className='cart-img' src={item.imgUrl} alt={item.name} />
            <div className='item-title'>
                <span className='name'>{item.name} <span className='item-quantity'>{quantity > 1 && `x ${quantity}`}</span></span>
                <span className='price'>{formatCurrency(item.price)}</span>
            </div>
            <div className='total-price'>
                {formatCurrency(item.price * quantity)}
                <button className='cart-remove-btn' onClick={() => removeItem(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;