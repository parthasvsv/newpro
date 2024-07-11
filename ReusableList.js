function ReusableList(props){
let title=props.heading//heading is an attribute of parent
let values=props.data // data is an attribute in the parent 
return(<>
<h3>{title}</h3>
<ul>
    {values?values.map((value)=><li>{value}</li>):''}
</ul>   

</>)


}
export default ReusableList