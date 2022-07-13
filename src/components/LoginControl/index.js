import React from 'react'

function UserGreetings(props){
  return <h3 style={{marginTop: '20px'}}>Olá, {props.name}! Bem vindo(a) de volta</h3>
}

function GuestGreetings(props){
  return <h3>Por favor, faça o login para continuar</h3>
}

function Greetings(props) { 
  if(props.isLoggedIn){
    return <UserGreetings>{props.name}</UserGreetings>
  }
  return <GuestGreetings></GuestGreetings>
}

export default class LoginControl extends React.Component{
  
  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)

    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout(){
    this.setState({ isLoggedIn: false });
  }


  render(){
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <>
        <Greetings isLoggedIn={isLoggedIn}></Greetings>
        {isLoggedIn && 
          <button className="btn btn-success" onClick={this.handleLogout}>Sair</button>
        }
        {!isLoggedIn && 
          <button className="btn btn-success" onClick={this.handleLogin}>Acessar</button>
        }
      </>
    )
  }
}