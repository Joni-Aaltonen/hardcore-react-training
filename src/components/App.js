/**
 * Created by joni on 30/11/16.
 */

import React from 'react';
import styles from './App.pcss';
import PersonList from './PersonList';
import personService from '../services/person';
import AddPersonDialog from './AddPersonDialog';
import Loading from './Loading';
import {List} from 'immutable';


//material
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

//grid
import {Grid, Row, Col} from 'react-flexbox-grid/lib';

class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      persons: List(),
      visible: false,
    };

    this.deletePerson = this.deletePerson.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  componentDidMount() {
    personService.getPersons()
      .then(persons => {
        this.setState({
          persons: List(persons),
          visible: this.state.visible,
        });
      });
  }

  showDialog(){
    this.setState({
      ...this.state,
      visible: true,
    });
  }

  closeDialog(){
    this.setState({
      ...this.state,
      visible: false,
    })
  }

  addPerson(person) {
    this.setState({
      persons: this.state.persons.push(person),
      visible: false,
    });
  }


  render() {

    const {persons, visible} = this.state;

    if (persons.count() === 0) {
      return (<Loading />);
    }
    else {
      return (
        <div className={styles.root}>
          <AppBar
            title="Hello World App"
            showMenuIconButton={false}
            iconElementRight={<FlatButton onClick={() => this.showDialog()} label="Add new" />}
          />

          <AddPersonDialog visible={visible} closeDialog={this.closeDialog} addPerson={this.addPerson}/>


          <PersonList deletePerson={this.deletePerson} persons={persons.filter(p => p.gender === 'm')} title="Male"/>
          <PersonList deletePerson={this.deletePerson} persons={persons.filter(p => p.gender === 'f')} title="Female"/>

        </div>
      );
    }//else
  }//render

  deletePerson(person) {
    this.setState({
      persons: this.state.persons.filter(p => p.id !== person.id),
      visible: false,
    })

  }
};

export default App;
