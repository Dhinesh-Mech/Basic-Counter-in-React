import React,{useState} from "react";

function App() {
  const[Number,setcount] = useState(0)
  return (
    <div className="App">
      <div className="card">
        <h1>Counter</h1>
        <div className="body">
          <h2>{Number}</h2>
          <button onClick={() => setcount(Number + 1)}>Increment</button>
          <button onClick={() => setcount(Number - 1)}>Decrement</button>
          <button onClick={() => setcount(0)}>Reset</button>
          

        </div>
      </div>
      
    </div>
  );
}

export default App;
