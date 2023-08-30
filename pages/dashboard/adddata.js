
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import Link from "next/link";


export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }
    console.log("studentid:", jsonData.studentid);
    console.log("firstname:", jsonData.firstname);
    console.log("lastname:", jsonData.lastname);
    console.log("username:", jsonData.username);
    console.log("password:", jsonData.password);
    console.log("status:", jsonData.status);
    fetch('https://48ca-223-24-162-163.ngrok-free.app/api/users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }; //end handleSubmit


  // if (session) {
    return (
      <>

<nav class="navbar navbar-dark bg-danger">
  {/* <div className="container-fluid">
  <div className="col">
  <div align="right"> Signed in as {session.user.fname} {session.user.lname} <button  className="btn btn-danger" onClick={() => signOut()}>Sign out</button> </div>
  </div>
  </div> */}
</nav>
<br></br>

<div className="card mx-auto" style={{ width: "500px" }}>

<div class="card-body">
    <h5 class="card-title">Add data</h5>

            <form onSubmit={handleSubmit}>
              <label htmlFor="studentID">StudentID:</label>
              <input type="text" id="txt_studentid" name="txt_studentid" className="form-control" required />
              <label htmlFor="firstname">Firstname:</label>
              <input type="text" id="txt_firstname" name="txt_firstname" className="form-control" required />
              <label htmlFor="lastname">Lastname:</label>
              <input type="text" id="txt_lastname" name="txt_lastname" className="form-control" required />
              <label htmlFor="username">Username:</label>
              <input type="text" id="txt_username" name="txt_username" className="form-control" required />
              <label htmlFor="password">Password:</label>
              <input type="txt_password" id="txt_password" name="txt_password" className="form-control" required />
              <label htmlFor="status">Status:</label>
              <input type="text" id="txt_status" name="txt_status" className="form-control" required />

              <br></br>

              <div align="center">  
              <button type="submit" className="btn btn-success text-n">save</button>
              <button className="btn btn-danger text-n"><Link href="." >back</Link></button>
               </div>
            
            </form>
            </div>
            </div>
      </>
    )
  }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }