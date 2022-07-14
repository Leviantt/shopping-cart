import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext'
type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {  getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <div className="store-item">
            <img className='store-item-img' src={imgUrl} alt={name} />
            <div className='store-item-body'>
                <div className="store-item-title">
                    <span className="name">{name}</span>
                    <span className="price">{formatCurrency(price)}</span>
                </div>
                <div className='quantity-control'>
                    {quantity === 0 ? (
                        <button className="btn reduce-btn" onClick={() => increaseItemQuantity(id)}>+ Add To Cart</button>
                    ) : (
                        <div className='quantity-change-btns'>
                            <div>
                                <button className='btn reduce-btn' onClick={() => decreaseItemQuantity(id)}>-</button>
                                <div>
                                    <span className='quantity'>{quantity}</span>
                                    in Cart
                                </div>
                                <button className='btn reduce-btn' onClick={() => increaseItemQuantity(id)}>+</button>
                            </div>
                            <button className='btn remove-btn' onClick={() => removeItem(id)}>Remove</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StoreItem;