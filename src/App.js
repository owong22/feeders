import { useEffect, useState } from "react";
import Table from "./Table";
import "./App.css";

const urlAllData = "http://localhost:3000/allData";
const urlRMC = "http://localhost:3000/RMC";
const urlEMT = "http://localhost:3000/EMT";
const urlWires = "http://localhost:3000/Wires";

function App() {
  const [feederData, setFeederData] = useState([]);
  const [RMCData, setRMCData] = useState([]);
  const [EMTData, setEMTData] = useState([]);
  const [wireData, setWireData] = useState([]);

  const getFeederData = async () => {
    const response = await fetch(urlAllData);
    const data = await response.json();
    console.log(data);
    setFeederData(data);
  };
  // const getEMTData = async () => {
  //   const response = await fetch(urlEMT);

  //   const data = await response.json();
  //   console.log(data);
  //   setEMTData(data);
  // };
  // const getWireData = async () => {
  //   const response = await fetch(urlWires);

  //   const data = await response.json();
  //   console.log(data);
  //   setWireData(data);
  // };

  useEffect(() => {
    getFeederData();
    // getEMTData();
    // getWireData();
  }, []);

  return (
    <div>
      <h1>Feeder Data</h1>
      <Table feederData={feederData} />
    </div>
  );
}

export default App;
