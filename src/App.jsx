import { useState } from "react"


function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className = "w-full h-screen duration-200"
    style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setcolor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
           <button 
           onClick={() => setcolor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
           <button 
           onClick={() => setcolor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
           <button 
           onClick={() => setcolor("Black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
           <button 
           onClick={() => setcolor("Pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
           <button 
           onClick={() => setcolor("white")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Auqa"}}
          >white</button>
        </div>
      </div>
    </div>
  )
}

export default App
