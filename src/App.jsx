import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen flex duration-100 items-center justify-center" style={{backgroundColor: color}}
      >
        <div className="flex flex-wrap w-2/3 mt-10 justify-center rounded-xl gap-2">
          <button
          onClick={()=> setColor("red")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "red"}}>red</button>

          <button
          onClick={()=> setColor("green")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "green"}}>Green</button>

          <button 
          onClick={()=> setColor("white")}
          className="gap-2 outline-none px-4 m-1 text-black rounded-xl shadow-lg" style={{backgroundColor: "white"}}>White</button>

          <button 
          onClick={()=> setColor("orange")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
          
          <button 
          onClick={()=> setColor("purple")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>

          <button 
          onClick={()=> setColor("blue")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>

          <button 
          onClick={()=> setColor("brown")}
          className="gap-2 outline-none px-4 m-1 text-white rounded-xl shadow-lg" style={{backgroundColor: "brown"}}>Brown</button>

        </div>
      </div>
    </>
  );
}

export default App;
