// Calculator.js

import React, { useState } from 'react';

function Calculator() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

   const handleOperatorChange = (e) => {
       setOperator(e.target.value);
     };
     const calculateResult = (num1, num2, operator) => {
        switch(operator) {
          case '+':
            return num1 + num2;
          case '-':
            return num1 - num2;
          case '*':
            return num1 * num2;
          case '/':
            if(num2 === 0) {
              alert('0で割ることはできません');
              return result; // Keeping the previous result.
            }
            return num1 / num2;
          default:
            // Handle invalid operators if necessary.
            return result;
        }
      };

      const handleCalculation = () => {
        const parsedInput1 = parseFloat(input1);
        const parsedInput2 = parseFloat(input2);

        if (isNaN(parsedInput1) || isNaN(parsedInput2)) {
          alert('無効な入力です');
          return;
        }

        const currentResult = calculateResult(parsedInput1, parsedInput2, operator);
        setResult(currentResult);
        setInput1('');
        setInput2('');
      };

  return (
    <div>
      <h1>計算機アプリチャレンジ</h1>
      <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)}/>
      <select onChange={handleOperatorChange} value={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">x</option>
        <option value="/">÷</option>
     </select>
      <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)}/>
      <button onClick={handleCalculation}>計算！！</button>
      <h2>結果: {result}</h2>
    </div>
  );
}

export default Calculator;
