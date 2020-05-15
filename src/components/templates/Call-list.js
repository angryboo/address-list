/* eslint-disable react/prop-types */
import React from 'react';
import '../../App.css';

function CallList() {
  return (
    <div className="warp-list">
      <h2 className="address-list-title">통화목록</h2>
    </div>
  );
}

export default React.memo(CallList);
