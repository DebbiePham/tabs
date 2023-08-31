import Tabs from './components/Tabs';
import './App.css';
import React, {useState} from 'react';

function App() {

  const items = [
    {tab: 'Tab 1', content: 'Tab 1 content is in here'},
    {tab: 'Tab 2', content: 'Also this content is for Tab 2'},
    {tab: 'Tab 3', content: 'You just clicked Tab 3'}
  ]
  return (
    <div className="App">
      <Tabs itemArr = {items} />
    </div>
  );
}

export default App;
