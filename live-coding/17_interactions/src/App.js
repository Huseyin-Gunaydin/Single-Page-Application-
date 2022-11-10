import Listing from "./components/Listing";


 const listing = [
  {
      name : "Kopfhörer",
      price : "120",
      img : "https://m.media-amazon.com/images/I/71HYfybKa-L._AC_SY450_.jpg",
      pickup : false, 
      sold : false,

  },
  {
      name : "MacBook Pro",
      price : "1200",
      img : "https://gzhls.at/i/76/56/2427656-n0.jpg",
      pickup : true,
      sold : false,

  },
  {
      name : "Monitor",
      price : "600",
      img : "https://www.lg.com/de/images/monitore/md07533030/gallery/medium04.jpg",
      pickup : false,
      sold : true,

  }
]



function App() {
 const listingsComponents = listing.map((item, index)=>{
/*   if(item.sold)  {
    return
  } */
    return <Listing key={index} item={item}/>
  })

  console.log(listingsComponents)
  return (
    <div className="App">
      <h1>Flohmarkt</h1>
      {listingsComponents}
 
    </div>
  );
}

export default App;





