import React from 'react';
import './App.css';
import InputFrom from './components/templates/Form';
import AddressList from './components/templates/Address-list';
import CallList from './components/templates/Call-list';
import useData from './hook/useData';
import { Context } from './context/context';

// APP 컴포넌트
function App() {
  const [
    state,
    getInputData,
    setAddAddress,
    removeAddress,
    selectAddress,
    resetSelect,
    addCallList,
  ] = useData();

  const data = {
    state,
    getInputData,
    setAddAddress,
    removeAddress,
    selectAddress,
    resetSelect,
    addCallList,
  };

  return (
    <div className="App">
      <Context.Provider value={data}>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.12.0/css/all.css"
          integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M"
          crossOrigin="anonymous"
        />
        <main className="wrap-App">
          <h1 className="title">전화번호부</h1>
          <InputFrom />
          <div className="wrap-lists">
            <AddressList />
            <CallList />
          </div>
        </main>
      </Context.Provider>
    </div>
  );
}

export default React.memo(App);
