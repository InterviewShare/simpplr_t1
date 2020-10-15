import React, { useState, useEffect } from 'react';
import axios from "axios";
import Loader from 'react-loader-spinner'

import './App.css';
import Cards from "./Components/Cards";
import Header from "./Components/Header";

const App = () => {
  
  const [shops, setShops] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async() => {
    try{
      const result = await axios.get('http://localhost:3001/api/v1/icecreams');
      const data = result.data.data
      console.log(result.data.message);
      if(data){
        setShops(data);
        setLoading(false);
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={loading}
        style={{marginTop:'150px'}}
      />
      {
        loading?'' :(<Cards items={shops}/>)
      }
      
    </div>
  );
}

export default App;
