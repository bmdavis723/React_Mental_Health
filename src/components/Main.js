import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import DoctorsInfo from './DoctorsInfo';
import axios from 'axios';

class Main extends React.Component {
   state = {
     provider: undefined,
     gender: undefined,
     state: undefined,
     address: undefined,
     specialties: undefined,
     phone: undefined,
     bio: undefined
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
                  provider: respDoc.data.data[0].profile.first_name + ' ' + respDoc.data.data[0].profile.last_name + ' ' + respDoc.data.data[0].profile.title,
                  gender: respDoc.data.data[0].profile.gender,
                  city: respDoc.data.data[0].practices[0].visit_address.city,
                  state: respDoc.data.data[0].practices[0].visit_address.state_long,
                  address: respDoc.data.data[0].practices[0].visit_address.street + ' ' + respDoc.data.data[0].practices[0].visit_address.zip,
                  specialties: respDoc.data.data[0].specialties[0].name,
                  phone: respDoc.data.data[0].practices[0].phones[0].number,
                  bio: respDoc.data.data[1].profile.bio
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
        <DoctorsInfo provider={this.state.provider} gender={this.state.gender} city={this.state.city} state={this.state.state} address={this.state.address} specialties={this.state.specialties} phone={this.state.phone} bio={this.state.bio}/>
        </div>
    );
  }
};


export default Main;
