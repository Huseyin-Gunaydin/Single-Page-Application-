import {Component} from "react";
import User from "./components/User"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      loggedIn :false,
      name:"Ferdi"
    }
  }

  logIn = () => {
    this.setState({
      loggedIn:!this.state.loggedIn
    })
  }


  changeName=(event) =>  {
    this.setState({
     name:event.target.value
    })
  }

  render () {

      return (
          <div>
            <Container>
              <h1>User Profile</h1>
                 <User name={this.state.name} loggedIn={this.state.loggedIn}/>

              <Button className = "m-1" onClick={this.logIn}>{this.state.loggedIn ? "Log out" : "Log in"}</Button>
              <div><input onChange={this.changeName} value={this.state.name}/></div>
              </Container>
          </div>
      )
  }

}
export default App;