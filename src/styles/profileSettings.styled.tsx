import styled from 'styled-components';

export const SetContainer = styled.div`
  max-width: 529px;
  height: 100vh;
  padding: 32px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SetHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  letter-spacing: 0.25px;
  color: #322d38;
  margin-bottom: 1rem;
`;

export const SetSpan = styled.span`
  color: #de8667;
`;

export const SetParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d38;
`;

export const DoubleInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  gap: 16px;
  width: 100%;
  align-self: stretch;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 16px;
  gap: 8px;

  width: 100%;
`;

export const ChangeButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  width: 100%;
  height: 40px;

  /* Alternative */
  background: #efb467;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  border: none;
  outline: unset;

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

  &.darkOrange {
    background: #de8667;
  }
  &.darkOrange:hover {
    background: #ffffff;
  }
`;

export const SubmitDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  margin-top: 16px;
  gap: 30px;

  height: 40px;

  @media screen and(max-width: 1024px) {
    justify-content: space-between;
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
  padding: 10.5px 0;
  margin-left: 30px;

  &:hover {
    color: #de8667;
  }
`;
