import React from 'react';
/*import axios from 'axios';*/


class Calories extends React.Component {

  constructor(props){
     super(props)
     this.state = {
       result: ''
     }
     this.handleChange = this.handleChange.bind(this);
   }

   handleChange = (event) => {
     this.setState({
       result: event.target.value
     })
   }

  render () {
    return (
     <div>
      <p>What would you like to eat?</p>
      <form onChange={this.handleChange}>
      <input type="text" name="food"/>
      <button className="btn btn-warning" >Submit</button>
      </form>
     </div>
    )
  }
}

export default Calories;
