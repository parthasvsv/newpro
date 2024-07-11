import { useState } from "react";

function FilteringNames(){
     
    let [names,setNames]=useState(['Jamesh','Adam','Smith','Clara','Tom','John','Alice'])
    
    let[searchValue,setSearchValue]=useState('')

    const filter=()=>{
     if(searchValue===''){
        setNames([...names])
     }
     else{
        let filtername=names.filter((name)=>name.includes(searchValue))
        setNames([...filtername]) //to change the state of names array 
     }
    }

    const handle=(event)=>{
   setSearchValue(event.target.value)
   filter()
    }
    return(<>
    <b> Search : </b><input type="text" value={searchValue} onChange={handle}></input>

<b>List of names</b><br></br>
<ul>
    {names?names.map((name)=><li>{name}</li>):''}

</ul>
    </>)
}
export default FilteringNames