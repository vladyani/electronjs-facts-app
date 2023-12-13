import { findIndexById, findIndexByIdAndDelete, aggregateById } from './array';

const mockData = [
  { _id: '1', name: 'John' },
  { _id: '2', name: 'Jack' },
  { _id: '3', name: 'Jay' },
];

describe('findIndexById', () => {
  it('should return the index of the item with the given id', () => {
    const index = findIndexById(mockData, '2');
    expect(index).toBe(1);
  });

  it('should return -1 if the id is not found in the array', () => {
    expect(findIndexById(mockData, '4')).toBe(-1);
  });
});

describe('findIndexByIdAndDelete', () => {
  it('should delete the item with the given id from the array', () => {
    expect(findIndexByIdAndDelete(mockData, '2')).toEqual([
      { _id: '1', name: 'John' },
      { _id: '3', name: 'Jay' },
    ]);
  });

  it('should return the original array if the id is not found', () => {
    expect(findIndexByIdAndDelete(mockData, '4')).toEqual([
      { _id: '1', name: 'John' },
      { _id: '2', name: 'Jack' },
      { _id: '3', name: 'Jay' },
    ]);
  });
});

describe('aggregateById', () => {
  it('should aggregate an array of objects by the predefined ID key', () => {
    const expectedResult = {
      '1': { _id: '1', name: 'John' },
      '2': { _id: '2', name: 'Jack' },
      '3': { _id: '3', name: 'Jay' },
    };

    expect(aggregateById(mockData)).toEqual(expectedResult);
  });

  it('should aggregate an array of objects by the custom ID key "name"', () => {
    const expectedResult = {
      John: { _id: '1', name: 'John' },
      Jack: { _id: '2', name: 'Jack' },
      Jay: { _id: '3', name: 'Jay' },
    };

    expect(aggregateById(mockData, 'name')).toEqual(expectedResult);
  });
});
