import { useState } from 'react';
import './App.css';
import Board from "./components/Board";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h3>Tic Tac Toe</h3>
      <Board/>
    </Container>
  );
}

export default App;
