/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../atoms/Input';
import AddButton from '../atoms/Add-button';
import '../../App.css';

function InputForm() {
  return (
    <form className="input-form">
      <Input type="NAME" />
      <Input type="NUMBER" />
      <AddButton />
    </form>
  );
}

export default React.memo(InputForm);
