import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';

function App() {
  return (
    <div>
      <MenuSuperior/>
      <Resumo/>
    </div>
  );
}

export default App;
