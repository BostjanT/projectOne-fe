import styled from 'styled-components';

export const QuoteHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px 16px 16px;
  gap: 21px;

  width: 420px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const VoteHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  align-self: stretch;
`;

export const VoteUpBtn = styled.div`
  margin: 0 auto;
  width: 10px;
  height: 10px;
  border-right: 0.2em solid black;
  border-top: 0.2em solid black;
  transform: rotate(-45deg);
  &:hover {
    cursor: pointer;
  }

  &.votedUp {
    border-right: 0.2em solid #de8667;
    border-top: 0.2em solid #de8667;
    transform: rotate(-45deg);
    pointer-events: none;
  }
`;

export const Votes = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  text-align: center;
`;

export const VoteDownBtn = styled.div`
  margin: 0 auto;
  width: 10px;
  height: 10px;
  border-right: 0.2em solid black;
  border-top: 0.2em solid black;
  transform: rotate(125deg);
  &:hover {
    cursor: pointer;
  }

  &.votedDown {
    border-right: 0.2em solid #de8667;
    border-top: 0.2em solid #de8667;
    transform: rotate(125deg);
    pointer-events: none;
  }
`;

export const QuoteDiv = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0px 0px;
  gap: 21px;
  width: 295px;
`;

export const QuoteText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  align-self: stretch;
`;

export const QuoteAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin-top: 21px;
  gap: 10px;
  align-self: stretch;
`;

export const AuthorImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const AuthorName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.4px;

  color: #000000;
`;

export const QuoteSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
  gap: 21px;

  width: 16px;
`;

export const SettingsImg = styled.img`
  width: 11px;
  height: 11px;
  cursor: pointer;

  &.bigger {
    width: 16px;
    height: 16px;
  }
`;
