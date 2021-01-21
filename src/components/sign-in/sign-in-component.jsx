import React from 'react';
import { withAlert } from 'react-alert';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in-styles';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    const alert = this.props.alert;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (e) {
      e.code === 'auth/user-not-found'
        ? alert.error('Invalid Email')
        : alert.error('Invalid Password');
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <ButtonsBarContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default withAlert()(SignIn);
