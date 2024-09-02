import { useState } from "react";
import "./App.css"
import CardContainer from "./components/CardContainer";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import {data} from "./helper/data"

function App() {
  const [search, setSearch] = useState("");
  const handleChange=(searchTerm)=>setSearch(searchTerm);
  return (
    <div className="App">
    <MyNavbar onChange={handleChange} />
    <CardContainer data={data} search={search} />
    <MyFooter/>
    </div>
  );
}

export default App;
