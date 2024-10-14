import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Home/Home.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  useEffect(() => {
    const scrollPosition = localStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
    }
  }, []);
  
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
