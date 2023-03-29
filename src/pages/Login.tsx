import React, { SyntheticEvent, useState } from 'react';
import { Orange } from '../styles/main.styled';
import {
  FormHeader,
  FormInput,
  HaveAccount,
  Input,
  Label,
  OrangeTextBtn,
  Paragraph,
  SignContainer,
  SignForm,
  SignFormText,
} from '../styles/signup.styled';

import { WhiteButton } from '../styles/login.styled';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navbar/Navbar';
import axios from '../api/axios';
import { redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      let accessToken = response.data.accessToken;
      let userLogged = 'true';
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userLogged', userLogged);
      const userResponse = await axios.get('/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      localStorage.setItem('userData', JSON.stringify(userResponse.data));
      redirect('/profile');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SignContainer>
        <Navigation />
        <SignForm style={{ marginTop: 100 }}>
          <SignFormText style={{ marginBottom: 16 }}>
            <FormHeader>
              Welcome<Orange> back</Orange>
            </FormHeader>
            <Paragraph>
              Thank you for coming back. Hope you have a good day and inspire
              others.
            </Paragraph>
          </SignFormText>

          <FormInput>
            <Label>Email</Label>
            <Input
              type={'email'}
              placeholder='example@net.com'
              onChange={(e) => setEmail(e.target.value)}></Input>
          </FormInput>

          <FormInput>
            <Label>Password</Label>
            <Input
              type={'password'}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}></Input>
          </FormInput>
          <WhiteButton onClick={(e) => loginUser(e)}>Login</WhiteButton>
          <HaveAccount>
            <>Dont have account?</>
            <OrangeTextBtn>Sign up</OrangeTextBtn>
          </HaveAccount>
        </SignForm>
      </SignContainer>
      <Footer />
    </>
  );
};

export default Login;
