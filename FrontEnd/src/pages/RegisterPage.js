import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';
// utils
import { bgBlur } from '../utils/cssStyles';

// ----------------------------------------------------------------------


const StyledContent = styled('div')(({ theme }) => ({
    ...bgBlur ({color: '#280003'}),
    maxWidth: 580,
    color: "#FFFFFF",
    borderRadius: 10,
    paddingTop: 100,
    minHeight: '50vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 12),
    margin: 'auto', // center the div horizontally
}));

// ----------------------------------------------------------------------

export default function RegisterPage({setUser, onSwitch, onClose}) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>

    <Container maxWidth="sm">
        <StyledContent>
        <Typography variant="h4" gutterBottom>
            Register to Lingo
        </Typography>

        {/* <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {''}
            <Link variant="subtitle2">Get started</Link>
        </Typography> */}

        {/* <Stack direction="row" spacing={2}>
            <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
            </Button>
        </Stack> */}

        {/* <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: '#FFFFFF' }}>
            OR
            </Typography>
        </Divider> */}

        <LoginForm setUser={setUser} onClose={onClose} buttonName={"Register"} />
        <Button onClick={onSwitch}>Back to login</Button>

        </StyledContent>
    </Container>
    </>
  );
}
