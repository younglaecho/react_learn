import React, {useState} from 'react'
import axios from 'axios'
import './App.css';


function App() {
  const [data, setData] = useState(null)
  const onClick = async () =>{
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=460202b9f6ca4820b3e75a60ca9a58bb")
      setData(response);
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea col={30} rows={20} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
    </div>
  );
}

export default App;
