import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LogOut({ user, setUser }) {
    let navigate = useNavigate()

    // console.log(user.name)

    // function handleLogout () {

    //     fetch(`3000http://127.0.0.1:/logout`, {
    //         method: "DELETE"
    //     })
    //         .then((res)=>{
    //             if (res.ok){
    //                 setUser(null)
    //             }
    //         })
    //     navigate('/signup')
    
    // }

    return (
        <div>
            {/* <Link to="/signout" onClick={()=> handleLogout() }>Sign Out</Link> */}
        </div>
    )
}

export default LogOut;