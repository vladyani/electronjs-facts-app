import React, { useContext } from 'react';
import Cards from '../components/cards';
import { FactsContext } from '../context/facts';

const FavouritesPage: React.FC = () => {
  const { favouriteFacts, onToggleFavouriteFact, onDeleteFact } = useContext(FactsContext);

  return <Cards data={favouriteFacts} onToggleFavourite={onToggleFavouriteFact} onDelete={onDeleteFact} />;
};

export default FavouritesPage;
