import { formatCurrency } from '../utilities/formatCurrency';
type StoreItemProps = {
    name: string,
    price: number,
    imgUrl: string
};

function StoreItem({ name, price, imgUrl }: StoreItemProps) {
    let amount = 2;
    return (
        <div className="store-item">
            <img src={imgUrl} alt={name} />
            <div className="title">
                <span className="name">{name}</span>
                <span className="price">{formatCurrency(price)}</span>
            </div>
            {amount === 0 ? (
                <button className="btn btn-primary">+ Add to the cart</button>
            ) : (
                <>
                    <div>
                        <button className="btn ">+</button>
                        <div><span>{amount}</span> in the  cart</div>
                        <button className="btn ">-</button>
                    </div>
                    <button className="btn ">Remove</button>
                </>
            )}
        </div>
    );
}

export default StoreItem;