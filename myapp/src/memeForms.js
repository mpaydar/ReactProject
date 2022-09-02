import React from "react"

function MemeForms()
{

    const [starWarsData,setStartWarsData]=React.useState({})
    function getMemeImage(){
        fetch("https://swapi.dev/api/people/1")
        .then(res=>{res.json()})
        .then(data=>console.log(data))


    }


    return (
       <div className="genForms">
         <input className="input1" type="txt" placeholder="Top Text"></input>
         <input className="input2" type="txt" placeholder="Bottom Text"></input>
         <button className="genButton" onClick={getMemeImage}>Get a new meme Image</button>
         <pre>{JSON.stringify(starWarsData,null,2)}</pre>
       </div>

    )
        

}


export default MemeForms