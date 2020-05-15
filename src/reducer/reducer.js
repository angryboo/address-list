export const initState = {
  inputName: '',
  inputNumber: '',
  address: [],
  select: 0,
  callList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME':
      return { ...state, inputName: action.data };
    case 'NUMBER':
      return { ...state, inputNumber: action.data };
    case 'RESET':
      return { ...state, inputName: '', inputNumber: '' };
    case 'ADD':
      return {
        ...state,
        address: [
          ...state.address,
          { id: action.id, name: state.inputName, number: state.inputNumber },
        ],
      };
    case 'REMOVE':
      return {
        ...state,
        address: action.list,
      };
    case 'SELECT':
      return { ...state, select: action.select };
    case 'ADDCALL':
      return {
        ...state,
        callList: [
          ...state.callList,
          {
            id: action.id,
            name: action.name,
            number: action.number,
            date: action.date,
          },
        ],
      };
    default:
      return state;
  }
};
