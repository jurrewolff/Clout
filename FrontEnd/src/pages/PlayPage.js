import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import { DataGrid } from '@mui/x-data-grid';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import Paper from '@mui/material/Paper';
import { useTheme, styled} from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Wordle from '../components/wordle/Wordle';

import { GameInitRequest } from '../clientprotos/gameservice/gameservice_pb';

// sections
import { AppNewsUpdate, AppWebsiteVisits, AppWidgetSummary, HiscoreTable } from '../sections/@dashboard/app';
import PopUp from './PopUp';

// ----------------------------------------------------------------------



export default function PlayPage({ client }) {
  const { state } = useLocation();
  const { wordlistId } = state;
  const [solution, setSolution] = useState('');
  const [description, setDescription] = useState('');
  const [gameId, setGameId] = useState('');

  const InputField = styled('div')(({ theme }) => ({

    // width: `${solution.length * 100}`,
    color: "black",
    backgroundColor: "white",
    margin: "auto",
    borderRadius: 10,
    marginTop: 100,

}));

  // on page load init the game
  useEffect(() => {
    console.log(`Wordlist to be played is: ${wordlistId}`);

    const gameId = new GameInitRequest();
    gameId.setWordlistId(wordlistId);

    client.initGame(gameId, null, (err, response) => {
      if (err) console.log('failed init game', err);
      else {
        console.log('succes init game', response);
        setGameId(response.array[2]);
        // console log response.array[3] stripped of whitespace
        console.log(response);

        setSolution(response.array[3].replace(/\s/g, ''));
        setDescription(response.array[4]);
      }
    });
  }, []);

  const theme = useTheme();
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    <PopUp show={showComponent} onClose={() => setShowComponent(false)} />;
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Helmet>
        <title> Play Wordle! </title>
      </Helmet>

      {/* {showComponent && (<PopUp show={showComponent} onClose={() => setShowComponent(false)} />)} */}

      <Container sx={{ marginTop: '5%' }} maxWidth="xl">
        <Grid container spacing={5}>
          {/* <div className="App"> */}
          <InputField>
            <h1>Wordle (Lingo)</h1>
            <Wordle
              solution={solution}
              description={description}
              setDescription={setDescription}
              setSolution={setSolution}
              client={client}
              wordlistId={wordlistId}
              gameId={gameId}
            />
            {/* {solution && <Wordle solution={solution} />} */}
          {/* </div> */}
          </InputField>
        </Grid>
      </Container>
    </>
  );
}
