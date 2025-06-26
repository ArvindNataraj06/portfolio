import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
// import Techologies from "./componets/Techologies";
import Projects from "./componets/Projects";
import Personaldata from "./componets/Personaldata";
import Home from "./componets/Home";
import Aboutme from "./componets/Aboutme";
import Card from "./componets/Card";


const App = () => {
  const [isOn, setIsOn] = useState(false);



  return (
    <div className="w-full pb-5 h-full overflow-x-hidden overflow-y-auto text-neutral-300 antialiased">
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-350">
          {isOn ? (
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          ) : (
<div class="absolute inset-0 -z-10 h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          )}
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-5">
        <Navbar />
        <div className="hover:ml-[28px]">
          <Home />
        </div>
        <Hero />
        <Aboutme />
        {/* <Techologies /> */}
        <Projects />
        <Personaldata />
        {/* <Card/> */}
      </div>
    </div>
  );
};

export default App;
