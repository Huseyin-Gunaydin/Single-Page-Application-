//import "./Food.css"
function Food({food}){
    const imgStyle ={
        width: 300
    } 
    const h3Style ={
        fontSize: "25px"
    } 
    return(
        <div className="food">
            <img style = {imgStyle} src = {food.img}></img>
            <h3 style={h3Style}>{food.name}</h3>
        </div>
    )
}

export default Food;