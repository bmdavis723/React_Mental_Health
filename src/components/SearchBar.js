import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
    <div class="container">
      <div class="jumbotron">
  <h1>Search for a Mental Health Professional that can provide you with all your needs.</h1>
    <h1>Find the Best Mental Health provider:</h1>
    <form onSubmit={this.props.getDoctor}>
    <input type="text" name="city" placeholder="City"/>
    <input type="text" name="state" placeholder="State"/>
      <select class="ui dropdown">
    <input type="text" name="gender" placeholder="Gender"/>
    <option value="">Gender</option>
    <option value="1">Male</option>
    <option value="0">Female</option>
  </select>
    <input type="text" name="specialties" placeholder="Specialty"/>
    <input type="text" name="insurance" placeholder="Insurance"/>
    <button class="btn btn-outline-success">Submit</button>
    </form>
  </div>
</div>
</div>
</div>
    );
  };
};

export default SearchBar;
