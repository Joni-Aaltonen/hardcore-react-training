/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import {compose} from "recompose";

const needsPerson = BaseComponent => props => {

  const {person, ...rest} = props;

  if(!person)
    return false;

  return (<BaseComponent {...rest} person={person} />);
}

const PersonView = props => {

    const {person, ...rest} = props;

    return (
      <div>
        <h2>PersonView</h2>
        <div>{person.firstName} {person.lastName}, {person.age}</div>
      </div>
    );
};

//wrapDisplayName
export default compose(
  needsPerson,
)(PersonView);

//export default needsPerson(PersonView);
