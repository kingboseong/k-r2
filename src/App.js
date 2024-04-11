import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Subway from "./component/Subway";
import Nav from "./component/Nav";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/subway" element={<Subway />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
