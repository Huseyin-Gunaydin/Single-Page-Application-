import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import {useReducer} from "react"
import user from "./user";

const initState = {

  inputEmail:"",
  inputPassword:"",
  loggedInUser:null,
  alert:null
}

const reducer = (state, action)=>{
switch (action.type){
  case"undateInputEmail":
    state = {
      ...state,
      inputEmail: action.value
    }
    break;
    case"undateInputPassword":
    state = {
      ...state,
      inputPassword: action.value
    }
    break;
    case "loginUser":
      if(!state.inputEmail || !state.inputPassword){
        state={
          ...state,
          alert:"Bitte gebe Password und Email an"
        }
        break;
      }
      const foundUser = user.find(u=> u.email==state.inputEmail)
    if(foundUser){
      if(foundUser.password == state.inputPassword){
     state={
      ...state,
      loggedInUser:foundUser.email,
      alert : null
     }
    } else{
      state={
        ...state,
        alert:"Password nicht gefunden"
      }
    } 
  } else{
    state={
      ...state,
      alert:"Email nicht gefunden"
    }
  } 
 
    break;
    default:
      console.warn("Unknown action")
}
return state

}


function App() {

const [state, dispatch] = useReducer(reducer, initState)
 
  return (
    <div className="App">


      <Container>
        {state.loggenInUser ? (<h1>Welcome to our Website {state.loggedInUser}</h1>) :
        ( <>
        <Row><h1>Login</h1></Row>
        <Row><input className="m-2" type="email" placeholder="E-mail" value={state.inputEmail} onChange={(e) => dispatch({ type: "undateInputEmail", value:e.target.value})}></input></Row>
        <Row><input className="m-2" type="passwort" placeholder="Password" value={state.inputPassword} onChange={(e) => dispatch({ type: "undateInputPassword", value:e.target.value})}></input></Row>
        <Row><Button onClick={() => dispatch({ type: "loginUser"})}>Anmelden</Button></Row>
       </>)}

      </Container>
    </div>
  );
}

export default App;