import { List, Map } from 'immutable';
import personService from '../services/person';

const defaultState = Map({
  persons: List(),
  visible: false,
});

export function addPerson(person){
  return {
    type: "PERSON_ADD",
    payload: person,
  }
}

export function deletePerson(person){
  return{
    type: "PERSON_DELETE",
    payload: person,
  }
}

export function getPersons(){
  return {
    type: "PERSON_GET_ALL",
    payload: personService.getPersons()
  }
}

export function showDialog(){
  return{
    type: "PERSON_DIALOG_VISIBILITY",
    payload: true,
  }
}

export function closeDialog(){
  return{
    type: "PERSON_DIALOG_VISIBILITY",
    payload: false,
  }
}

export default function (state = defaultState, action) {
  //flux-standard-action
  const { type, payload } = action;

  switch (type) {
    case 'PERSON_ADD':
      return state
        .update('persons', persons => persons.push(payload))
        .set('visible', false);
    case 'PERSON_DELETE':
      return state.update('persons', persons => persons.filterNot(p => p.id === payload.id));
    case 'PERSON_GET_ALL_FULFILLED':
      return state.set('persons', List(payload));
    case 'PERSON_DIALOG_VISIBILITY':
      return state.set('visible', payload);
    //case 'PERSON_GET_ALL_RESOLVED':
    //case 'PERSON_GET_ALL_PENDING':
    //case 'PERSON_GET_ALL_REJECTED':

    default:
      return state;
  }
}
