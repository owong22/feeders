import { useEffect, useState, useRef } from "react";
import Table from "./Table";
import "./App.css";
import Filter from "./Filter";
import Invalid from "./Invalid";

const urlAllData = "http://localhost:3000/allData";
const urlRMC = "http://localhost:3000/RMC";
const urlEMT = "http://localhost:3000/EMT";

function App() {
  const [urlValue, setUrlValue] = useState("");
  const [feederData, setFeederData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertValue, setAlertValue] = useState("Invalid");
  const [RMCData, setRMCData] = useState([]);
  const [EMTData, setEMTData] = useState([]);
  const [wireData, setWireData] = useState([]);
  const ignoreFirstRender = useRef(true);
  const firstPageLoad = useRef(true);
  const originalFeederData = useRef([]);
  const filterURL = `http://localhost:3000/${urlValue}`;

  const getFeederData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setFeederData(data);
    if (firstPageLoad.current) {
      originalFeederData.current = data;
      firstPageLoad.current = false;
    }
  };

  const filterDesiredAmps = (desiredAmps) => {
    if (desiredAmps == "") {
      setFeederData(originalFeederData.current);
    } else if (desiredAmps.includes("NG")) {
      setUrlValue(desiredAmps);
    } else if (isNaN(desiredAmps)) {
      setFeederData(originalFeederData.current);
    } else if (desiredAmps > 4000 || desiredAmps < 0) {
      setAlertValue("Invalid Amperage");
      setShowAlert(true);
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
    if (ignoreFirstRender.current) {
      ignoreFirstRender.current = false;
      return;
    }
    getFeederData(filterURL);
    // getEMTData();
    // getWireData();
  }, [urlValue]);

  useEffect(() => {
    getFeederData(urlRMC);
    // getEMTData();
    // getWireData();
  }, []);

  if (showAlert) {
    return (
      <Invalid alertValue={alertValue} setShowAlert={setShowAlert}></Invalid>
    );
  }

  return (
    <div>
      <Filter filterDesiredAmps={filterDesiredAmps}></Filter>
      <div className="flex justify-center">
        <Table feederData={feederData} />
      </div>
    </div>
  );
}

export default App;
