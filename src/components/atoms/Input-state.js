/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../../App.css';

function InputState({ inputValue, numberValue }) {
  const [state, setState] = useState({ name: inputValue, number: numberValue });
  useEffect(() => {
    setState({ name: inputValue, number: numberValue });
  }, [inputValue, numberValue]);

  const setNameState = () => {
    const isName = state.name === '' ? '이름을 입력해 주세요' : state.name;
    return isName;
  };

  const setNumberState = () => {
    // eslint-disable-next-line operator-linebreak
    const isNumber =
      state.number === '' ? '전화번호를 입력해 주세요' : state.number;
    return isNumber;
  };
  return (
    <div className="input-state">
      <span>추가될 이름 : {setNameState()}</span>
      <span>추가될 번호 : {setNumberState()}</span>
    </div>
  );
}

export default React.memo(InputState);
