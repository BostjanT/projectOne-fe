import React from 'react';
import { ChangeButton } from '../../styles/profileSettings.styled';

const Confirm = () => {
  return (
    <div>
      Your settings are saved
      <ChangeButton className='darkO range'>Close</ChangeButton>
    </div>
  );
};

export default Confirm;
