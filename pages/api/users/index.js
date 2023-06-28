// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_users'
  });
  export default function handler(req, res) {
// simple query
connection.query(
    'SELECT * FROM `tbl_users`',
    function(err, results) {
      console.log(results); // results contains rows returned by server
      res.status(200).json({users: results});
    }
  );

}

// export default function handler(req, res) {
//     res.status(200).json([
//         { id: '1',firstname: 'Jetniphat', lastname: 'Biturongsakun' ,username:'Jet@gmail.com',password:'1234',status:'admin' },
//         { id: '2',firstname: 'เจตนิพัทธ์', lastname: 'บิตุรงค์สกุล' ,username:'Jet2@gmail.com',password:'1234',status:'user' }

//     ])
//   }
  