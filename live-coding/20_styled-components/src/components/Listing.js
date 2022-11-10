import "./listing.css"
import BuyButton from "./BuyButton"



function Listing ({item}){
    let classes = "listing";
   if(item.sold){
        classes += " sold"
    }

    return(
        <div className={classes}>
            <img src={item.img}/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.pickup ? "Abholen" : "Versand möglich"}</p>
            <BuyButton sold={item.sold}/>
        </div>
    )
}
export default Listing; 