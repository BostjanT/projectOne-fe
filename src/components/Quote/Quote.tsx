import React, { useEffect, useState } from 'react';
import {
  AuthorImg,
  AuthorName,
  QuoteAuthor,
  QuoteDiv,
  QuoteHolder,
  QuoteSettings,
  QuoteText,
  SettingsImg,
  VoteDownBtn,
  VoteHolder,
  Votes,
  VoteUpBtn,
} from './quote.styled';
import Author from '../../images/UserImage.png';
import Settings from '../../images/settings.png';
import Delete from '../../images/deleteX.png';
import { redirect } from 'react-router-dom';
import axios from '../../api/axios';
import UpdateUser from '../UpdateUser';

type QuoteProps = {
  id: string;
  vote: number;
  quote: string;
  user: string;
  userId: string;
};

const Quote = (props: QuoteProps) => {
  const { id, vote, quote, user, userId } = props;

  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);
  const [score, setScore] = useState(vote);

  const selectVote = async (type: string) => {
    try {
      if (type === 'upVote') {
        await axios.post(
          `/quotes/${id}/upvote`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        setUpVote(true);
        setDownVote(false);
        setScore(score + 1);
        UpdateUser();
      } else {
        await axios.post(
          `/quotes/${id}/downvote`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        setUpVote(false);
        setDownVote(true);
        setScore(vote - 1);
        UpdateUser();
      }
    } catch (error) {
      if (error) {
        redirect('/login');
      }
    }
  };

  const VotedQuotes = () => {
    const userData = localStorage.getItem('userData')
      ? localStorage.getItem('userData')
      : null;
    const userVoted = userData ? JSON.parse(userData).vote : [];
    if (!userVoted) return;
    userVoted.forEach((vote: any) => {
      if (vote.quoteId === id) {
        if (vote.vote === 1) {
          setUpVote(true);
          setDownVote(false);
        } else {
          setUpVote(false);
          setDownVote(true);
        }
      }
    });
  };

  useEffect(() => {
    VotedQuotes();
  }, []);

  return (
    <QuoteHolder>
      <VoteHolder>
        <VoteUpBtn
          className={upVote ? 'voteUp' : ''}
          onClick={() => selectVote('upVote')}></VoteUpBtn>
        <Votes>234</Votes>
        <VoteDownBtn
          className={downVote ? 'voteDown' : ''}
          onClick={() => selectVote('downVote')}></VoteDownBtn>
      </VoteHolder>
      <QuoteDiv>
        <QuoteText>{quote}</QuoteText>
        <QuoteAuthor>
          <AuthorImg src={Author} />
          <AuthorName>{user}</AuthorName>
        </QuoteAuthor>
      </QuoteDiv>
      <QuoteSettings>
        <SettingsImg src={Settings} className='bigger' />
        <SettingsImg src={Delete} />
      </QuoteSettings>
    </QuoteHolder>
  );
};

export default Quote;
