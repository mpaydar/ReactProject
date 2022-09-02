import React from 'react'
import PlusComponent from './plusComponent'
function DigitalCounter()
{
    const [increase,setIncrease]=React.useState(0)
    const handleClick=()=>{
   setIncrease(prevCount => prevCount + 1)
    }

    const handleClick2=()=>{
        setIncrease(prevCount=>prevCount-1)
    }
    


return(
    <>
    
    <div className='digitalformat'>
    <h1 className='counter'> {increase} </h1>
    <div className='pluscontainer' onClick={handleClick}>
            <h2 className='plusObject'> + </h2>
    </div>

   


    <div className='minizecontainer' onClick={handleClick2}>
            <h2 className='minizeObject'> - </h2>
    </div>

    


    </div>
    </>
   
   
)
  


}

export default DigitalCounter