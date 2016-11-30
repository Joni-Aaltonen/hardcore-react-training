/**
 * Created by joni on 30/11/16.
 */

import React from 'react';
import Person from './Person';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {pure} from 'recompose';

const PersonList = props =>{
  const {persons, title, ...rest} = props;

  if(persons.count() < 1) return false;

  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return (
    <div>
      <h2>{title}</h2>
      <p>Average age: {avgAge.toFixed(2)}</p>
      {persons.map(person => <Person key={person.id}
                                      {...rest}
                                      person={person} />)}
    </div>
  );

};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default pure(PersonList);
