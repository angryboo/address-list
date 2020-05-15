/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { Context } from '../../context/context';

function InputState() {
  const { state } = useContext(Context);
  const [inputState, setState] = useState({
    name: state.inputName,
    number: state.inputNnumber,
  });
  useEffect(() => {
    setState({ name: state.inputName, number: state.inputNumber });
  }, [state, state.inputName, state.inputNumber]);

  const setNameState = () => {
    // eslint-disable-next-line operator-linebreak
    const isName =
      inputState.name === '' ? '이름을 입력해 주세요' : inputState.name;
    return isName;
  };

  const setNumberState = () => {
    // eslint-disable-next-line operator-linebreak
    const isNumber =
      inputState.number === '' ? '전화번호를 입력해 주세요' : inputState.number;
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
