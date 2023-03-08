import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
// import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import PlayPage from './pages/PlayPage';
import Wordlist from './pages/WordlistPage';
import WordlistOverviewPage from './pages/WordlistOverviewPage';
import { WordlistServiceClient } from './clientprotos/wordlist/WordlistServiceClientPb.ts';
import { LingoGameClient } from './clientprotos/gameservice/GameserviceServiceClientPb.ts';

// ----------------------------------------------------------------------

export default function Router() {
  const wordlistclient = new WordlistServiceClient('http://localhost:8080');
  const gameclient = new LingoGameClient('http://localhost:8081');

  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="home" />, index: true },
        { path: 'home', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="play" />, index: true },
        { path: 'play', element: <PlayPage client={gameclient} /> },
      ],
      //   element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'wordlist', element: <Wordlist client={wordlistclient} /> },
        { path: 'wordlist-overview', element: <WordlistOverviewPage client={wordlistclient} /> },

        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}