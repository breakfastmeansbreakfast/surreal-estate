import React from 'react';
import './AddProperty.css';

class AddProperty extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
      },
    };
  }

handleAddProperty = event => {
  event.preventDefault();
  console.log(this.state.fields);
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
}

export default AddProperty;
