/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import '../../App.css';

// eslint-disable-next-line object-curly-newline
function Input({ type, getInputData, address, setAddAddress }) {
  // eslint-disable-next-line arrow-body-style
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.value = '';
  }, [address]);
  // eslint-disable-next-line arrow-body-style
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
