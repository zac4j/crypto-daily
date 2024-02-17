import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TrendsScreen from "./screens/TrendsScreen";
import TopsScreen from "./screens/TopsScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<TrendsScreen />} />
          <Route path="/trends" element={<TrendsScreen />} />
          <Route path="/tops" element={<TopsScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
