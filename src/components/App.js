/**
 * Created by joni on 30/11/16.
 */

import React from 'react';
import styles from './App.pcss';
import PersonList from './PersonList';
import personService from '../services/person';
import AddPersonForm from './AddPersonForm';
import Loading from './Loading';
import {List} from 'immutable';

class App extends React.PureComponent{

  constructor(props){
    super(props);

    this.state = {
      persons: List(),
    };

    this.deletePerson = this.deletePerson.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  componentDidMount(){
    personService.getPersons()
      .then(persons => {
        this.setState({
          persons: List(persons),
        });
      });
  }

  addPerson(person){
    this.setState({
      persons: this.state.persons.push(person),
    });
  }

  render () {
    const {persons} = this.state;

    if(persons.count() === 0){
      return (<Loading />);
    }
    else {
      return (
        <div className={styles.root}>
          <fieldset>
            <legend><b>Add new</b></legend>
            <AddPersonForm addPerson={this.addPerson}/>
          </fieldset>

          <PersonList deletePerson={this.deletePerson} persons={persons.filter(p => p.gender === 'm')} title="Male"/>
          <PersonList deletePerson={this.deletePerson} persons={persons.filter(p => p.gender === 'f')} title="Female"/>
        </div>
      );
    }
  }

  deletePerson(person) {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== person.id)
    })

  }





};

export default App;
