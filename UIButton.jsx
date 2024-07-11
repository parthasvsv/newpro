import'./sample.css'
function UIButton(){
    const greet=()=>{
        alert('Hello...')
    }
    function saybye(){
        alert('Bye')
    }

return(
    <>
<button className='btn-class' onClick={()=>greet()}>CLICK ME</button><br></br>
<button onClick={()=>saybye()}>CLICK</button>
    </>
)

}
export default UIButton