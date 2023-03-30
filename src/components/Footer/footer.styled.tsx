import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100vw;
  /* min-height: 50px; */
  background-color: #de8667;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 72px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img``;

export const FooterText = styled.p`
  @media screen and (max-width: 500px) {
    margin-top: 8px;
    text-align: center;
  }
`;
