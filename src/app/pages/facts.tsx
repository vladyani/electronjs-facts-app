import React, { useContext, useMemo } from 'react';
import Cards from '../components/cards';
import { FactsContext } from '../context/facts';

const FactsPage: React.FC = () => {
  const { facts, favouriteFacts, onToggleFavouriteFact, onDeleteFact } = useContext(FactsContext);

  const favouriteFactsIds = useMemo(() => favouriteFacts.map((fact) => fact._id), [favouriteFacts]);

  return (
    <Cards
      hoverable
      data={facts}
      selectedCards={favouriteFactsIds}
      onToggleFavourite={onToggleFavouriteFact}
      onDelete={onDeleteFact}
    />
  );
};

export default FactsPage;
