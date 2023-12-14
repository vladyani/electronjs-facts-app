import React, { createContext, useState, useEffect, PropsWithChildren, useCallback } from 'react';
import { Notification } from '../types/notifications';
import NotificationsApi from '../services/notifications-api';
import NotificationsDialog from '../components/notifications/dialog';
import NotificationsSnackbar from '../components/notifications/snackbar';
import { findIndexByIdAndDelete } from '../utils/array';
import { formatToMilliseconds } from '../utils/date';

interface NotificationsContextInterface {
  notifications: Notification[];
  newNotificationsCount: number;
  notificationsFrequency: number;
  onDeleteNotification?: (notificationId: string) => void;
  onResetNewNotificationsCount?: () => void;
  onSetNotificationsFrequency?: (seconds: number) => void;
}

export const NotificationsContext = createContext<NotificationsContextInterface>({
  notifications: [],
  newNotificationsCount: 0,
  notificationsFrequency: 0,
});

const NotificationsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [newNotificationsCount, setNewNotificationsCount] = useState<number>(0);
  const [notificationsFrequency, setNotificationsFrequency] = useState<number>(0);

  useEffect(() => {
    if (!notificationsFrequency) return;

    const fetchNotifications = async () => {
      const data = await NotificationsApi.read();

      setNotifications([...notifications, ...data]);
      setNewNotificationsCount(newNotificationsCount + data.length);
    };

    const intervalId = setInterval(() => fetchNotifications(), formatToMilliseconds(notificationsFrequency));

    return () => clearInterval(intervalId);
  }, [notifications, notificationsFrequency, newNotificationsCount]);

  const onDeleteNotification = useCallback(
    (notificationId: string) => setNotifications(findIndexByIdAndDelete(notifications, notificationId)),
    [notifications]
  );

  const onResetNewNotificationsCount = useCallback(() => {
    setNewNotificationsCount(0);
  }, []);

  const onSetNotificationsFrequency = useCallback((value: number) => {
    setNotificationsFrequency(value);
  }, []);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        newNotificationsCount,
        notificationsFrequency,
        onDeleteNotification,
        onResetNewNotificationsCount,
        onSetNotificationsFrequency,
      }}
    >
      {children}
      <NotificationsDialog />
      <NotificationsSnackbar />
    </NotificationsContext.Provider>
  );
};

export default NotificationsContextProvider;
