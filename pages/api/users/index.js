// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  });
  export default function handler(req, res) {
    const { firstname,lastname,username,password,status} = req.body
    if (req.method === 'GET'){
      connection.query(
        'SELECT * FROM `tbl_users`',
        function(err, results) {
          res.status(200).json({users: results});
        }
      );
    }else if (req.method === 'POST'){
      const result = connection.query("INSERT INTO tbl_users SET ?",{
        firstname,lastname,username,password,status
      });
      return res.status(200).json({...req.body, id: result.insertId});

    }else if (req.method === 'PUT'){

      try{
        const result = connection.query("UPDATE tbl_users SET ? WHERE id = ?",[
          req.body,
          req.body.id,
        ]);
        return res.status(200).json({...req.body, id: result.insertId});
      } catch (error){
        return res.status(500).json({ message: error.message});
      }

    }else{

      try{
        const result = connection.query("DELETE FROM tbl_users  WHERE id = ?",[req.query.id]);
        return res.status(200).json({...req.body, id: result.insertId});
      } catch (error){
        return res.status(500).json({ message: error.message});
      }   
     }
  }