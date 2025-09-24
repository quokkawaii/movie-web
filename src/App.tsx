import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  const FONTAWESOME_KEY_FETCH = async () => {
    await fetch(import.meta.env.VITE_FONTAWESOME_KEY);
  };
  FONTAWESOME_KEY_FETCH();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:details_id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
