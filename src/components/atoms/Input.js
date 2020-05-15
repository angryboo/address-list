import React, { useEffect, useRef, useContext } from 'react';
import { Context } from '../../context/context';
import '../../App.css';

function Input({ type }) {
  const InputRef = useRef();
  const { getInputData, state, setAddAddress } = useContext(Context);
  useEffect(() => {
    InputRef.current.value = '';
  }, [state.address]);
  const checkType = () => {
    // eslint-disable-next-line no-nested-ternary
    return type === 'NAME' ? '이름' : type === 'NUMBER' ? '전화번호' : type;
  };
  const handleEnterEvent = (e) => {
    if (e.key !== 'Enter') return;
    setAddAddress();
  };
  return (
    <div className="wrap-input">
      <div className="input-type">{checkType()}</div>
      <input
        className={`input ${type}`}
        type="text"
        placeholder={`${checkType()} 를 입력하세요`}
        onChange={({ target }) => getInputData(target, type)}
        onKeyUp={(e) => handleEnterEvent(e)}
        ref={InputRef}
      />
    </div>
  );
}

export default React.memo(Input);
