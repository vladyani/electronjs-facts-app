import React from 'react';
import { Box, Typography } from '@mui/material';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const EmptyPlaceholder = () => (
  <Box textAlign="center">
    <SentimentSatisfiedIcon fontSize="large" />
    <Typography variant="h6">No data available</Typography>
  </Box>
);

export default EmptyPlaceholder;
