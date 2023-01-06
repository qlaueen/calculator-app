import './styles.css';
import React, { useReducer } from 'react';

function reducer (state, action) {

}

function App() {
  const [state, dispatch] = useReducer(reducer, {});

  return(
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two">AC</button>
      <button className='special-btn'>DEL</button>
      <button className='special-btn'>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='special-btn'>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='special-btn'>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='special-btn'>-</button>
      <button className='special-btn'>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App;
