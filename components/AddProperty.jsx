import React from 'react';
import './AddProperty.css';
import Axios from 'axios';

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        price: 0,
        bedrooms: 0,
        bathrooms: 0,
        email: 'user@email.com',
      },
    };
  }


handleAddProperty = event => {
  event.preventDefault();
  Axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
};

handleChangeField = event => {
  this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });
};

render() {
  return (
    <div className="AddProperty">
      <h2>Add a new property!</h2>
      <form onSubmit={this.handleAddProperty}>
        <label className="title1" htmlFor="title">Title</label>
        <input id="title" name="title" value={this.state.fields.title} onChange={this.handleChangeField} /> <br />
        <label htmlFor="city">City</label>
        <select id="city" name="city" value={this.state.fields.city} onChange={this.handleChangeField}>
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>
        </select> <br />
        <label htmlFor="type">Dwelling type</label>
        <select id="type" name="type" value={this.state.fields.type} onChange={this.handleChangeField}>
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bungalow</option>
        </select> <br />
        <label htmlFor="bedrooms">Bedrooms</label>
        <input className="inputNumber" type="number" id="bedrooms" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleChangeField} />
        <label htmlFor="bathrooms">Bathrooms</label>
        <input className="inputNumber" type="number" id="bathrooms" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleChangeField} /> <br />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" value={this.state.fields.price} onChange={this.handleChangeField} /> <br /> <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={this.state.fields.email} onChange={this.handleChangeField} /> <br />
        <button className="inputSubmit" type="submit">Add</button>
      </form>
    </div>
  );
}
}

export default AddProperty;
