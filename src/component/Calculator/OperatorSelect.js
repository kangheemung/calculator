import React from 'react'

// Operator select component
const OperatorSelect = ({ value, onChange }) => (
    <select onChange={onChange} value={value}>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">x</option>
      <option value="/">÷</option>
    </select>
);
export default OperatorSelect
