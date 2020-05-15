/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect, useContext } from 'react';
import '../../App.css';
import { Context } from '../../context/context';

// eslint-disable-next-line object-curly-newline
function AddressListItem({ id, name, number }) {
  const { state, selectAddress, removeAddress } = useContext(Context);
  const [listState, setState] = useState({ id, name, number });
  useEffect(() => {
    setState({ id, name, number });
  }, [id, name, number]);

  const handleClickEvent = (e) => {
    if (
      // eslint-disable-next-line operator-linebreak
      e.target.className === 'fas fa-trash-alt' ||
      e.target.className === 'item-remove'
    ) {
      return;
    }
    selectAddress(id);
  };

  return (
    <li
      className={`address-list-item ${state.select === id ? 'select' : ''}`}
      onClick={(e) => handleClickEvent(e)}
    >
      <span className="item-name">이름: {listState.name}</span>
      <span className="item-number">전화번호: {listState.number}</span>
      <button type="button" className="item-call">
        <i className="fas fa-phone" />
      </button>
      <button
        type="button"
        className="item-remove"
        onClick={() => removeAddress(listState.id)}
      >
        <i className="fas fa-trash-alt" />
      </button>
    </li>
  );
}

export default React.memo(AddressListItem);
