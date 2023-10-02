import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './RoundButton.scss';

interface RoundButtonProps {
  // Puedes agregar más propiedades según tus necesidades
  onClick?: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
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