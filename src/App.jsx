import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Juegos from "./Juegos";
import Videos from "./Videos";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jueguitos" element={<Juegos />} />
        <Route path="/videitos" element={<Videos />} />
      </Routes>
    </Router>
  );
};

export default App;
