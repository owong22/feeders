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
  const [feederNames, setFeederNames] = useState([]);

  const getFeederData = async () => {
    const response = await fetch(urlAllData);
    const data = await response.json();
    console.log(data);
    setFeederData(data);
  };

  const getFeederKeys = () => {
    let feederNameArr = [];
    feederNameArr = feederData.map((current) => {
      let tempVal = Object.keys(current)[0];
      // setFeederNames([...feederNames, tempVal]);
      // console.log(Object.keys(current)[0]);
      return tempVal;
    });

    setFeederNames(feederNameArr);
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

  useEffect(() => {
    // console.log(Object.keys(feederData[0]));
    // console.log(feederData[0]);
    // setFeederNames([...feederNames, Object.keys(feederData[0])]);

    getFeederKeys();
  }, [feederData]);

  return (
    <div>
      <h1>Feeder Data</h1>
      <Table feederData={feederData} feederNames={feederNames} />
    </div>
  );
}

export default App;
