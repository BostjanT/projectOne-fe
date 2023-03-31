import styled from 'styled-components';
import UserImage from '../images/UserImage.png';
import AddQuote from '../images/addQuoteIcon.svg';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 90px);
`;

export const Header = styled.div`
  height: 415px;
  background-color: #de8667;
  margin: 0 auto;
  width: 100%;
`;

export const NavButtons = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  order: 1;
  flex-grow: 0;

  @media screen and (max-width: 900px) {
    order: 0;
  }
`;

export const NavLinks = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  margin-right: 24px;
  cursor: pointer;

  &:hover {
    scale: calc(1.1);
    transition: ease-in-out 0.3s;
  }
`;

export const NavUserImage = styled.button`
  border: none;
  outline: unset;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 60px;
  margin-right: 10px;
  width: 41px;
  height: 40px;
  cursor: pointer;
  opacity: 0.25;

  &.user {
    background-image: url(${UserImage});
  }
  &.addQuote {
    background-image: url(${AddQuote});
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserImg = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  margin-top: 100px;
`;

export const UserName = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #ffffff;
  margin-top: 2px;
`;

export const QuoteKarma = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 32px;
  margin-top: 41px;
  gap: 32px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const QuoteCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 4px;
  height: 51px;

  & div.quote-txt {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #322d38;
  }
  & div.quote-num {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
  & div.orange {
    color: #de8667;
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 82px 70px 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const QuoteList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 19px;

  & h5.quote-state {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-left: 20px;
  }
`;

export const QuoteLogo = styled.img`
  width: 116px;
  height: 28px;
  padding: 1px 8px;
  gap: 10px;
  order: 0;

  @media screen and (max-width: 1024px) {
    order: 1;
    transition: all ease-in-out 0.4s;
  }
`;
