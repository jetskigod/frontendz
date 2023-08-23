// import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/router";
// import Swal from 'sweetalert2';

export async function getServerSideProps() {
  const res = await fetch('https://acdf-223-24-168-145.ngrok-free.app/api/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  };
}



export default function Component({ posts }) {
  // const { data: session } = useSession()
  const router = useRouter()

    const handleDelete = async (id) => {
      // const result = await Swal.fire({
      //   title: 'Are you sure?',
      //   text: "You won't be able to revert this!",
      //   icon: 'warning',
      //   showCancelButton: true,
      //   confirmButtonColor: '#3085d6',
      //   cancelButtonColor: '#d33',
      //   confirmButtonText: 'Yes, delete it!'
      // });
    
      // if (result.isConfirmed) {
        // Perform the deletion using fetch
         fetch('https://e138-2405-9800-b911-406-e1ae-94a1-c523-b6a1.ngrok-free.app/api/users?id=' + id, {
          method: 'DELETE',
        })
    
        // Reload the page
       return router.push('/dashboard');
    
        // Show success message
      //   Swal.fire(
      //     'Deleted!',
      //     'Your file has been deleted.',
      //     'success'
      //   );
      // }
    };

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

        <div className="container">
          <div className="row">
          </div>
          <div align="right">  <button className="btn btn-success text-n"><Link href="./dashboard/adddata" >Add Data</Link></button> </div>
          <br></br>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr className="bg-warning">
                    <th>No</th>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Password</th>
                    <th>status</th>
                    <th>edit/delete</th> {/* เพิ่มคอลัมน์ Action */}
                  </tr>
                </thead>
                <tbody>
                  {posts.users.map((post, i) => (
                    <tr key={post.id}>
                      <td>{i+1}</td>
                      <td>{post.studentid}</td>
                      <td>{post.firstname}</td>
                      <td>{post.lastname}</td>
                      <td>{post.password}</td>
                      <td>{post.status}</td>
                      <td>
                        <button className="btn btn-warning">Edit</button> {/* ปุ่ม Edit */}
                        <button className="btn btn-danger" onClick={()=> handleDelete(post.id)}>Delete</button> {/* ปุ่ม Delete */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  // }

   return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
   }