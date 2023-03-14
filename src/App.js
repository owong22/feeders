import { useEffect, useState, useRef } from "react";
import Table from "./Table";
import "./App.css";
import Filter from "./Filter";

const urlAllData = "http://localhost:3000/allData";
const urlRMC = "http://localhost:3000/RMC";
const urlEMT = "http://localhost:3000/EMT";

function App() {
  const [feederData, setFeederData] = useState([]);
  const [RMCData, setRMCData] = useState([]);
  const [EMTData, setEMTData] = useState([]);
  const [wireData, setWireData] = useState([]);
  const originalFeederData = useRef([]);
  // const [desiredAMPS, setDesiredAMPS] = useState(3);

  const getFeederData = async () => {
    const response = await fetch(urlRMC);
    const data = await response.json();
    // console.log(data);
    setFeederData(data);
    originalFeederData.current = data;
  };

  const filterDesiredAmps = (desiredAmps) => {
    if (desiredAmps == "") {
      setFeederData(originalFeederData.current);
      console.log(originalFeederData.current);
    } else {
      let filteredArray = feederData.find((current) => {
        // console.log(Object.values(current)[0].AMPS);
        // console.log(desiredAmps);
        return Object.values(current)[0].AMPS >= desiredAmps;
      });
      setFeederData([filteredArray]);
    }
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
      <Filter filterDesiredAmps={filterDesiredAmps}></Filter>
      <div className="flex justify-center">
        <Table feederData={feederData} />
      </div>
    </div>
  );
}

export default App;
