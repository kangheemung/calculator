
import './App.css';
import Header from './Header';
import Input from './component/Input';
import Button from './component/Button';
import { useState } from 'react'
import Calculator from './component/Calculator';

function App() {
  const [name, setName] = useState('');
  const [tempName, setTempName] = useState('');

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

  return (
  <>
    <Header name = {name}/>
    <Input value = {tempName} onNameChange={setTempName} onKeyPress={handleKeyPress} />
    <Button onClick = {handleButtonClick} />
    <Calculator />

  </>
  );
}

export default App;
