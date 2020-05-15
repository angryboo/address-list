import { useReducer } from 'react';
import { reducer, initState } from '../reducer/reducer';

const useData = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  // eslint-disable-next-line arrow-body-style
  const generateId = () => {
    return state.address.length
      ? Math.max(...state.address.map(({ id }) => id)) + 1
      : 1;
  };

  const getInputData = (target, type) => {
    dispatch({ type, data: target.value });
  };

  const resetInputData = () => {
    dispatch({ type: 'RESET' });
  };

  const setAddAddress = () => {
    if (state.inputName === '' || state.inputNumber === '') return;
    dispatch({ type: 'ADD', id: generateId() });
    resetInputData();
  };

  const resetSelect = () => {
    dispatch({ type: 'SELECT', select: 0 });
  };

  const removeAddress = (_id) => {
    const tempArr = state.address.filter(({ id }) => id !== _id);
    if (_id === state.select) resetSelect();
    dispatch({ type: 'REMOVE', list: tempArr });
  };

  const selectAddress = (_id) => {
    dispatch({ type: 'SELECT', select: _id });
  };

  const addCallList = (id, name, number, date) => {
    dispatch({
      type: 'ADDCALL',
      id,
      name,
      number,
      date,
    });
  };

  return [
    state,
    getInputData,
    setAddAddress,
    removeAddress,
    selectAddress,
    resetSelect,
    addCallList,
  ];
};

export default useData;
