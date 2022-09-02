import React from "react";

function Yesno()
{
    const [result,setResult]=React.useState("Yes")
    const handleClick=()=>{
      setResult("No")
      setInterval( handleClick2,1000);
     
    }
    const handleClick2=()=>{
      setResult("Yes")
    }
  
    return (
      <div className="state">
        <h1 className="state--title">Project1</h1>
          <div className='state--value' onClick={handleClick}>
              <h1 className='tryout'>{result}</h1>
          </div>
        
      </div>
  
     
  
    )




}

export default Yesno