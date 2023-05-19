import './App.css';
import React, {useState} from 'react';


function App() {

  const [temp, setTemp] = useState(10);
  const [color, setColor] = useState('cold');
  const text = temp >= 15 ? 'hot' : 'cold';

  const increase = () => {
    if(temp >= 30) return;
    const newTemp = temp + 1;
    if(newTemp >= 15) {
      setColor('hot')
    }

    setTemp(newTemp)
  }

  const decrease = () =>{
    if(temp <= 0) return;
    const newTemp = temp -1;
    if(newTemp < 15) {
      setColor('cold')
    }

    setTemp(newTemp)
  }
  return (
    <div className="container">
      <div className='tempCont'>
        <div className={`tempShow ${color} ${text}`}>{temp}°C</div>
      </div>
      <p>{text}</p>
      <div className='btn'>
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    </div>
  );
}

export default App;
