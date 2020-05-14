/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../atoms/Input';
import AddButton from '../atoms/Add-button';
import '../../App.css';

function InputForm({ getInputData, setAddAddress, address }) {
  return (
    <form className="input-form">
      <Input
        type="NAME"
        getInputData={getInputData}
        setAddAddress={setAddAddress}
        address={address}
      />
      <Input
        type="NUMBER"
        getInputData={getInputData}
        setAddAddress={setAddAddress}
        address={address}
      />
      <AddButton setAddAddress={setAddAddress} />
    </form>
  );
}

export default React.memo(InputForm);
