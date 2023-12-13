import React from 'react';
import Facts from './pages/facts';
import Favourites from './pages/favourites';

interface Route {
  name: string;
  path: string;
  component: React.ReactNode;
}

const routes: Route[] = [
  {
    name: 'Facts',
    path: '/',
    component: <Facts />,
  },
  {
    name: 'Favourites',
    path: '/favourites',
    component: <Favourites />,
  },
];

export default routes;
