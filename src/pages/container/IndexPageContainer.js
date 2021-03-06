import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import { provideHooks } from 'redial';
import { getPersons } from '../../ducks/person';
import { compose } from 'recompose';

export default compose(
  connect(
    state => ({
      persons: state.person.get('persons'),
    }),
  ),
  provideHooks({
    fetch: ({ dispatch }) => dispatch(getPersons()),
  })
)(Wrapped);
