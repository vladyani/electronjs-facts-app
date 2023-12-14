import React from 'react';
import Facts from './pages/facts';
import Favourites from './pages/favourites';
import Settings from './pages/settings';

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
  {
    name: 'Settings',
    path: '/settings',
    component: <Settings />,
  },
];

export default routes;
