import { List, Map } from 'immutable';
import personService from '../services/person';

const defaultState = Map({
  loading: 0
});

export default function (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'PERSON_GET_ALL_FULFILLED':
    case 'PERSON_GET_ALL_REJECTED':
      return state.update('loading', l => l - 1);
    case 'PERSON_GET_ALL_PENDING':
      return state.update('loading', l => l + 1);
    default:
      return state;
  }
}
