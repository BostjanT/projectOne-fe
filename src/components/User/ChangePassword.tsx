import React, { SyntheticEvent, useState } from 'react';
import { redirect } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ChangeButton,
  InputDiv,
  SetContainer,
  SubmitDiv,
} from '../../styles/profileSettings.styled';
import { Input, Label } from '../../styles/signup.styled';
import UpdateUser from '../UpdateUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confirm from './Confirm';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
        redirect('/me');
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SetContainer>
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
        Cancel
      </SubmitDiv>
    </SetContainer>
  );
};

export default ChangePassword;
