import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import LoginPage from './LoginPage';
import SearchBar from './SearchBar';
import Articles from './Articles';



export default class Main extends React.Component {
  constructor(){
      super()
      this.state = {
        userName: ""
      }

      this.setUser = this.setUser.bind(this)
  }

  setUser( uName ){
    this.setState( {
      userName: uName
    } )
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Route path="/" exact render={ props => <NavBar {...props} userName={this.state.userName} /> } />
            <Route path="/search" exact component={SearchBar} />
            <Route path="/articles" exact component={Articles} />
            <Route path="/login" exact render={ props => <LoginPage {...props} setUser={this.setUser} />  } />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}
