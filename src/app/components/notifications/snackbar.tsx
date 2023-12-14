import React, { useContext, useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { NotificationsContext } from '../../context/notifications';
import usePrevious from '../../hooks/use-previous';

const NotificationsSnackbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { notificationsFrequency } = useContext(NotificationsContext);
  const previousNotificationsFrequency = usePrevious(notificationsFrequency);

  useEffect(() => {
    if (notificationsFrequency && notificationsFrequency !== previousNotificationsFrequency) {
      setOpen(true);
    }
  }, [notificationsFrequency, previousNotificationsFrequency]);

  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Notifications frequency has been updated with success!
      </Alert>
    </Snackbar>
  );
};

export default NotificationsSnackbar;
