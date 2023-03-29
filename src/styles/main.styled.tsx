import styled from 'styled-components';

export const Full = styled.div`
  min-height: 100vh;

  @media screen and (max-width: 1024px) {
    padding: 8px 8px 18px;
  }
`;

export const Container = styled.div`
  padding: 0 70px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding: 8px 8px 18px;
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px;

  @media screen and (max-width: 1024px) {
    /* display: none; */
    padding: 30px 35px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 145px;
  margin: 160px 70px 180px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    margin: 55px 43px 0px;
  }
`;

export const LeftBox = styled.div`
  align-items: flex-start;
  max-width: 530px;

  @media screen and (max-width: 1024px) {
    max-width: 344px;
  }
`;

export const Header1 = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 98px;
  line-height: 90px;
  letter-spacing: -1.5px;
  color: #000;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 35px;
    line-height: 41px;
  }
`;

export const Header2 = styled.h2`
  font-weight: 300;
  font-size: 61px;
  line-height: 72px;
  text-align: center;
  letter-spacing: -0.5px;
  margin-bottom: 128px;

  color: #000000;

  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    letter-spacing: 0.25px;
    margin: 58px 78px;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 32px;
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.25px;
  color: #de8667;
`;

export const QuoteImg = styled.img`
  align-items: flex-end;
  width: 420px;

  @media screen and (max-width: 1024px) {
    align-items: center;
    width: 100%;
    margin: 0 auto;
  }
`;

export const UpvotedQuotes = styled.img`
  margin-top: 51px;
  margin-bottom: 33px;
`;

export const QuoteContainer = styled.div`
  margin: 51px 0 33px;
`;

export const ShowQuote = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-height: 507px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const OrangeButton = styled.button`
  width: 137px;
  height: 40px;
  background: #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  padding: 8px 16px;
  margin-right: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  flex-grow: 1;

  &:hover {
    color: #de8667;
    background: #ffffff;
    border: solid 2px #de8667;
  }
`;

export const WhiteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;

  width: 137px;
  height: 40px;
  background: #ffffff;

  border: 2px solid #efb467;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  flex-grow: 0;

  &:hover {
    color: #ffffff;
    background: #efb467;
  }
`;

export const WhiteButtonLarge = styled.button`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin: 0 auto;
  gap: 10px;
  width: 184px;
  height: 40px;

  background: #ffffff;
  border: 2px solid #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;

  &:hover {
    color: #ffffff;
    background: #efb467;
  }
`;

export const Orange = styled.span`
  color: #de8667;
`;

export const Header4 = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.25px;
  text-align: center;
  color: #de8667;
  margin-bottom: 8px;

  @media screen and(max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  max-width: 534px;
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;

  @media screen and(max-width: 1024px) {
    max-width: 274px;
  }
`;
