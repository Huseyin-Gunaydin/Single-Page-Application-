import Food from "./components/food/Food";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const favoriteFood =[
{
  name:"Spaghetti Bolognese", 
  img:"https://images.eatsmarter.de/sites/default/files/styles/576x432/public/spaghetti-bolognese-original-59303.jpg"
},
{
  name:"Hallaca", 
  img:"https://www.goya.com/media/7874/hallacas.jpg?quality=80"
},
{
  name:"Sprotten ohne Öl", 
  img:"https://essenrezept.de/wp-content/uploads/2021/08/Sprotten-Rezept.jpg"
}
]


const foodContainer= favoriteFood.map((el, index)=>{
  return (
    <Col>
      <Food key={index} food={el}/>
    </Col>

  )
})


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <h1>Meine Liblingsessen</h1>
      <Button>Filtern</Button>
      <Row>
      {foodContainer}
      </Row>
      </Container>
   
      </div>
  );
}

export default App;





