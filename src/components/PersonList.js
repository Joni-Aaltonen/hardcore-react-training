/**
 * Created by joni on 30/11/16.
 */

import React from 'react';
import Person from './Person';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {pure} from 'recompose';
import styles from './PersonList.pcss';

//material-ui
import {Card, CardTitle} from 'material-ui/Card';
import {List as UIList} from 'material-ui/List';

const PersonList = props =>{
  const {persons, title, ...rest} = props;

  if(persons.count() < 1) return false;

  const avgAge = persons.reduce((r, p) => r + p.age, 0) / persons.count();

  return(
    <Card className={styles.card}>
      <CardTitle title={title} subtitle={"Average age: " + avgAge.toFixed(2)}/>
      <UIList>
        {persons.map(person => <Person key={person.id} {...rest} person={person} />)}
      </UIList>
    </Card>
  );
};

PersonList.propTypes = {
  persons: ImmutablePropTypes.list.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default pure(PersonList);
