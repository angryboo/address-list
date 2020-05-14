import React, { useReducer } from 'react';
import './App.css';
import InputFrom from './components/templates/Form';
import AddressList from './components/templates/Address-list';
import CallList from './components/templates/Call-list';

const initState = {
  inputName: '',
  inputNumber: '',
  address: [],
};

const reducer = (state, action) => {
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
    default:
      return state;
  }
};

// APP 컴포넌트
function App() {
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

  const removeAddress = (_id) => {
    const tempArr = state.address.filter(({ id }) => id !== _id);
    dispatch({ type: 'REMOVE', list: tempArr });
  };

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
        integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M"
        crossOrigin="anonymous"
      />
      <main className="wrap-App">
        <h1 className="title">전화번호부</h1>
        <InputFrom
          getInputData={getInputData}
          setAddAddress={setAddAddress}
          address={state.address}
        />
        <div className="wrap-lists">
          <AddressList
            address={state.address}
            inputValue={state.inputName}
            numberValue={state.inputNumber}
            removeAddress={removeAddress}
          />
          <CallList />
        </div>
      </main>
    </div>
  );
}

export default React.memo(App);
