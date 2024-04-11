import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./component/Home";
import Login from "./component/Login";
import Subway from "./component/Subway";
import Nav from "./component/Nav";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div className="w-full h-screen max-w-screen-lg mx-auto">
          <div className="w-full">
            <Nav />
          </div>
          <div className="grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/subway" element={<Subway />} />
            </Routes>
          </div>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
