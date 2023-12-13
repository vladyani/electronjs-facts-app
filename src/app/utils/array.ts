export const findIndexById = <T extends { [key: string]: any }>(array: T[], id: string, idKey = '_id'): number =>
  array.findIndex((item) => item[idKey] === id);

export const findIndexByIdAndDelete = <T extends { [key: string]: any }>(
  array: T[],
  id: string,
  idKey = '_id'
): T[] => {
  const index = findIndexById(array, id, idKey);

  if (index !== -1) {
    const arrayChange = [...array];
    arrayChange.splice(index, 1);
    return arrayChange;
  }

  return array;
};

export const aggregateById = <T extends { [key: string]: any }>(array: T[], idKey = '_id') =>
  array.reduce(
    (acc, item) => {
      acc[item[idKey]] = item;
      return acc;
    },
    {} as Record<string, T>
  );
