import React, { useEffect, useState } from 'react';
import useWordle from '../../hooks/useWordle';

// components
import Grid from './Grid';
import Keypad from './Keypad';
import VictoryModal from './VictoryModal';
import GuessModal from './GuessModal';

import { GameUpdateRequest, NextWordRequest } from '../../clientprotos/gameservice/gameservice_pb';

export default function Wordle({ solution, setSolution, client, gameId }) {
  const [guess, setGuess] = useState('');
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, setTurn, setIsCorrect } = useWordle(
    solution,
    setGuess
  );
  const [victoryModal, setVictoryModal] = useState(false);

  const [guessModal, setGuessModal] = useState(false);
  const gameUpdate = new GameUpdateRequest();
  const nextWord = new NextWordRequest();
  gameUpdate.setGameId(gameId);
  nextWord.setGameId(gameId);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      gameUpdate.setGuess(guess);

      // ask server to update game and check if guess is correct
      client.updateGame(gameUpdate, {}, (err, response) => {
        if (err) console.log('failed', err);
        else {
          console.log('succes updateGame request');
          // On correct guess, get new word to continue the game
          if (response.array[0] === true) {
            setGuessModal(true);
            setTimeout(() => setGuessModal(false), 3000);
            setIsCorrect(false);
            // here normally the next word is get from the server
            setTurn(0);
            client.nextWord(nextWord, {}, (err, response) => {
              if (err) console.log('failed', err);
              else {
                console.log('succes nextWord request');
                setTimeout(() => setSolution(response.array[2]), 3100);
                // setSolution(response.array[3].replace(/\s/g, ''));
              }
            });

            // window.removeEventListener('keyup', handleKeyup)
          } else {
            console.log('guess is not correct according to server');
            setIsCorrect(false);
            setTurn(0);
          }
        }
      });
    }
    if (turn > 5) {
      setTimeout(() => setVictoryModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn, setSolution]);

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution} />
      <Keypad usedKeys={usedKeys} />
      {guessModal && <GuessModal solution={solution} turn={turn} />}
      {victoryModal && <VictoryModal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  );
}
