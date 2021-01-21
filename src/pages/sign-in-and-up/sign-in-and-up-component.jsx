import React from 'react';

import SignIn from '../../components/sign-in/sign-in-component';
import SignUp from '../../components/sign-up/sign-up-component';

import { SignInAndSignUpContainer } from './sign-in-and-up-styles';

const SignInAndUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndUpPage;
