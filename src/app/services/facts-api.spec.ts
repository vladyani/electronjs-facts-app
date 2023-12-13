import FactsApi from './facts-api';
import { Fact } from '../types/facts';
import { API_BASE_URL } from '../config/api';

const mockData: Fact[] = [
  {
    createdAt: '2023-12-13T12:00:00Z',
    text: 'Fact 1',
    type: 'random',
    updatedAt: '2023-12-15T12:00:00Z',
    _id: '1',
  },
  {
    createdAt: '2023-12-12T12:00:00Z',
    text: 'Fact 2',
    type: 'random',
    updatedAt: '2023-12-17T12:00:00Z',
    _id: '2',
  },
];

const mockFetch = jest.fn();

beforeAll(() => {
  global.fetch = mockFetch;
});

afterEach(() => {
  mockFetch.mockClear();
});

describe('FactsApi', () => {
  it('should fetch facts successfully', async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    const facts = await FactsApi.read();
    expect(facts).toEqual(mockData);

    expect(mockFetch).toHaveBeenCalledWith(`${API_BASE_URL}/facts`);
  });

  it('should throw an error when fetch fails', async () => {
    const errorMessage = 'Failed to fetch data';
    mockFetch.mockRejectedValue(new Error(errorMessage));

    await expect(FactsApi.read()).rejects.toThrow(errorMessage);
  });
});
