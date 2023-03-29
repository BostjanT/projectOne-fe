import React, { SyntheticEvent, useState } from 'react';
import {
  CancelBtn,
  ChangeButton,
  DoubleInput,
  InputDiv,
  SetContainer,
  SetHeader,
  SetParagraph,
  SetSpan,
  SubmitDiv,
} from '../styles/profileSettings.styled';
import { Input, Label } from '../styles/signup.styled';
import axios from '../api/axios';
import UpdateUser from '../components/UpdateUser';
import { redirect } from 'react-router-dom';

const ProfileSettings = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const changeUserInfo = async (e: SyntheticEvent) => {
    try {
      await axios.patch(
        '/me',
        { email, firstName, lastName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      await UpdateUser();
      redirect('/me');
    } catch (error) {}
  };
  return (
    <SetContainer>
      <SetHeader>
        Profile <SetSpan>settings</SetSpan>
        <SetParagraph>Change your profile settings</SetParagraph>
      </SetHeader>
      <InputDiv>
        <Label style={{ margin: 0 }}>Mail</Label>
        <Input
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='example@net.com'
        />
      </InputDiv>
      <DoubleInput>
        <InputDiv>
          <Label style={{ margin: 0 }}>First Name</Label>
          <Input
            type={'text'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='John'
          />
        </InputDiv>
        <InputDiv>
          <Label style={{ margin: 0 }}>Last Name</Label>
          <Input
            type={'text'}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Scott'
          />
        </InputDiv>
      </DoubleInput>
      <DoubleInput>
        <ChangeButton onClick={() => redirect('')}>
          Change password
        </ChangeButton>
        <ChangeButton className='darkOrange'>
          Change profile picture
        </ChangeButton>
      </DoubleInput>
      <SubmitDiv>
        <ChangeButton
          style={{ width: '120px' }}
          className='darkOrange'
          onClick={(e) => changeUserInfo(e)}>
          Submit
        </ChangeButton>
        <CancelBtn onClick={() => redirect('/me')}>Cancel</CancelBtn>
      </SubmitDiv>
    </SetContainer>
  );
};

export default ProfileSettings;
