import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import axios from 'axios';


class Main extends React.Component {
    render () {
      return (
      <div>
        <SearchBar />
      </div>
      )
    }
}

export default Main;


  /*constructor () {
    super()
    this.state = {
      // provider: undefined,
      // gender: undefined,
      // state: undefined,
      // address: undefined,
      // specialties: undefined,
      // phone: undefined,
      // bio: undefined
      infoArr: []
    }

  }
   geoCode = async (city,state) => {
     console.log("called");
     let latLong = {}
     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},${state}&key=AIzaSyCw7RZeu6P1LzNSK89h11O2Lu3kbMl-rJM`)
      .then( (respGeo) => {
        console.log(respGeo);
        const latitude = respGeo.data.results[0].geometry.location.lat;
        const longitude = respGeo.data.results[0].geometry.location.lng;
        latLong = {lat: latitude, lon: longitude};
            axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=psychiatrist&location=${latLong.lat}%2C${latLong.lon}%2C%20100&gender=male&skip=0&limit=10&user_key=973b7763fb421962c47b2be55bad8269`)
              .then( (respDoc) => {
                console.log(respDoc);
                this.setState({
                  infoArr: [respDoc.data.data.slice(0,10)]
                });
              })
            })
    }

  getDoctor = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
    const specialties = e.target.elements.specialties.value;
    const gender = e.target.elements.gender.value;
    const insurance = e.target.elements.insurance.value;
    this.geoCode(city, state);
  }

  render() {
    return (
        <div>
        <SearchBar getDoctor={this.getDoctor} geoCode={this.geoCode}/>
        {/*}<DoctorsInfo provider={this.state.provider} gender={this.state.gender} city={this.state.city} state={this.state.state} address={this.state.address} specialties={this.state.specialties} phone={this.state.phone} bio={this.state.bio}/>}
        <DoctorsInfo infoArr={this.state.infoArr}/>
        </div>
    );
  }
};*/
