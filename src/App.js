
import './App.css';
import Header from './Header';
import Input from './component/Input';
import Button from './component/Button';
import { useState } from 'react'
import Calculator from './component/Calculator/Calculator';

function App() {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');
  const [cost,setCost]=useState(30000);

  const  handleButtonClick = () => {
    setName(tempName);//ボタンをクリックしたらheader表示されます。
    setTempName('');
  };// 送信後に入力フィールドをクリアします

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleButtonClick();
      e.preventDefault();//エンターしたらインプットするところの内容は消えます
    }
  }
  const updateRemainingAmount = (calculationResult) => {
    setCost((prevCost) => {
      // Ensure that we're not deducting more than the available cost.
      const updatedCost = prevCost - calculationResult;
      return updatedCost < 0 ? 0 : updatedCost;
    });
  };

  return (
  <>
    <Header name = {name} cost = {cost} />
    <Input value = {tempName} onNameChange={setTempName} onKeyPress={handleKeyPress} />
    <Button onClick = {handleButtonClick} />
    <Calculator onCalculation={updateRemainingAmount} />
    

  </>
  );
}

export default App;
