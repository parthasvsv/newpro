import { useState } from "react";

function NameList(){
    let [names,setName]=useState([])
    let [inputName,setInputName]=useState('')

    const addName=()=>{
        names.push(inputName)//push the entred name into on arry
        setName([...names]) //shallow copy -passing differnt reference to setNames funciton
    }

    return(<>
    <b>ENter Name</b><br></br>
    <input type="text" value={inputName} onChange={(event)=>setInputName(event.target.value)}></input>
    <br></br>
    <button onClick={()=>addName()}>Add</button>
    <b> list of Names</b>
    <ul>
        {names?names.map((name)=><li>{name}</li>): ''}

    </ul>
    </>)
}
export default NameList