import React from 'react';
import { Box, Typography } from '@mui/material';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

interface EmptyPlaceholderProps {
  size?: 'small' | 'large';
}

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> = ({ size = 'large' }) => (
  <Box textAlign="center" p={2}>
    <SentimentSatisfiedIcon fontSize={size} />
    <Typography variant="body1">No data available</Typography>
  </Box>
);

export default EmptyPlaceholder;
