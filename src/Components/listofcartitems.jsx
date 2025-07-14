import CartItemCard from "./cartitem";

export default function ListOfCartItems({ CartItems , DeleteCartItem }) {
  const totalPrice = CartItems.reduce((acc,item)=>acc+item.price,0);
  return (
    <div className="listofitems">
      {CartItems.length === 0 ? (
        <h1>No items can be loaded</h1>
      ) : (
        <>
          <div className="cart-items-section">
            <h1>Cart Items <i className="fa-solid fa-cart-shopping"></i></h1>
            <div className="cart-display-section">
                {CartItems.map((item, index) => (
                <CartItemCard key={index} item={item} DeleteCartItem = {DeleteCartItem} />
                ))}
            </div>
            
            <h2 className = "TotalPrice">Total price : ${totalPrice.toFixed(2)}</h2>
            <button type="button" className = "Confirm-Purchase">Confirm Purchases <i class="fa-solid fa-circle-check"></i> </button>
          </div>
        </>
      )}
    </div>
  );
}
