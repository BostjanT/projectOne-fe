import React, { SyntheticEvent, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import axios from '../api/axios';
import UpdateUser from '../components/UpdateUser';
import {
  CancelBtn,
  CenterDiv,
  ConfirmBtn,
  QuoteArea,
  QuoteButtons,
  QuoteContainer,
  QuoteHeader,
  QuotePara,
} from '../styles/addQuote.styled';
import { Orange } from '../styles/main.styled';

const CreateQuote = () => {
  const [quote, setQuote] = useState('');
  const userData: any = localStorage.getItem('userData');
  const checkUserData = () => {
    JSON.parse(userData).quote
      ? setQuote(JSON.parse(userData).quote.quote)
      : setQuote('');
  };

  useEffect(() => {
    checkUserData();
    UpdateUser();
  }, []);

  const createQuote = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        '/me/myquote',
        { quote },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      await UpdateUser();
    } catch (error) {
      if (error === 401) redirect('/login');
    }
  };
  return (
    <CenterDiv>
      <QuoteContainer>
        <QuoteHeader>
          Are you feeling <Orange>inspired</Orange>
        </QuoteHeader>
        <QuotePara>
          You can post quotes. You can delete them on your profile.
        </QuotePara>
        <QuoteArea placeholder={'Please enter your quote here...'}></QuoteArea>
        <QuoteButtons>
          <ConfirmBtn
            onClick={(e) => {
              createQuote(e);
            }}>
            Submit
          </ConfirmBtn>
          <CancelBtn onClick={() => redirect('/me')}>Cancel</CancelBtn>
        </QuoteButtons>
      </QuoteContainer>
    </CenterDiv>
  );
};

export default CreateQuote;
