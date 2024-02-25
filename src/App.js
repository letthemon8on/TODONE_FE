import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="WebFrame">
      <div className="Frame">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
