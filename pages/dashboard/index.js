
import { useSession, signIn, signOut } from "next-auth/react"

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/users')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default function Component({ posts }) {
  const { data: session } = useSession()

  if (session) {
    return (
      <>

<nav class="navbar navbar-dark bg-danger">
  <div className="container-fluid">
  <div className="col">
  <div align="right"> Signed in as {session.user.fname} {session.user.lname} <button  className="btn btn-danger" onClick={() => signOut()}>Sign out</button> </div>
  </div>
  </div>
</nav>
<br></br>

        <div className="container">
          <div className="row">
          </div>
          <div align="right">  <button className="btn btn-success text-n">Add Data</button> {/* ปุ่ม Delete */} </div>
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
                        <button className="btn btn-danger">Delete</button> {/* ปุ่ม Delete */}
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
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}