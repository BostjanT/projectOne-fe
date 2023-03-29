import styled from 'styled-components';

type navOpen = {
  navOpen: boolean;
};

export const NavbarContainer = styled.nav`
  padding: 30px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  background-color: #fff;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const QuoteLogo = styled.img<navOpen>`
  width: 116px;
  height: 28px;
  padding: 1px 8px;
  gap: 10px;
  order: 0;

  @media screen and (max-width: 1024px) {
    /*  order: 1; */
    justify-self: end;
    display: ${({ navOpen }) => (navOpen ? 'none' : 'inline-block')};
    transition: all ease-in-out 0.4s;
  }
`;

export const Hamburger = styled.div`
  background: transparent;
  display: none;
  flex-direction: column;
  cursor: pointer;
  width: 23px;
  height: 21px;

  span {
    height: 3px;
    width: 23px;
    background: #000;
    margin-bottom: 6px;
  }
  .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .bar2 {
    opacity: 0;
  }
  .bar3 {
    transform: rotate(45deg) translate(-5px, -8px);
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    order: 0;
  }
`;

export const Line = styled.span``;

export const NavigationLinks = styled.div<navOpen>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 1 / -1;
    align-items: left;
    gap: 50px;
    margin-top: ${({ navOpen }) => (navOpen ? '2rem' : 0)};
    max-height: ${({ navOpen }) => (navOpen ? '340px' : 0)};
    transition: all ease-in-out 0.4s;
    width: 100%;
    & > * {
      width: 100%;
    }
  }
`;

export const Links = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #322d38;
  width: 100%;
  margin: 0 24px;

  &:hover {
    color: #de8667;
    cursor: pointer;
  }

  &.hideAdd {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    &.hide {
      display: none;
    }
    &.image {
      order: 3;
    }
    &.hideAdd {
      display: block;
      order: 4;
    }
  }
`;

export const LinkArrow = styled.img`
  width: 10px;
  height: 16px;
  @media screen and (min-width: 1024px) {
    &.hide {
      display: none;
    }
  }
`;

export const AddQuote = styled.img`
  width: 40px;
  height: 100%;

  @media screen and (max-width: 1024px) {
    &.hide {
      display: none;
    }
  }
`;
