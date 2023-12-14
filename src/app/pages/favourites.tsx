import React, { useContext } from 'react';
import Cards from '../components/cards';
import { FactsContext } from '../context/facts';

const FavouritesPage: React.FC = () => {
  const { favouriteFacts } = useContext(FactsContext);

  return <Cards data={favouriteFacts} />;
};

export default FavouritesPage;
