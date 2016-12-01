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

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, data){
    e.preventDefault();
    console.log(e);
    console.log(data);
    console.log(data, 'form data');
  }

  render() {

    const {persons, visible, deletePerson, showDialog, addPerson, closeDialog} = this.props;

    return (
      <div>
        <AddPersonDialog visible={visible} handleSubmit={this.handleSubmit} closeDialog={closeDialog} addPerson={addPerson}/>
        <p>&nbsp;</p>
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
