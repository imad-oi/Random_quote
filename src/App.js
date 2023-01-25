import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState("") ; 
  
  const fetchAdvice = ()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then(Response=> setAdvice(Response.data.slip.advice))
    .catch((error)=>console.log(error))
  }
  return (
    <div className="App">
      <div className="advice">
         <button onClick={fetchAdvice}>give me advice</button>
         <p>{advice}</p> 
     </div>
    </div>
  );
}

export default App;
