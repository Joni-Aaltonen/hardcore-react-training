/**
 * Created by joni on 30/11/16.
 */
import faker from 'faker';
import uuid from 'node-uuid';
import random from '../utils/random';
import axios from 'axios';

export default {
  generatePerson: function() {
    return {
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: random.pick(['m', 'f']),
      age: random.integer(10, 100),
    };
  },

  getPersons: () => {
    return axios
      .get('/person')
      .then(ret => ret.data)
      .catch(e => {
        console.log(e);
        throw e;
      });
  }


};
