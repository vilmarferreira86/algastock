import React, { useState } from 'react';
import Button from '../shared/Button';
import Header from '../Header';
import './App.css';
import Container from '../shared/Container';
import Input from '../shared/Input';

function TestComponent() {
  return <img width={16} src='https://w7.pngwing.com/pngs/284/914/png-transparent-magnifying-glass-loupe-search-magnify-lense-detect-find-thumbnail.png' alt='search icon'/>
}
  

function App() {

  const [street, setStreet] = useState('')
  return (
    <div className="App">
      <Header title='AlgaStock'/>

      <Container>
        <Button appendIcon={<TestComponent/>} >
          Botão
        </Button>
        <Input label='Street'
          placeholder='E.g.: 15th Avenue'
          value={street}
          onChange={e => setStreet(e.target.value)}/>
      </Container>
    </div>
  );
}

export default App;
