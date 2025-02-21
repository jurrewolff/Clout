import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 0;
const APP_BAR_DESKTOP = 0;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 0,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 0,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));

const user = {
  Name: "Hyper445",
  Hiscore: "100",
}

// ----------------------------------------------------------------------

export default function DashboardLayout({user, setUser}) {
  // const [user, setUser] = useState(null);
//   const [openLogin, setOpenLogin] = useState(false);

//   function handleLoginClick () {

//     setOpenLogin(!openLogin);

//   }

  return (
    <StyledRoot>
      <Header user={user} setUser={setUser}/>

      {/* <Nav openNav={open} onCloseNav={() => setOpen(false)} /> */}

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
