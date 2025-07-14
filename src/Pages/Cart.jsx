import NavigationBar from "../Components/navbar";
import CartItemCard from "../Components/cartitem";
import ListOfCartItems from "../Components/listofcartitems";
export default function CartPage({ cart , DeleteCartItem }) {
  return (
    <>
      <NavigationBar />
      <ListOfCartItems CartItems = {cart} DeleteCartItem = {DeleteCartItem} />
      
    </>
  );
}
