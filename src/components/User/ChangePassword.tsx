import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import {
  CancelBtn,
  ChangeButton,
  InputDiv,
  SetContainer,
  SetHeader,
  SetParagraph,
  SetSpan,
  SubmitDiv,
} from '../../styles/profileSettings.styled';
import { Input, Label } from '../../styles/signup.styled';
import UpdateUser from '../UpdateUser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confirm from './Confirm';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let navigate = useNavigate();

  const userData: any = localStorage.getItem('userData');
  const success = () => {
    const displayPage = () => {
      toast(<Confirm />);
    };
  };
  const changePassword = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (password === userData.password && newPassword === confirmPassword) {
        await axios.patch(
          '/me/update-password',
          { confirmPassword },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        await UpdateUser();
        success();
        navigate('/profile');
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SetContainer>
      <SetHeader>
        Profile <SetSpan>settings</SetSpan>
        <SetParagraph>Change your password</SetParagraph>
      </SetHeader>
      <InputDiv>
        <Label>Confirm password</Label>
        <Input
          type={'password'}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <Label>New password</Label>
        <Input
          type={'password'}
          placeholder='Password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </InputDiv>
      <InputDiv>
        <Label>Confirm new password</Label>
        <Input
          type={'password'}
          placeholder='Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputDiv>
      <SubmitDiv>
        <ChangeButton className='darkOrange' onClick={(e) => changePassword(e)}>
          Submit
        </ChangeButton>
        <CancelBtn onClick={() => navigate('/profile')}>Cancel</CancelBtn>
      </SubmitDiv>
    </SetContainer>
  );
};

export default ChangePassword;
