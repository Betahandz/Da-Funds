import Dropdown from "./Components/Dropdown/Dropdown";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Team from "./Components/Team/Team";

const App = () => {
  return(
    <>
      <Dropdown />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </>
  )
}

export default App;