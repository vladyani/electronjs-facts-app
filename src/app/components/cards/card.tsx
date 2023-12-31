import React, { useState, useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Tooltip,
} from '@mui/material';
import { Fact } from '../../types/facts';
import { formatDate } from '../../utils/date';
import { FactsContext } from '../../context/facts';

interface CardProps {
  data: Fact;
  selected: boolean;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ data, hoverable, selected }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const { onToggleFavouriteFact, onDeleteFact } = useContext(FactsContext);

  const handleMouseInteraction = (value: boolean) => {
    if (hoverable) {
      setHovered(value);
    }
  };

  return (
    <MuiCard
      onMouseEnter={() => handleMouseInteraction(true)}
      onMouseLeave={() => handleMouseInteraction(false)}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader subheader={`Created at ${formatDate(data.createdAt)}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ marginTop: 'auto' }}>
        <Collapse in={hovered || !hoverable}>
          <Tooltip title={selected ? 'Remove from favorites' : 'Add to favorites'}>
            <IconButton onClick={() => onToggleFavouriteFact(data._id)}>
              <FavoriteIcon color={selected ? 'primary' : 'inherit'} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={() => onDeleteFact(data._id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Collapse>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
