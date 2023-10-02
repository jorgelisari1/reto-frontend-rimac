import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './RoundButton.scss';

interface RoundButtonProps {
  isChecked: boolean;
  setIsChecked(booolean): void;
  isCheckedOther: boolean
  setIsCheckedOther(boolean): void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ isChecked, setIsChecked, isCheckedOther,setIsCheckedOther }) => {

  const handleClick = () => {
    if(isCheckedOther){
      setIsCheckedOther(!isCheckedOther)
    }
    setIsChecked(!isChecked)
  };

  return (
    <button
      className={`round-button ${isChecked ? 'checked' : ''}`}
      onClick={handleClick}
    >
      {isChecked ? <CheckIcon fontSize='small' /> : null}
    </button>
  );
};

export default RoundButton;