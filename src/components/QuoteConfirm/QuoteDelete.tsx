import React from 'react';
import { CenterDiv, ConfirmBtn } from '../../styles/addQuote.styled';
import { Orange } from '../../styles/main.styled';
import { QuoteConfirm, QuoteMsg } from './quotemsg.styled';

const QuoteDelete = () => {
  return (
    <CenterDiv>
      <QuoteConfirm>
        <QuoteMsg>
          Your <Orange>quote</Orange> was deleted.
        </QuoteMsg>
        <ConfirmBtn>Close</ConfirmBtn>
      </QuoteConfirm>
    </CenterDiv>
  );
};

export default QuoteDelete;
