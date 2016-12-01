/**
 * Created by joni on 01/12/16.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../App';
import {getPersons, addPerson, deletePerson, showDialog, closeDialog} from '../../ducks/person';

export default connect(
  state => ({
    persons: state.person.get('persons'),
    visible: state.person.get('visible'),
    loading: state.generic.get('loading'),
  }),
  dispatch => bindActionCreators({
    getPersons,
    addPerson,
    deletePerson,
    showDialog,
    closeDialog,
  }, dispatch)
)(App);

