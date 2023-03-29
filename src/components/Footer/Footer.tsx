import React from 'react';
import LogoQuote from '../../images/LogoQuote.png';
import { FooterText, Footer, Logo } from './footer.styled';
const FooterDiv = () => {
  return (
    <div>
      <Footer>
        <Logo src={LogoQuote} />
        <FooterText>All Rights Reserved. | skillupmentor.com</FooterText>
      </Footer>
    </div>
  );
};

export default FooterDiv;
