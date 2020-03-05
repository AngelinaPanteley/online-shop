import React, { useEffect, useState } from "react";
import axios from "./axios-order";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [storeData, setStoreData] = useState();
  useEffect(() => {
    const getStoreData = async () => {
      const response = await axios.get("categories.json");
      console.log(response.data);
      setStoreData(response.data);
    };

    getStoreData();
  }, []);

  console.log(storeData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {storeData && <img src={storeData.category01.products.product01.image} alt="product" />}
        </a>
      </header>
    </div>
  );
}

export default App;
