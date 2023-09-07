
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps(req) {
    const id = req.query;
    const res = await fetch('https://frontendz.vercel.app//api/users?id=' + id, {
      method: 'GET',
    })
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }

export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter();

  const handleUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
        id: data.get('txt_studentid'),

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
    fetch('https://frontendz.vercel.app//api/users', {
        method: 'PUT', // or 'PUT'
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

    <form onSubmit={handleUpdate}>
           {posts.users.map((post, i) => (
            <>

    <div className="form-group">
            <label></label>
            <input
              type="hidden"
              name="txt_studentid"
              id="txt_studentid"
              className="form-control"
              defaultValue={post.id}
            />
          </div>

          <div className="form-group">
            <label>Student ID:</label>
            <input
              type="text"
              name="txt_studentid"
              id="txt_studentid"
              className="form-control"
              defaultValue={post.id}
              disabled
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="txt_firstname"
              id="txt_firstname"
              className="form-control"
              defaultValue={post.firstname}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="txt_lastname"
              id="txt_lastname"
              className="form-control"
              defaultValue={post.lastname}
              required
            />
          </div>
          <div className="form-group">
            <label>username:</label>
            <input
              type="text"
              name="txt_username"
              id="txt_username"
              className="form-control"
              defaultValue={post.username}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="text"
              name="txt_password"
              id="txt_password"
              className="form-control"
              defaultValue={post.password}
              required
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input
              type="text"
              name="txt_status"
              id="txt_status"
              className="form-control"
              defaultValue={post.status}
              placeholder="Status"
              required
            />
          </div>
          <br></br>
          <tr>
            <td>
          <button type="submit" className="btn btn-success">SAVE</button> {/* */}
          <Link href="./" >  <button type="submit" className="btn btn-warning">Back</button></Link>{/* */}
          </td>
          </tr>
          </>
                    ))}
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