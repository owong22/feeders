import { useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/allData";

function App() {
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
