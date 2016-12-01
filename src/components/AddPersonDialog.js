/**
 * Created by joni on 30/11/16.
 */
import React from "react";
import {Dialog, FlatButton, RadioButton} from "material-ui";
import {TextField, DatePicker, RadioButtonGroup} from "redux-form-material-ui";
import {Field, reduxForm} from "redux-form";
import IconMale from 'material-ui/svg-icons/action/accessibility';
import IconFemale from 'material-ui/svg-icons/action/pregnant-woman';
import {blue300 as maleChecked, purple300 as femaleChecked, grey300 as unchecked} from 'material-ui/styles/colors';
import {Grid, Row, Col} from 'react-flexbox-grid';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'dateOfBirth', 'gender' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'This field is required'
    }
  })
  if (values.firstName && values.firstName.length  <= 3) {
    errors.firstName = 'Your name can\'t be that short??'
  }
  if (values.lastName && values.lastName.length <= 3) {
    errors.lastName = 'Your name can\'t be that short?'
  }
  if(values.gender === ''){
    errors.gender = 'You need to select a gender';
  }
  if(values.dateOfBirth === '')
    errors.dateOfBirth = "You need to select your date of birth";

  return errors
}

class AddPersonDialog extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={() => {
          reset();
          this.props.closeDialog();
        }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={handleSubmit}
        disabled={pristine || submitting}
      />,
    ];

    return(
      <div>
        <Dialog
          title="Add person"
          actions={actions}
          modal={false}
          open={this.props.visible}
          onRequestClose={this.handleClose}
        >
          <form onSubmit={handleSubmit}>
            <Grid fluid>
              <Row>
                <Col xs={12} sm={6}>
                  <Field name="firstName" component={TextField} type="text"
                    hintText="Minimum of three characters"
                    floatingLabelText="First name"
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Field name="lastName" component={TextField} type="text"
                         hintText="Minimum of three characters"
                         floatingLabelText="Last name"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <Field name="dateOfBirth"
                         component={DatePicker}
                         format={(value, name) => value === '' ? null : value}
                         hintText="Date of birth"
                         floatingLabelText="Date of birth"
                         mode="landscape" />
                </Col>
                <Col xs={12} sm={6}>
                  <Field name="gender" component={RadioButtonGroup}
                  >
                    <RadioButton
                      value="m"
                      label="Male"
                      name="gender"
                      checkedIcon={<IconMale color={maleChecked}/>}
                      uncheckedIcon={<IconMale color={unchecked}/>}
                    />

                    <RadioButton
                      value="f"
                      label="Female"
                      name="gender"
                      checkedIcon={<IconFemale color={femaleChecked}/>}
                      uncheckedIcon={<IconFemale color={unchecked}/>}
                    />
                  </Field>
                </Col>
              </Row>
            </Grid>
          </form>
        </Dialog>
      </div>
    );

  }
}

AddPersonDialog = reduxForm({
  form: 'addPersonForm',
  initialValues: {
    gender: 'm'
  },
  validate,
})(AddPersonDialog);

export default AddPersonDialog;
