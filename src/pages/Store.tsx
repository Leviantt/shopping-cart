import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem';

function Store() {
    return (
    <>
        <h1>Store</h1>
        <div className='items-grid'>
            {storeItems.map(item => <StoreItem key={item.id} {...item}/>)}
        </div>
    </>
    );
}
export default Store;