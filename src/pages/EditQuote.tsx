import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import UpdateUser from '../components/UpdateUser';
import {
  CenterDiv,
  QuoteContainer,
  QuoteHeader,
  QuoteArea,
  QuoteButtons,
  ConfirmBtn,
  CancelBtn,
} from '../styles/addQuote.styled';
import { Orange } from '../styles/main.styled';

const EditQuote = (id: number) => {
  const [myQuote, setMyQuote] = useState('');
  const [quote, setQuote] = useState<any[]>([]);
  const currentUser = localStorage.getItem('userData');
  const usersInfo = currentUser ? JSON.parse(currentUser) : '';

  let navigate = useNavigate();

  const myQuoteText = async () => {
    const response = await axios.get(`/quotes/${id}`);
    if (!usersInfo.quote) return;

    const myQuote = setQuote(response.data.quote);
    return myQuote;
  };

  useEffect(() => {
    myQuoteText();
  }, []);

  const myQuoteList = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      if (myQuote) {
        await axios.patch(
          `/me/myquote/${id}`,
          { myQuote },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
      }
      await UpdateUser();
      navigate('/me');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CenterDiv>
      <QuoteContainer>
        <QuoteHeader>
          Edit your <Orange>quote.</Orange>
        </QuoteHeader>

        <QuoteArea
          placeholder={'Some text for now'}
          value={myQuote}
          onChange={(e) => setMyQuote(e.target.value)}>
          {quote}
        </QuoteArea>
        <QuoteButtons>
          <ConfirmBtn onClick={(e) => myQuoteList(e)}>Submit</ConfirmBtn>
          <CancelBtn onClick={() => navigate('/profile')}>Cancel</CancelBtn>
        </QuoteButtons>
      </QuoteContainer>
    </CenterDiv>
  );
};

export default EditQuote;
