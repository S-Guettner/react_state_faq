import { useState } from "react"


function App() {

  const [count,countState] = useState(0)
  console.log(count)
  if(count % 2 === 0){
    return (
      <div>
      <div className="flex justify-between px-11 mt-11 p-4 border-2 mx-4 bg-slate-600">
        <p className="inline text-white">Why is React great?</p>
        <button onClick={() => {countState(count + 1)}} className="text-white">+</button>
      </div>
    </div>
    )
  }else{
  return (
    <div>
      <div className="flex justify-between px-11 mt-11 p-4 border-b-2 mx-4 bg-slate-600">
        <p className="inline text-white">Why is React great?</p>
        <button onClick={() => {countState(count + 1)}} className="text-white">-</button>
      </div>
      <div className="flex justify-between px-11 p-4  mx-4 bg-slate-600 ">
        <p className="text-white">Fast Learning Curve</p>
      </div>
    </div>
  )}
}

export default App
