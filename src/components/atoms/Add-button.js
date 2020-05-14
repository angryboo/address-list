/* eslint-disable react/prop-types */
import React from 'react';
import '../../App.css';

function AddButton({ setAddAddress }) {
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
