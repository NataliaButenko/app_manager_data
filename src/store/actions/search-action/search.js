export const SEARCH = 'SEARCH';

export const search = (text) => {
  return {
    type: SEARCH,
    payload: text
  }
};
