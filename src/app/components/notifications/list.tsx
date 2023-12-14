import React, { useContext } from 'react';
import { formatDate } from '../../utils/date';
import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { NotificationsContext } from '../../context/notifications';
import EmptyPlaceholder from '../empty-placeholder';

const NotificationsList: React.FC = () => {
  const { notifications, onDeleteNotification } = useContext(NotificationsContext);

  return notifications.length ? (
    <List dense>
      {notifications.map((notification) => (
        <ListItem
          key={notification._id}
          secondaryAction={
            <IconButton edge="end" onClick={() => onDeleteNotification(notification._id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Created at ${formatDate(notification.createdAt)}`} secondary={notification.text} />
        </ListItem>
      ))}
    </List>
  ) : (
    <EmptyPlaceholder size="small" />
  );
};

export default NotificationsList;
