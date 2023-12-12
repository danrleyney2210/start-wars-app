import { Home } from "modules/app";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
