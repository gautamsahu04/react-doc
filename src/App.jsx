import React from "react";
import Backgound from "./components/Backgound";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className=" relative w-full h-screen bg-zinc-900" >
      <Backgound/>
      <Foreground/>

      </div>
  );
};

export default App;
