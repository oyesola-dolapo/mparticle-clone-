import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Home/Home.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }

    const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
