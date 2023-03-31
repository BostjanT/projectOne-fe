import styled from 'styled-components';

export const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
`;

export const QuoteHeader = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.25px;
  color: #322d38;
  align-self: stretch;
  margin-bottom: 16px;
`;

export const QuotePara = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d38;
  align-self: stretch;
  margin-bottom: 32px;
`;

export const QuoteArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;

  /* width: 529px; */
  height: 124px;

  background: #ffffff;
  border: 2px solid #de8667;
  border-radius: 16px;
  align-self: stretch;
  flex-grow: 0;
`;

export const QuoteButtons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: #ffffff;
`;

export const ConfirmBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 137px;
  height: 40px;
  padding: 8px 16px;
  gap: 10px;
  background: #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: #de8667;
    border: 2px solid #de8667;
    background: #ffffff;
  }
`;

export const CancelBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #322d38;
  padding: 10.5px;
  margin-left: 30px;

  &:hover {
    color: #de8667;
  }
`;
