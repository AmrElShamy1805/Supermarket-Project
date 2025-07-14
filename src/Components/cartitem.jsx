export default function CartItemCard({item , DeleteCartItem}){
    return(
        <>
            <div className="ItemCard">
            <div className="ItemImageDiv">
                <img src={item.image} alt="" />
            </div>
            <div className="ItemDescriptionDiv">
                <div className="ItemName">
                    <h2>
                        {item.name}
                    </h2>
                </div>
                <div className="ItemPrice">
                    <p>
                        Price : ${item.price}
                    </p>
                </div>
                <div className="ItemStock">
                    <p>
                        Stock : {item.stock}
                    </p>
                </div>
                {item.stock === 0 ? (
                    <>
                        <div className="ItemButtons">
                        <button className = "Deny"  disabled >
                            Out Of Stock!
                        </button>
                    </div>
                    </>
                ) : (
                    <div className="ItemButtons Available-Item">
                        Item available 
                    </div>
                )}
                <div className="ItemButtons">
                        <button className = "Delete" type="button" onClick = {()=>DeleteCartItem(item)} >
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
            </div>
        </div>
        </>
    )
}