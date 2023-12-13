import React, { createContext, useState, useEffect, PropsWithChildren, useMemo, useCallback } from 'react';
import FactsApi from '../services/facts-api';
import { Fact } from '../types/facts';
import { findIndexById, findIndexByIdAndDelete, aggregateById } from '../utils/array';

interface FactsContextInterface {
  facts?: Fact[];
  favouriteFacts?: Fact[];
  onToggleFavouriteFact?: (factId: string) => void;
  onDeleteFact?: (factId: string) => void;
}

export const FactsContext = createContext<FactsContextInterface>({ facts: [], favouriteFacts: [] });

const FactsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [facts, setFacts] = useState<Fact[]>([]);
  const [favouriteFacts, setFavouriteFacts] = useState<Fact[]>([]);

  useEffect(() => {
    const getFacts = async () => {
      const data = await FactsApi.read();
      setFacts(data);
    };

    getFacts();
  }, []);

  const aggregatedFacts = useMemo(() => aggregateById(facts), [facts]);

  const onToggleFavouriteFact = useCallback(
    (factId: string) => {
      const factIndex = findIndexById(favouriteFacts, factId);
      const favouriteFactsChange = [...favouriteFacts];

      if (factIndex !== -1) {
        favouriteFactsChange.splice(factIndex, 1);
      } else {
        favouriteFactsChange.push(aggregatedFacts[factId]);
      }

      setFavouriteFacts(favouriteFactsChange);
    },
    [aggregatedFacts, favouriteFacts]
  );

  const onDeleteFact = useCallback(
    (factId: string) => {
      setFacts(findIndexByIdAndDelete(facts, factId));
      setFavouriteFacts(findIndexByIdAndDelete(favouriteFacts, factId));
    },
    [facts, favouriteFacts]
  );

  return (
    <FactsContext.Provider value={{ facts, favouriteFacts, onToggleFavouriteFact, onDeleteFact }}>
      {children}
    </FactsContext.Provider>
  );
};

export default FactsContextProvider;
