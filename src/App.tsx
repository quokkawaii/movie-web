import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Category from "./pages/Category";

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
        <Route path="category/:category_title" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
