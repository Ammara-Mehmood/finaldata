import React, { useState } from 'react'
import "./index.css";

function Create() {
  const [value,setvalue]=useState(null)
  const [newform,setformdata]=useState(false)
 const [data,setdata]=useState([{
    text:"card1",
  },
  {
    text:"card2"
  },
  {
    text:"card3"
  }
]) 
const getvalue=(e)=>{
  setvalue(e.target.value)
}
const handlechange=(e,index)=>{
setdata(e[index].text)
}

  return (
    <div>
    <div >
    {data.map((e,index)=>{
     return (<div>
       <h1 className="cardsData">{e.text}</h1>
      <button className="newdata" onClick={handlechange}>click me</button>
     </div>
     )
    })}
    <input  onChange={getvalue} value={data[1].text}></input><br/>
    {newform?
    <h1>{value}</h1>
    :""
  }
    <button type="submit" onClick={()=>setformdata(true)} value={data[1].text}>submit</button>
    </div>
        </div>
        
  )
}

export default Create