import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GarageParis from "./pages/templates/GarageParis";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/garage-paris" element={<GarageParis />} />
      </Routes>
    </Router>
  );
}
