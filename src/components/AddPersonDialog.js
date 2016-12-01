/**
 * Created by joni on 30/11/16.
 */
import React from 'react';
import {RadioButton, RadioButtonGroup, DatePicker, TextField, FlatButton, Dialog} from 'material-ui';
import personService from '../services/person';
import IconMale from 'material-ui/svg-icons/action/accessibility';
import IconFemale from 'material-ui/svg-icons/action/pregnant-woman';
import styles from './AddPersonDialog.pcss';
import {purple300 as femaleChecked, blue300 as maleChecked, grey300 as unchecked} from 'material-ui/styles/colors';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class AddPersonDialog extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  isValid() {
    return this.state.firstName.length >= 3 && this.state.lastName.length >= 3 && this.state.gender !== '' && this.state.age !== '';
  }

  handleSubmit(e){
    e.preventDefault();

    const {addPerson} = this.props;

    const newPerson = {
      ...personService.generatePerson(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      age: this.state.age,
    };

    this.setState({
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
    });

    addPerson(newPerson);
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    }
  }

  handleRadioChange(event, val){
    this.setState({
      ...this.state,
      gender: val,
    });
  }

  handleAgeChange(e, date){
    this.setState({
      ...this.state,
      age: Math.abs(new Date((Date.now() - date)).getUTCFullYear() - 1970) //http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
    });
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!this.isValid()}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Add person"
          actions={actions}
          modal={false}
          open={this.props.visible}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Minimum of three characters"
            floatingLabelText="First name"
            onChange={this.handleChange('firstName')}
            type="text"
            name="firstName"
            value={this.state.firstName} />


          <TextField
            hintText="Minimum of three characters"
            floatingLabelText="Last name"
            onChange={this.handleChange('lastName')}
            type="text"
            name="lastName"
            value={this.state.lastName} />

          <DatePicker hintText="Date of birth" mode="landscape" onChange={this.handleAgeChange.bind(this)} />
        <br /><br />
          <RadioButtonGroup name="gender" onChange={this.handleRadioChange.bind(this)}>
            <RadioButton
              value="m"
              label="Male"
              name="gender"
              checkedIcon={<IconMale color={maleChecked} />}
              uncheckedIcon={<IconMale color={unchecked} />}
              style={styles.radioButton}
            />

            <RadioButton
              value="f"
              label="Female"
              name="gender"
              checkedIcon={<IconFemale color={femaleChecked} />}
              uncheckedIcon={<IconFemale color={unchecked} />}
              style={styles.radioButton}
            />
          </RadioButtonGroup>

        </Dialog>
      </div>
    );
  }
}
