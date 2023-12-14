import { Notification } from '../types/notifications';
import { v4 as uuidv4 } from 'uuid';

function generateRandomText(): string {
  const loremIpsumWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'eiusmod', 'tempor', 'dolore', 'magna', 'aliqua'];
  return Array.from({ length: 6 }, () => loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)]).join(' ');
}

const generateDummyNotification = (): Notification => {
  const id = uuidv4();
  return {
    createdAt: new Date().toString(),
    text: generateRandomText(),
    _id: id,
  };
};

const NotificationsApi = {
  read: async (): Promise<Notification[]> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return Array.from({ length: 1 }, () => generateDummyNotification());
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default NotificationsApi;
