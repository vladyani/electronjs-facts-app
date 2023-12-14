import React, { useContext, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Badge, Tooltip, Popover } from '@mui/material';
import { NotificationsContext } from '../../context/notifications';
import NotificationsList from './list';

const NotificationsBadge: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement>(null);
  const { newNotificationsCount, onResetNewNotificationsCount } = useContext(NotificationsContext);

  const showNotifications = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onResetNewNotificationsCount();
  };

  const closeNotifications = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Show notifications">
        <IconButton size="large" color="inherit" onClick={showNotifications}>
          <Badge badgeContent={anchorEl ? null : newNotificationsCount} color="info">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={closeNotifications}
        sx={{ maxHeight: 250 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <NotificationsList />
      </Popover>
    </>
  );
};

export default NotificationsBadge;
