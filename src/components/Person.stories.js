/**
 * Created by joni on 30/11/16.
 */

import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Person from './Person';
import personService from '../services/person';

storiesOf('Person', module)
  .add('Random Person', () => (
    <Person person={personService.generatePerson()} />
  ))
  .add('Male Person', () => {
      let person = personService.generatePerson();
      person.gender = 'm';

      return (<Person person={person}/>);
    }
  )
  .add('Female Person', () => {
      let person = personService.generatePerson();
      person.gender = 'f';

      return (<Person person={person}/>);
    }
  );
