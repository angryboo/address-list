/* eslint-disable react/prop-types */
import React from 'react';
import '../../App.css';
import InputState from '../atoms/Input-state';
import AddressListItem from '../atoms/Address-list-item';

// eslint-disable-next-line object-curly-newline
function AddressList({ address, inputValue, numberValue, removeAddress }) {
  return (
    <div className="warp-list">
      <h2 className="address-list-title">주소록</h2>
      <InputState inputValue={inputValue} numberValue={numberValue} />
      <ul className="address-list">
        {address.map(({ id, name, number }) => (
          <AddressListItem
            key={id}
            id={id}
            name={name}
            number={number}
            removeAddress={removeAddress}
          />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(AddressList);
