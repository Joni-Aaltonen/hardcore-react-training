/**
 * Created by joni on 01/12/16.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import App from "./App";
import {getPersons, showDialog} from "../ducks/person";

export default connect(
  state => ({
    loading: state.generic.get('loading'),
  }),
  dispatch => bindActionCreators({
    getPersons,
    showDialog,
  }, dispatch)
)(App);

