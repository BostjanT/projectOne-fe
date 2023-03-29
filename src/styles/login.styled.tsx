import styled from 'styled-components';

export const WhiteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 2px solid #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #de8667;

  &:hover {
    color: #ffffff;
    background: #de8667;
  }
`;
