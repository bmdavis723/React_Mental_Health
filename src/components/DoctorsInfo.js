import React from 'react';

class DoctorsInfo extends React.Component {
  render () {
    return (
      <div>
      <p>Provider: {this.props.provider}</p>
      <p>Gender: {this.props.gender}</p>
      <p>City: {this.props.city}</p>
      <p>State: {this.props.state}</p>
      <p>Address: {this.props.address}</p>
      <p>Specialty: {this.props.specialties}</p>
      <p>Phone: {this.props.phone}</p>
      <p>Bio: {this.props.bio}</p>
      </div>
    )
  }
}

export default DoctorsInfo;
