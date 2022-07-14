import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemProps = {
    name: string,
    price: number,
    imgUrl: string
};

function StoreItem({ name, price, imgUrl }: StoreItemProps) {
    let quantity = 3;
    if(name === "Computer") {
        quantity = 0;
    }
    return (
        <div className="store-item">
            <img src={imgUrl} alt={name} />
            <div className='store-item-body'>
                <div className="store-item-title">
                    <span className="name">{name}</span>
                    <span className="price">{formatCurrency(price)}</span>
                </div>
                {/* quantity-control */}
                <div className='quantity-control'>
                    {quantity === 0 ? (
                        <button className="btn reduce-btn">+ Add To Cart</button>
                    ) : (
                        // quantity-change-btns
                        <div className='quantity-change-btns'>
                            <div>
                                <button className='btn reduce-btn'>-</button>
                                <div>
                                    <span className='quantity'>{quantity}</span>
                                    in Cart
                                </div>
                                <button className='btn reduce-btn'>+</button>
                            </div>
                            <button className='btn remove-btn'>Remove</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StoreItem;