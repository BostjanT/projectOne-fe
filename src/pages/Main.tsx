import React, { useEffect, useState } from 'react';
import QuoteMain from '../images/QuotesMain.png';
import UpvotedImg from '../images/UpvotedImg.png';
import {
  Container,
  Header1,
  LeftBox,
  QuoteImg,
  Welcome,
  Orange,
  Text,
  OrangeButton,
  Header4,
  Paragraph,
  UpvotedQuotes,
  Full,
  WhiteButtonLarge,
  Header2,
  Title,
  ShowQuote,
  QuoteContainer,
} from '../styles/main.styled';
import FooterDiv from '../components/Footer/Footer';
import Navigation from '../components/Navbar/Navbar';
import { redirect } from 'react-router-dom';
import axios from '../api/axios';
import Quote from '../components/Quote/Quote';
const Main = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [votedQuotes, setVotedQuotes] = useState<any[]>([]);
  const userLogged = localStorage.getItem('userLogged');

  const getQuotes = async () => {
    const quoteResponse = await axios.get('/quotes');
    setQuotes(quoteResponse.data);

    const orderedQuotes = await axios.get('/quotes');
    orderedQuotes.data.forEach(
      (quote: any) => (quote.vote = sumVotes(quote.vote))
    );
    orderedQuotes.data.sort((a: any, b: any) => b.vote - a.vote);
    orderedQuotes.data.length = 6;
    setVotedQuotes(orderedQuotes.data);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const sumVotes = (vote: object[]): number => {
    if (vote.length > 0) {
      let sum = 0;
      vote.forEach((vote: any) => (vote.vote === 1 ? sum++ : (sum += 0)));
      return sum;
    } else {
      return 0;
    }
  };

  const randomQuote = () => {
    try {
      return quotes[Math.floor(Math.random() * quotes.length)];
    } catch (error) {
      return error;
    }
  };
  const showRandomQuote = randomQuote();
  return (
    <Full>
      <Container>
        <Navigation />

        <Welcome>
          {userLogged === 'true' ? (
            <>
              <Title>Quote of the day</Title>
              <Text style={{ fontSize: '16px', lineHeight: '19px' }}>
                Quote of the day is randomly choosen quote.
              </Text>
              {showRandomQuote ? (
                <Quote
                  key={showRandomQuote.id}
                  id={showRandomQuote.id}
                  vote={sumVotes(showRandomQuote.vote)}
                  user={`${showRandomQuote.user.firstName} ${showRandomQuote.user.lastName}`}
                  userId={showRandomQuote.user.id}
                  quote={showRandomQuote.quote}
                />
              ) : (
                <Quote
                  id={'randomId'}
                  vote={155}
                  quote={
                    'Coding is like dark humor. When you have to explain it, its bad.'
                  }
                  user={'John Wick'}
                  userId={'123user456'}
                />
              )}
            </>
          ) : (
            <>
              <LeftBox>
                <Header1>
                  Welcome <br></br> to <Orange>Quotastic</Orange>
                </Header1>
                <Text>
                  Quotastic is free online platform for you to explore the
                  quips, quotes, and proverbs. Sign up and express yourself.
                </Text>
                <OrangeButton onClick={() => redirect('/signup')}>
                  Sign Up
                </OrangeButton>
              </LeftBox>
              <QuoteImg src={QuoteMain} />
            </>
          )}
        </Welcome>
        {userLogged === 'true' ? (
          <></>
        ) : (
          <Header2>
            Explore the world of <br></br>
            <Orange>fantastic quotes</Orange>
          </Header2>
        )}
        <Header4>Most upvoted quotes</Header4>
        {userLogged === 'true' ? (
          <Paragraph>
            Most upvoted quotes on the platform. Give a like to the ones you
            like to
            <br />
            keep them saved in your profile.
          </Paragraph>
        ) : (
          <Paragraph>
            Most upvoted quotes on the platform. Sign up or login to like the
            quotes and keep them saved in your profile
          </Paragraph>
        )}
        <QuoteContainer>
          <ShowQuote>
            {votedQuotes.map((quote) => {
              return (
                <Quote
                  key={quote.id}
                  id={quote.id}
                  vote={sumVotes(quote.vote)}
                  user={`${quote.user.firstName} ${quote.user.lastName}`}
                  userId={quote.user.id}
                  quote={quote.quote}
                />
              );
            })}
          </ShowQuote>
        </QuoteContainer>
        {userLogged === 'true' ? (
          <QuoteContainer>
            <ShowQuote>
              {votedQuotes.map((quote) => {
                return (
                  <Quote
                    key={quote.id}
                    id={quote.id}
                    vote={sumVotes(quote.vote)}
                    user={`${quote.user.firstName} ${quote.user.lastName}`}
                    userId={quote.user.id}
                    quote={quote.quote}
                  />
                );
              })}
            </ShowQuote>
          </QuoteContainer>
        ) : null}
        <WhiteButtonLarge
          style={{ marginBottom: '102px' }}
          onClick={() => redirect('/signup')}>
          Sign up to see more
        </WhiteButtonLarge>
      </Container>
      <FooterDiv />
    </Full>
  );
};

export default Main;
