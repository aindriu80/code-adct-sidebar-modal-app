import { useState } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
import './App.css';

function App() {
  return (
    <>
      <h2>Sidebar Modal App</h2>
      <Modal />
      <Sidebar />
      {/* <Home /> */}
    </>
  );
}

export default App;
