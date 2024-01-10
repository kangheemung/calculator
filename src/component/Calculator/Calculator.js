// Calculator.js

import React, { useState } from 'react';
import NumberInput from './NumberInput';
import OperatorSelect from './OperatorSelect';
import NumButton from './NumButton';
import ResultDisplay from './ResultDisplay';

function Calculator({ onCalculation }) {
  const [input1, setInput1] = useState('0');
　const [input2, setInput2] = useState('0');
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
      };
      const handleSecondButtonClick = () => {
        const parsedInput1 = parseFloat(input1);
        const parsedInput2 = parseFloat(input2);

        if (isNaN(parsedInput1) || isNaN(parsedInput2)) {
          alert('無効な入力です');
          return;
        }

        const calculationResult = calculateResult(parsedInput1, parsedInput2, operator);
        onCalculation(calculationResult); // Update the cost in the parent component with the calculated value.

        // Now reset the input fields
        setInput1('');
        setInput2('');
        setResult(0); // Optionally reset the result if needed.
      };
  return (
    <div>
      <h1>計算機アプリチャレンジ</h1>
      <NumberInput type="number" value={input1} onChange={(e) => setInput1(e.target.value)} />
      <OperatorSelect value={operator} onChange={handleOperatorChange} />
      <NumberInput type="number" value={input2} onChange={(e) => setInput2(e.target.value)} />
      <NumButton onClick={handleCalculation}>計算！！</NumButton>
      <ResultDisplay result={result} />
      <NumButton onClick={handleSecondButtonClick}>Second Button</NumButton>
    </div>
  );
}

export default Calculator;
