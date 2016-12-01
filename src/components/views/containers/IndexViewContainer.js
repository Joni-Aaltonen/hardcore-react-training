/**
 * Created by joni on 01/12/16.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IndexView from "../IndexView";
import {addPerson, deletePerson, showDialog, closeDialog} from "../../../ducks/person";

export default connect(
  state => ({
    persons: state.person.get('persons'),
    visible: state.person.get('visible'),
  }),
  dispatch => bindActionCreators({
    addPerson,
    deletePerson,
    showDialog,
    closeDialog,
  }, dispatch)
)(IndexView);

