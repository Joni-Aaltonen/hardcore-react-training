/**
 * Created by joni on 30/11/16.
 */
import React from 'react';
import personService from '../services/person';
import Button from './Button';

class AddPersonForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValid() {
    return this.state.firstName.length > 3 && this.state.lastName.length > 3;
  }

  handleSubmit(e) {
    e.preventDefault();

    const {addPerson} = this.props;


    const newPerson = {
      ...personService.generatePerson(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    this.setState({
      firstName: '',
      lastName: '',
    });

    addPerson(newPerson);
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    }
  }

  render() {
    if(this.props.visible === false) return false;

    return (
      <form onSubmit={this.handleSubmit}>
        <div><label>First</label>&nbsp;<input onChange={this.handleChange('firstName')} type="text" name="firstName" value={this.state.firstName} /></div>
        <div><label>Last</label>&nbsp;<input onChange={this.handleChange('lastName')} type="text" name="lastName"  value={this.state.lastName} /></div>
        <Button disabled={!this.isValid()} onClick={this.handleSubmit}>Add</Button>
      </form>
    );
  }

}

export default AddPersonForm;
