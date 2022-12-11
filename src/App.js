import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import CallbackPage from "./pages/CallbackPage";
import WrappedComponents1 from "./pages/WrappedComponents1";
import RefsPage from "./pages/RefsPage";
import TimerPage from "./pages/TimerPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootPage />} />
          <Route path="/callback-props" element={<CallbackPage />} />
          <Route path="/wrap-one" element={<WrappedComponents1 />} />
          <Route path="/refs" element={<RefsPage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
