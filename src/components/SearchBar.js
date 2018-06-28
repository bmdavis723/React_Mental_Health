import React from 'react';
import ReactDOM from 'react-dom';
import Calories from './Calories';
import getCal from './Calculations';
import axios from 'axios';


const tester = null
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
    height: '',
    weight: '',
    activitylevel: '',
    age: '',
    gender: '',
    calories: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleCurrentWeight = this.handleCurrentWeight.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFoodList = this.handleFoodList.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleHeight(event) {
    this.setState({height: event.target.value})
    console.log(this.state);
  }

  handleCurrentWeight(event) {
    this.setState({weight: event.target.value})
    console.log(this.state);
  }

  handleCurrentActivityLevel = (event) => {
    this.setState({activitylevel: event.target.value})
    console.log(this.state)
  }

  handleAge = (event) => {
    this.setState({age: event.target.value})
    console.log(this.state)
  }


  handleGender = (event) => {
    let gender = event.target.value;
    this.setState({gender});
    console.log(this.state);
  }

  handleSubmit(event) {
     let calories = getCal(this.state);
     event.preventDefault();
     this.state.calories = calories;
     console.log(this.state);
   }

   handleFoodList(event){
     event.preventDefault();
     let phrase = event.target.food.value;
     let calories = this.state.calories;
     if(phrase == '' && calories == ''){
       alert('Please fill out both forms to calculate your caloric intake');
     } else {
     axios.get(`https://api.nutritionix.com/v1_1/search/${phrase}?results=0%3A5&cal_min=0&cal_max=${calories}&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=13baa2eb&appKey=3902c98bd1a54c1ced0240d70f7ff845`)
      .then((foodInfo) => {
        let foodList = foodInfo.data.hits.map((item) => {
            return item.fields.item_id;
        });
        console.log(foodList);
      this.setState({foodList})
       let foodKeyArray = [];
      for(let i= 0; i < foodList.length; i ++) {
        console.log(foodList[i]);
        let foodKeyURL = `https://api.nutritionix.com/v1_1/item?id=${foodList[i]}&appId=13baa2eb&appKey=3902c98bd1a54c1ced0240d70f7ff845`;
        axios.get(foodKeyURL)
          .then((foodKeys) => {
            console.log(foodKeys);
            foodKeyArray.push(foodKeys.data.item_name);
          });
          console.log(foodKeyArray)
          this.setState({foodKeyList: foodKeyArray});
    }

  })
  }
}

fuckThisShit = () => {
  if (this.state.foodKeyList) {
    console.log(this.state.foodKeyList.length);
    return console.log(Object.keys(this.state.foodKeyList)[0]);
  }
}

 printFoodKeys = () => {
   if (this.state.foodKeys) {
     return this.state.foodKeys.data.item_id;
   }
 }

 printStrings = () => {
     console.log(this.state);
 }
    render() {

      return (
        <div>
          {this.fuckThisShit()}
          {this.printFoodKeys()}
          {this.printStrings()}
          <div class="jumbotron">
            <h1>Gitfit</h1>
              </div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="height" placeholder="Height" onChange={this.handleHeight}/>
            <select class="ui dropdown" onChange={this.handleChange}>
            <option value="feet">Feet</option>
            <option value="cm">Cm</option>
            </select>
            <input type="text" name="weight" placeholder="Current Weight" onChange={this.handleCurrentWeight}/>
            <select class="ui dropdown" onChange={this.handleChange}>
            <option value="pound">lbs</option>
            <option value="cm">kg</option>
            </select>
            <select class="ui dropdown" onChange={this.handleCurrentActivityLevel}>
            <option value="">Current Activity Level</option>
            <option value="1.1">Sedentary</option>
            <option value="1.275">Lightly Active</option>
            <option value="1.35">Moderately Active</option>
            <option value="1.525">Very Active</option>
            <option value="1.7">Extremely Active</option>
             </select>
             <select class="ui dropdown" onChange={this.handleAnticipatedActivityLevel}>
            <option value="">Anticipated Activity Level</option>
            <option value="1.1">Sedentary</option>
            <option value="1.275">Lightly Active</option>
            <option value="1.35">Moderately Active</option>
            <option value="1.525">Very Active</option>
            <option value="1.7">Extremely Active</option>
            </select>
            <input type="text" name="age" placeholder="Age" onChange={this.handleAge}/>
            <input type="radio" name="gender" value="male" onChange={this.handleGender}/> Male
            <input type="radio" name="gender" value="female" onChange={this.handleGender}/> Female
            <button className="btn btn-warning">Submit</button>
            </form>
        <h3>Your Daily Caloric Intake:</h3>
        <p>What would you like to eat?</p>
        <form onSubmit={this.handleFoodList}>
        <input type="text" name="food"/>
        <button className="btn btn-warning">Submit</button>
        </form>
        </div>

      )
    }
}

export default SearchBar;
