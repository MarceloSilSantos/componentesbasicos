import React, {useState} from 'react';
import Button from './components/Button';
import Input from './components/Input';
import TextComponent from './components/TextComponent';
import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { Link } from 'react-router-dom';


const App =() =>{
  const handleClick =() => {
    alert('you clicked me');
      };
      const [InputValue, setInputValue] = useState('');
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
  return (
    <div className="App">
      <Button onClick={handleClick} label = "Clique Aqui" className= "btn-primary"></Button>
      <Input value={InputValue} onChange={handleChange} label="Digite aqui" className="input"></Input>

      <p>O valor digitado é {InputValue}</p>
      <br />
      <h1>Abaixo exemplos de componente de texto</h1>
      <TextComponent text="Texto de teste" />
      <TextComponent text="Outro texto" />
      <TextComponent text="Mais um texto" />
      

      
    </div>
  );
}

export default App;
