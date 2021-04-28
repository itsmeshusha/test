import React, {useState} from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState<number>(0);

  const foo = () => {
    setNum(num+1);
    console.log(num)
  }


  return (
    <div className="App">
      {num} <button onClick={foo}>+</button>
    </div>
  );
}

export default App;
