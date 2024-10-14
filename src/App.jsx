import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
