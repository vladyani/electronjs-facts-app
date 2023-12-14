import React, { useContext, useMemo } from 'react';
import Cards from '../components/cards';
import { FactsContext } from '../context/facts';

const FactsPage: React.FC = () => {
  const { facts, favouriteFacts } = useContext(FactsContext);

  const favouriteFactsIds = useMemo(() => favouriteFacts.map((fact) => fact._id), [favouriteFacts]);

  return <Cards data={facts} selectedCards={favouriteFactsIds} hoverable />;
};

export default FactsPage;
