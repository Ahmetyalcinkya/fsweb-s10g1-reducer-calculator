export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "Ekrandaki değeri sıfırlar";
export const MEMORY_ADD = "Memory içerisine total değerini ekler.";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const changeOperation = (operation) => {
  return {
    type: CHANGE_OPERATION,
    payload: operation,
  };
};
export const addMemory = () => {
  return { type: MEMORY_ADD };
};
export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};
export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
