/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import styles from "./App.pcss";
import PersonList from "./PersonList";
import AddPersonDialog from "./AddPersonDialog";
import Loading from "./Loading";
import {List} from "immutable";
//material
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import {Grid, Row, Col} from 'react-flexbox-grid';

//grid

class App extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getPersons} = this.props;
    getPersons();
  }

  render() {

    const {loading, persons, visible, deletePerson, showDialog, addPerson, closeDialog} = this.props;

    if (loading) {
      return (<Loading />);
    }
    else {
      return (
        <div className={styles.root}>
          <AppBar
            title="Hello World App"
            showMenuIconButton={false}
            iconElementRight={<FlatButton onClick={() => showDialog()} label="Add new" />}
          />

          <AddPersonDialog visible={visible} closeDialog={closeDialog} addPerson={addPerson}/>


          <Grid>
            <Row>
              <Col xs={12} sm={6}>
                <PersonList deletePerson={deletePerson} persons={persons.filter(p => p.gender === 'm')} title="Male"/>
              </Col>
              <Col xs={12} sm={6}>
                <PersonList deletePerson={deletePerson} persons={persons.filter(p => p.gender === 'f')} title="Female"/>
              </Col>
            </Row>
          </Grid>

        </div>
      );
    }//else
  }//render

};

export default App;
