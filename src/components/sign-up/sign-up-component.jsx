import React from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

import { SignUpContainer, SignUpTitle } from './sign-up-styles';

import { signUpStart } from '../../redux/user/user-actions';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    const alert = this.props.alert;

    if (password !== confirmPassword) {
      alert.error(`Password don't match`);
      return;
    }

    signUpStart({ email, password, displayName });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: credentials => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(withAlert()(SignUp));
