import { useState } from "react";

function DropDown(){
    let [city,setCity]=useState('')
    return(<>
    <b>Select The City</b><br></br>
    <select onChange={(event)=>setCity(event.target.value)}>
  <option value='Chennai'>Chennai</option>
  <option value='Banglore'>Banglore</option>
  <option value='Thanjavur'>Thanjavur</option>
  <option value='CBE'>CBE</option>
    </select><br></br>
    {`You have Selcted ${city}`}
    </>)
}
export default DropDown