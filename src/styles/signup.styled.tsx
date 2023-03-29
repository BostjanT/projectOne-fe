import styled from 'styled-components';

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 65px);
`;

export const SignForm = styled.form`
  max-width: 420px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 16px;
`;

export const SignFormText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  /*  max-width: 420px; */
  height: 68px;

  align-self: stretch;
  flex-grow: 0;
`;

export const FormHeader = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #322d38;
  margin-bottom: 8px;
`;

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #322d38;
  margin: 0;
`;

export const UserImage = styled.img`
  margin: 16px;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  align-self: stretch;
`;
export const FormInputDouble = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 16px;
  justify-content: center;
  align-items: center;

  align-self: stretch;

  img {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    img {
      display: inline-flex;
      margin: 0;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px 0px 0px;
  margin-bottom: 8px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px 30px 13px 24px;
  width: 100%;
  height: 40px;

  background: #ffffff;
  border: 2px solid #de8667;
  border-radius: 32px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #322d38;
`;

export const OrangeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 100%;
  height: 40px;
  background: #de8667;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;

  &:hover {
    color: #de8667;
    border: 2px solid #de8667;
    background: #ffffff;
  }
`;

export const HaveAccount = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 100%;
  height: 19px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #322d38;
`;

export const OrangeTextBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #de8667;

  &:hover {
    color: #322d38;
  }
`;
