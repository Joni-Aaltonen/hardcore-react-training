/**
 * Created by joni on 01/12/16.
 */
import {connect} from "react-redux";
import PersonView from "../PersonView";


export default connect(
  (state, props) => ({
    person: state.person.get('persons').find(p => p.id == props.params.id),
  })
)(PersonView);

