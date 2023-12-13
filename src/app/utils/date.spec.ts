import { formatDate } from './date';
import * as dateFns from 'date-fns';

jest.mock('date-fns', () => {
  const actual = jest.requireActual('date-fns');
  return {
    ...actual,
    format: jest.fn(),
  };
});

describe('formatDate', () => {
  it('should format a raw date string into readable date', () => {
    const mockDate = '2021-11-27T14:58:56Z';
    const expectedResult = 'November 27, 14:58, 2021';

    (dateFns.format as jest.Mock).mockReturnValueOnce(expectedResult);

    const result = formatDate(mockDate);

    expect(dateFns.format).toHaveBeenCalledWith(new Date(mockDate), 'MMMM d, HH:mm, yyyy');
    expect(result).toBe(expectedResult);
  });
});
