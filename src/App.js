import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';

function App() {
  return (
    <div>
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
