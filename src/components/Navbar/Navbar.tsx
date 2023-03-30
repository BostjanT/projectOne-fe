import { useState } from 'react';
import {
  AddQuote,
  Hamburger,
  Line,
  LinkArrow,
  Links,
  NavbarContainer,
  NavigationLinks,
  QuoteLogo,
} from './navbar.styled';
import QoutesLogo from '../../images/QoutesLogo.png';
import Arrow from '../../images/LinkArrow.png';
import QuoteAdd from '../../images/bi_plus.png';
import { OrangeButton, WhiteButton } from '../../styles/main.styled';
import { useNavigate } from 'react-router-dom';
import UserImg from '../../images/UserImage.png';

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const userLogged = localStorage.getItem('userLogged'); 
  
  let navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <Hamburger onClick={() => setNavOpen(!navOpen)}>
          <Line className={navOpen === true ? 'bar1' : ''} />
          <Line className={navOpen === true ? 'bar2' : ''} />
          <Line className={navOpen === true ? 'bar3' : ''} />
        </Hamburger>
        <QuoteLogo
          src={QoutesLogo}
          navOpen={navOpen}
          onClick={() => navigate('/')}
        />

        {userLogged === 'true' ? (
          <NavigationLinks navOpen={navOpen}>
            <Links
              style={{ marginRight: '16px' }}
              className='image'
              onClick={() => {
                navigate('/profile');
                setNavOpen(false);
              }}>
              <img src={UserImg} />
            </Links>
            <Links
              style={{ margin: 0 }}
              className='hideAdd'
              onClick={() => navigate('/createQuote')}>
              <AddQuote src={QuoteAdd} />
            </Links>

            <Links
              onClick={() => {
                navigate('/');
                setNavOpen(false);
              }}>
              <>Home</> <LinkArrow className='hide' src={Arrow} />
            </Links>
            <Links
              onClick={() => {
                navigate('/profileSettings');
                setNavOpen(false);
              }}>
              Settings <LinkArrow className='hide' src={Arrow} />
            </Links>
            <Links
              onClick={() => {
                navigate('/');
                setNavOpen(false);
              }}>
              Logout <LinkArrow className='hide' src={Arrow} />
            </Links>
          </NavigationLinks>
        ) : (
          <NavigationLinks navOpen={navOpen}>
            <Links
              className='hide'
              onClick={() => {
                navigate('/');
                setNavOpen(false);
              }}>
              <div>Home</div> <LinkArrow src={Arrow} />
            </Links>

            <OrangeButton
              /* style={{ width: '100%' }} */
              onClick={() => {
                navigate('/signup');
                setNavOpen(false);
              }}>
              Sign Up
            </OrangeButton>
            <WhiteButton
              onClick={() => {
                navigate('/login');
                setNavOpen(false);
              }}>
              Login
            </WhiteButton>
          </NavigationLinks>
        )}
      </NavbarContainer>
    </>
  );
};

export default Navigation;
