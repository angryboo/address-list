/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import '../../App.css';
import { Context } from '../../context/context';

function AddButton() {
  const { setAddAddress } = useContext(Context);
  return (
    <button
      type="button"
      className="add-button"
      onClick={() => setAddAddress()}
    >
      전화번호 추가하기
    </button>
  );
}

export default React.memo(AddButton);
