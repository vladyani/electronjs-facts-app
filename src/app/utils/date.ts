import { format } from 'date-fns';

export const formatDate = (value: string): string => {
  const date = new Date(value);
  return format(date, 'MMMM d, HH:mm, yyyy');
};

export const formatToMilliseconds = (seconds: number): number => seconds * 1000;
