function User(){
    let user=
        {
       'name':'john',
       'age':20,
       'Gender':'Male',
       'Location':'Chennai'
        }
        return(<>
        Name:{user.name}<br></br>
        Age:{user.age}<br></br>
        Gender:{user.Gender}<br></br>
        Location:{user.Location}
        </>)
    
}
export default User