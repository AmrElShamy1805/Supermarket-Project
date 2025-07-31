import NavigationBar from "../Components/navbar";

import ListOfCartItems from "../Components/listofcartitems";
import FooterSection from "../Components/Footer";
export default function CartPage({ cart , DeleteCartItem }) {
  return (
    <>
      <NavigationBar />
      <ListOfCartItems CartItems = {cart} DeleteCartItem = {DeleteCartItem} />
      <FooterSection/>
    </>
  );
}
