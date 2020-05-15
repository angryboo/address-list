/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import '../../App.css';
import InputState from '../atoms/Input-state';
import AddressListItem from '../atoms/Address-list-item';
import { Context } from '../../context/context';

// eslint-disable-next-line object-curly-newline
function AddressList() {
  const { state, resetSelect } = useContext(Context);
  const handleClickEvent = (e) => {
    if (e.target.className !== 'warp-list') return;
    resetSelect();
  };
  return (
    <div className="warp-list" onClick={(e) => handleClickEvent(e)}>
      <h2 className="address-list-title">주소록</h2>
      <InputState
        inputValue={state.inputValue}
        numberValue={state.numberValue}
      />
      <ul className="address-list">
        {state.address.map(({ id, name, number }) => (
          <AddressListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(AddressList);
