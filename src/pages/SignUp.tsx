import { SyntheticEvent, useState } from 'react';
import { Orange, Container } from '../styles/main.styled';

import {
  FormHeader,
  FormInput,
  FormInputDouble,
  HaveAccount,
  Input,
  Label,
  OrangeButton,
  OrangeTextBtn,
  Paragraph,
  SignContainer,
  SignForm,
  SignFormText,
  UserImage,
} from '../styles/signup.styled';
import Footer from '../components/Footer/Footer';
import BlankUser from '../images/BlankUser.svg';
import Navigation from '../components/Navbar/Navbar';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFistName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  let navigate = useNavigate();

  const signUp = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (password === rePassword) {
      await axios.post('auth/signup', {
        firstName,
        lastName,
        email,
        password,
        rePassword,
      });
      navigate('/login');
    } else {
      console.log('some error');
    }
  };
  return (
    <>
      <SignContainer>
        <Container>
          <Navigation />
          <SignForm style={{ marginTop: 100 }}>
            <SignFormText>
              <FormHeader>
                What is your <Orange>name?</Orange>
              </FormHeader>
              <Paragraph>
                Your name will appear on quotes and your public profile.
              </Paragraph>
            </SignFormText>
            <UserImage src={BlankUser} />
            <FormInput>
              <Label>Email</Label>
              <Input
                type={'email'}
                placeholder='example@net.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormInput>
            <FormInputDouble>
              <div style={{ maxWidth: 202 }}>
                <Label>First Name</Label>
                <Input
                  type={'text'}
                  placeholder='John'
                  onChange={(e) => setFistName(e.target.value)}
                />
              </div>
              <UserImage src={BlankUser} className='show' />
              <div style={{ maxWidth: 202 }}>
                <Label>Last Name</Label>
                <Input
                  type={'text'}
                  placeholder='Scott'
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </FormInputDouble>
            <FormInput>
              <Label>Password</Label>
              <Input
                type={'password'}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormInput>
            <FormInput>
              <Label>Confirm Password</Label>
              <Input
                type={'password'}
                placeholder='Confirm Password'
                onChange={(e) => setRePassword(e.target.value)}
              />
            </FormInput>
            <OrangeButton onClick={(e) => signUp(e)}>Sign Up</OrangeButton>
            <HaveAccount>
              <>Already have an account?</>
              <OrangeTextBtn onClick={() => navigate('/login')}>
                Log in
              </OrangeTextBtn>
            </HaveAccount>
          </SignForm>
        </Container>
      </SignContainer>
      <Footer />
    </>
  );
};

export default SignUp;
