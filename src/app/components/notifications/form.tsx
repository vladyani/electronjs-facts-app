import React, { useState, useContext, useEffect } from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { FormControl, Select, MenuItem, Button, InputAdornment, Box } from '@mui/material';
import { frequencyOptions } from '../../config/notifications';
import { NotificationsContext } from '../../context/notifications';

const NotificationsForm: React.FC = () => {
  const { notificationsFrequency, onSetNotificationsFrequency } = useContext(NotificationsContext);
  const [selectedValue, setSelectedValue] = useState<number | string>(null);

  useEffect(() => {
    setSelectedValue(notificationsFrequency);
  }, [notificationsFrequency]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 700 }} my={1}>
        <FormControl fullWidth>
          <Select
            size="small"
            value={selectedValue || ''}
            onChange={(event) => setSelectedValue(event.target.value as number)}
            fullWidth
            startAdornment={
              <InputAdornment position="start">
                <AccessAlarmIcon />
              </InputAdornment>
            }
          >
            {frequencyOptions.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={() => onSetNotificationsFrequency(selectedValue as number)}
            disabled={!selectedValue || selectedValue === notificationsFrequency}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default NotificationsForm;
