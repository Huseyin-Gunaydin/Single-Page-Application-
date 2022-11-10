import { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);


    this.state={
        avatar:""
      }
  }

  UNSAFE_componentWillMount(){

  }

  componentDidMount() {
    console.log("DidMount",  this.state.avatar)
    console.log("Did Mount")
    this.setState({
       avatar : `https://avatars.dicebear.com/api/human/${this.props.name}.svg`
    })
  }


shouldComponentUpdate(){

    return true
}


 componentDidUpdate(){
    setTimeout((prevProps, prevState)=>{
        console.log("aktuelle props", this.props.name)
        console.log("vorherige props", prevProps.name)

        console.log("aktuelle state", this.state.avatar)
        console.log("vorherige state", prevState.name)

     //   console.log("Call Database and change")
    },2000)
 }


  render() {
    console.log("Render", this.state.avatar);
    const { loggedIn, name } = this.props
    return (
      <div>
        <img src={this.state.avatar} width="200"/>
        <div>Username:herrids</div>
        <div>Location:Berlin</div>
        <div>Name:{name}</div>
        <div>Logged in:{loggedIn ? "Logged In" : "not logged in"}</div>
      </div>
    );
  }
}
