import Home from "./Home";
import Whitepaper from "./Whitepaper";
import Racemap from "./Racemap";
import Mint from "./Mint";
import Team from "./Team/Team";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import {VscDebugStart} from 'react-icons/vsc'
import {VscDebugPause} from 'react-icons/vsc'
import audi from "./audio/horse.mp3"

function App() {

  const f = () => {
    const audio = document.querySelector("audio");
  const button = document.querySelector("#button");
   
    var element = document.querySelector("#icon");
    var element2 = document.querySelector("#icon2");
   

    
      
      element2.classList.add("hidden")
    

  button.addEventListener("click", () => {
    if (audio.paused) {
      
      audio.volume = 0.8;
      audio.play();
      audio.loop = true;
      element.classList.add("hidden")
      element2.classList.remove("hidden")
    } else {
      
      audio.pause();
      element.classList.remove("hidden")
      element2.classList.add("hidden")
    }

  })
  }
  setTimeout(
    f,1
  )


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
      <div className="hidden md:block fixed bottom-12 left-3 px-8 z-5"><div class=" relative "> 
        <button className="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 h-10 w-10 border-4  rounded-full overflow-hidden bg-white  border-olive" id='button'>
        <VscDebugStart id='icon' className="w-[23px] h-[23px] "/>
        <VscDebugPause id='icon2' className="w-[23px] h-[23px] hidden "/>
        </button>
        <audio src={audi} id="my_audio" loop="loop"></audio>
   
      </div>
      </div>
    </div>
  );
}

export default App;
