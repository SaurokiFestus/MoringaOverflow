// import React, {useState, useEffect} from "react";


// function Profile({user}) {

//   const [formData, setFormData] = useState({
//     full_name: '',
//     email: '',
//     age: '',
//     bio: '',
//   });
//   const flowColor = { backgroundColor: "#f1f2f3" };
//   const [userProfile, setProfile] = useState({});

//   useEffect(() => {
//     fetch(`/profiles/${user.id}`)
//     .then(r => {
//       if (r.ok) {
//         r.json().then((user) => {
//           setProfile(user)
          
//         });
//       }
//     });
//   }, [])

//   console.log(user)

//   function handleUpdateUser() {
//     fetch(`/profiles/${user.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       full_name: formData.full_name,
//       email: formData.email,
//       age: formData.age,
//       bio: formData.bio
//     }),
//   })
//   }

//   function deleteProfile(id){
//     fetch(`/users/${id}`,{
//         method: "DELETE",
//     })
//   }

//   function handleChange(e){
//     setFormData({
//         ...formData, [e.target.name]: e.target.value,
//     });
//   }

//   return (
//     <div className="container-fluid vh-100" style={flowColor}>
//       <div className="d-flex justify-content-center align-items-center ">
//         <div>
//           <button type="submit" className="btn bg-light mx-5 mt-4">
//             Edit Your Profile
//           </button>
//           <form className="bg-light rounded  p-sm-3 mx-5 my-4">
//             <div className="mb-3 ">
//               <h1><i class="bi bi-person-circle"></i></h1>
//             </div>

//             <div className="mb-3">
//               <label for="exampleInputEmail1" className="form-label">
//                 Display name
//               </label>
//               <input type="text" className="form-control">
//                 {userProfile?.full_name}
//                 </input>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Email
//               </label>
//               <input type="text" className="form-control">
//                 {userProfile?.email}
//                 </input>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Age
//               </label>
//               <input type="text" className="form-control">
//                 {userProfile?.age}
//                 </input>
//             </div>
//             <div className="mb-3">
//               <label for="exampleInputPassword1" className="form-label">
//                 Bio
//               </label>
//               <input type="text" className="form-control">
//                 {userProfile?.bio}
//                 </input>
//             </div>
            
//             <div className="mb-3 form-check"></div>
//             <button type="submit" className="btn bg-info mb-4 ">
//               Save Profile
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
