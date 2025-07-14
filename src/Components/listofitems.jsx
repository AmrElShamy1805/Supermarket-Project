import ItemCard from './itemcard';
import '../cssfiles/listofitems.css'
export default function ItemList({ listofitems , addCartItem  }) {
  return (
    <>
    <div className="listofitems">
      {listofitems.length === 0 ? (
        <h1>No items can be loaded</h1>
      ) : (
        listofitems.map((item, index) => (
          <ItemCard key={index} Item={item} addCartItem = {addCartItem} />
        ))
      )}
      </div>
    </>
  );
}
