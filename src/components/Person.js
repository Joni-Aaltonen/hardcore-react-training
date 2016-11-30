/**
 * Created by joni on 30/11/16.
 */
import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import Button from './Button';
import {pure} from 'recompose';

const Person = props => {
  const {person, deletePerson} = props;
  const gender = person.gender === 'm' ? "Male" : "Female";

  const genderClasses = cx(
    styles.gender,
    {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    }
  );

  return (
    <div className={styles.root}>
      {person.firstName} {person.lastName}&nbsp;
      <small className={genderClasses}>{gender}</small>
      &nbsp;&nbsp;<Button className={styles.btn} onClick={e => deletePerson(person)}>remove</Button>
    </div>
  );

};

Person.propTypes = {
  person: React.PropTypes.object.isRequired,
  deletePerson: React.PropTypes.func.isRequired,
};

export default pure(Person);
