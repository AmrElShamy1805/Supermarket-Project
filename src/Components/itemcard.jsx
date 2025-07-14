import '../cssfiles/itemcard.css'
export default function ItemCard({Item , addCartItem}){
    return(
        <div className="ItemCard">
            <div className="ItemImageDiv">
                <img src={Item.image} alt="" />
            </div>
            <div className="ItemDescriptionDiv">
                <div className="ItemName">
                    <h2>
                        {Item.name}
                    </h2>
                </div>
                <div className="ItemPrice">
                    <p>
                        Price : ${Item.price}
                    </p>
                </div>
                <div className="ItemStock">
                    <p>
                        Stock : {Item.stock}
                    </p>
                </div>
                {Item.stock === 0 ? (
                    <>
                        <div className="ItemButtons">
                        <button className = "Deny"  disabled >
                            Out Of Stock!
                        </button>
                    </div>
                    </>
                ) : (
                    <div className="ItemButtons">
                        <button className = "Accept" type="button" onClick={() => addCartItem(Item)}>
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add to cart
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}