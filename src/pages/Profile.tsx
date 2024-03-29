import { useEffect, useState } from 'react';
import { Navbar } from '../styles/main.styled';
import {
  Header,
  NavButtons,
  NavLinks,
  NavUserImage,
  ProfileDiv,
  QuoteContainer,
  QuoteCount,
  QuoteKarma,
  QuoteList,
  User,
  UserImg,
  UserName,
  QuoteLogo,
} from '../styles/profile.styled';
import QouteLogoWhite from '../images/QouteLogoWhite.png';
import UserImage from '../images/UserImage.png';

import { useNavigate } from 'react-router-dom';
import FooterDiv from '../components/Footer/Footer';
import axios from '../api/axios';

import Quote from '../components/Quote/Quote';

const Profile = () => {
  const loggedUser = localStorage.getItem('userData');
  const currentUser = loggedUser ? JSON.parse(loggedUser) : '';
  const [myQuote, setMyQuote] = useState<any[]>([]);
  const [myLikedQuote, setMyLikedQuote] = useState<any[]>([]);
  const userLogged = localStorage.getItem('userLogged');
  let navigate = useNavigate();

  const myQuotesList = async () => {
    const response = await axios.get('/quotes');
    const mydata = response.data;
    if (!currentUser.quote) return;
    const myQuotes = setMyQuote(
      mydata.quote.filter((quote: any) => quote.id === currentUser.quote.id)
    );
    return myQuotes;
  };

  useEffect(() => {
    myQuotesList();
  }, []);

  const mostLiked = myQuote.filter((quote) => quote.vote > 1);
  const likedQuote = myQuote.filter((quote) => quote.vote > 0);

  const mostRecent = myQuote.sort(
    (a, b) => b.quote.created_at - a.quote.created_at
  );

  const myVoteNumber = (vote: object[]): number => {
    let voteSum = 0;
    vote.forEach((vote: any) => (vote.vote === 1 ? voteSum++ : (voteSum += 0)));
    return voteSum;
  };

  const myLikedQuotes = async () => {
    if (!currentUser.vote) return;
    const response = await axios.get('/quotes');
    const mydata = response.data;
    let quoteLikedId: any[] = [];
    currentUser.vote
      .filter((vote: any) => vote.vote === 1)
      .forEach((vote: any) => quoteLikedId.push(vote.quoteId));
    const likedQuote = mydata.filter((quote: any) =>
      quoteLikedId.includes(quote.id)
    );
    setMyLikedQuote(likedQuote);
  };

  useEffect(() => {
    myLikedQuotes();
  }, []);

  return (
    <>
      <ProfileDiv>
        <Header>
          <Navbar>
            <QuoteLogo src={QouteLogoWhite} onClick={() => navigate('/')} />
            <NavButtons>
              {userLogged === 'true' ? (
                <>
                  <NavLinks onClick={() => navigate('/')}>Home</NavLinks>
                  <NavLinks>Settings</NavLinks>
                  <NavLinks>Logout</NavLinks>
                </>
              ) : (
                ''
              )}

              <NavUserImage
                className='user'
                onClick={() => navigate('/profile')}></NavUserImage>
              <NavUserImage
                className='addQuote'
                onClick={() => navigate('/createQuote')}
              />
            </NavButtons>
          </Navbar>
          {/* <Navigation /> */}
          <User>
            <UserImg src={UserImage} />
            <UserName>
              {currentUser.firstName + ' ' + currentUser.lastName}
            </UserName>
            <QuoteKarma>
              <QuoteCount>
                <div className='quote-txt'>Quotes</div>
                <div className='quote-num orange'>99</div>{' '}
              </QuoteCount>
              <QuoteCount>
                <div className='quote-txt'>Quotastic karma</div>
                <div className='quote-num'>99</div>
              </QuoteCount>
            </QuoteKarma>
          </User>
        </Header>
        <QuoteContainer>
          <QuoteList>
            <>
              <h5 className='quote-state'>Most liked quotes</h5>
              {mostLiked.map((quote) => {
                <Quote
                  key={quote.id}
                  id={quote.id}
                  vote={myVoteNumber(quote.votes)}
                  quote={quote.quote}
                  user={`${quote.user.first_name} ${quote.user.last_name}`}
                  userId={quote.user.id}
                />;
              })}
            </>
          </QuoteList>
          <QuoteList>
            <>
              <h5 className='quote-state'>Most recent</h5>
              {mostRecent.map((quote) => {
                <Quote
                  key={quote.id}
                  id={quote.id}
                  vote={myVoteNumber(quote.votes)}
                  quote={quote.quote}
                  user={`${quote.user.first_name} ${quote.user.last_name}`}
                  userId={quote.user.id}
                />;
              })}
            </>
          </QuoteList>
          <QuoteList>
            <>
              <h5 className='quote-state'>Liked</h5>
              {likedQuote.map((quote) => {
                <Quote
                  key={quote.id}
                  id={quote.id}
                  vote={myVoteNumber(quote.votes)}
                  quote={quote.quote}
                  user={`${quote.user.first_name} ${quote.user.last_name}`}
                  userId={quote.user.id}
                />;
              })}
            </>
          </QuoteList>
        </QuoteContainer>
      </ProfileDiv>
      <FooterDiv />
    </>
  );
};

export default Profile;
