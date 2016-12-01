/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import PersonList from "../PersonList";
import AddPersonDialog from "../AddPersonDialog";
//material
import {Grid, Row, Col} from "react-flexbox-grid";

//grid

class IndexView extends React.PureComponent {

  render() {

    const {persons, visible, deletePerson, showDialog, addPerson, closeDialog} = this.props;

    return (
      <div>
        <p>&nbsp;</p>
        <AddPersonDialog visible={visible} closeDialog={closeDialog} addPerson={addPerson}/>
        <Grid fluid>
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

  }//render

};

export default IndexView;
