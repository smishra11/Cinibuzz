export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const addFunc = (data) => {
  return {
    type: ADD,
    payload: data,
  };
};
export const removeFunc = (data) => {
  return {
    type: SUBTRACT,
    payload: data,
  };
};
