import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBar from './NavBar';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault()
    let fName = document.querySelector("input[name=firstName]").value

    this.props.setUser(fName);
    console.log(event.target);
    this.setState( { redirect: true } )
  }

  render (){
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div id="login" className="mx-auto">
        <NavBar />
        <div className="container">
          <h1 className="well">Registration Form</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <form action="/">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label>First Name</label>
                      <input name="firstName" type="text" placeholder="Enter First Name Here.." className="form-control" />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label>Last Name</label>
                      <input name="lastName" type="text" placeholder="Enter Last Name Here.." className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea placeholder="Enter Address Here.." rows={1} className="form-control" defaultValue={""} />
                  </div>
                  <div className="row">
                    <div className="col-sm-4 form-group">
                      <label>City</label>
                      <input type="text" placeholder="Enter City Name Here.." className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label>State</label>
                      <input type="text" placeholder="Enter State Name Here.." className="form-control" />
                    </div>
                    <div className="col-sm-4 form-group">
                      <label>Zip</label>
                      <input type="text" placeholder="Enter Zip Code Here.." className="form-control" />
                    </div>
                  </div>
                  <div className="m-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter Phone Number Here.." className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="text" placeholder="Enter Email Address Here.." className="form-control" />
                  </div>
                  <Link to="/" ><button type="button" onClick={this.handleClick} className="btn btn-secondary">Complete Sign Up</button></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
