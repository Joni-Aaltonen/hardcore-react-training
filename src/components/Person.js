/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import {pure} from "recompose";
import {browserHistory} from "react-router";
//material
import {ListItem} from "material-ui/List";
import ActionDelete from "material-ui/svg-icons/action/delete";
import IconMale from "material-ui/svg-icons/action/accessibility";
import IconFemale from "material-ui/svg-icons/action/pregnant-woman";
import {purple300 as red, blue300 as blue, red300 as deleteColor} from "material-ui/styles/colors";

const Person = (props) => {
  const {person, deletePerson} = props;

  const icon = person.gender === 'm' ? <IconMale color={blue} /> : <IconFemale color={red} />;


//<Link to={/person/${person.id}}>link</Link>
  return(
    <ListItem
      primaryText={`${person.firstName} ${person.lastName}, ${person.age} years`}
      leftIcon={icon}
      onClick={() => browserHistory.push(`/person/${person.id}`)}
      rightIcon={<ActionDelete color={deleteColor} onClick={e => deletePerson(person)} />}
    />
  );

};

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
  deletePerson: React.PropTypes.func.isRequired,
};

export default pure(Person);
