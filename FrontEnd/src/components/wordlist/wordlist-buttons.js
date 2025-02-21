import React from 'react';
import { Button } from '@mui/material';
import '../../styles/wordlist-buttons.css';

export default function WordListButtons({ onReturn, onSubmit }) {
  return (
    <div className="wordlist-buttons-wrapper">
      <div className="wordlist-buttons">
        <Button variant="contained" onClick={onReturn}>
          Back
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          Create
        </Button>
      </div>
    </div>
  );
}
