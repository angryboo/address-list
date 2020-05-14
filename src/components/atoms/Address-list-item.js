/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../../App.css';

// eslint-disable-next-line object-curly-newline
function AddressListItem({ id, name, number, removeAddress }) {
  const [state, setState] = useState({ id, name, number });
  useEffect(() => {
    setState({ id, name, number });
  }, [id, name, number]);
  return (
    <li className="address-list-item">
      <span className="item-name">이름: {state.name}</span>
      <span className="item-number">전화번호: {state.number}</span>
      <button type="button" className="item-call">
        <i className="fas fa-phone" />
      </button>
      <button
        type="button"
        className="item-remove"
        onClick={() => removeAddress(state.id)}
      >
        <i className="fas fa-trash-alt" />
      </button>
    </li>
  );
}

export default React.memo(AddressListItem);
