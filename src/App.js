import Home from "./Home";
import Whitepaper from "./Whitepaper";
import Racemap from "./Racemap";
import Mint from "./Mint";
import Team from "./Team/Team";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";


function App() {
  return (
    
    <div className="mx-8 mt-4">
      <GlobalStyles />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="Whitepaper" element={<Whitepaper />} />
        <Route path="Racemap" element={ <Racemap /> } />
        <Route path="Mint" element={ <Mint /> } />
        <Route path="Team" element={ <Team /> } />
      </Routes>
    </div>
  );
}

export default App;
