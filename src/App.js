import React from 'react';
import ColorPicker from './colourpicker';
import './App.css'; 

const App = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange' , 'purple', 'cyan'];
  return (
    <div className="App">
      <ColorPicker colors={colors} /> {}
    </div>
  );
};
export default App;