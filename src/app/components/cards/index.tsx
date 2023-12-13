import React from 'react';
import { Grid } from '@mui/material';
import { Fact } from '../../types/facts';
import Card from './card';
import EmptyPlaceholder from '../empty-placeholder';

export interface CardsProps {
  data: Fact[];
  selectedCards?: string[];
  hoverable?: boolean;
  onToggleFavourite?: (cardId: string) => void;
  onDelete?: (cardId: string) => void;
}

const Cards: React.FC<CardsProps> = ({ data, selectedCards, hoverable, onToggleFavourite, onDelete }) =>
  data.length ? (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={4} key={item._id}>
          <Card
            data={item}
            hoverable={hoverable}
            onToggleFavourite={onToggleFavourite}
            onDelete={onDelete}
            selected={selectedCards ? selectedCards.includes(item._id) : true}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <EmptyPlaceholder />
  );

export default Cards;
