const db = require('./db');
const helper = require('../helper');

async function getUsers() {
    const rows = await db.query(
        `SELECT *
         FROM basic_registration_system.user_data`
    );
    const data = helper.emptyOrRows(rows);

    return data;
}

async function register(user_data) {
    console.log(user_data)
    const result = await db.query(
        `INSERT INTO basic_registration_system.user_data (email, name, surname, password)
         VALUES (?,?,?,?)`,
        [user_data.email, user_data.name, user_data.surname, user_data.password]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}


async function login(user_data) {
    const result = await db.query(
        `INSERT INTO basic_registration_system.user_data (email, name, surname, password)
         VALUES (?,?,?,?)`,
        [user_data.email, user_data.name, user_data.surname, user_data.password]
    );

    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}


//async function deleting(clientList) {
  //  const result = await db.query(
    //    `DELETE FROM summer_test.clientList WHERE id = ?;`,
   //     [clientList.removing]
  //  );

 //   let message = 'Error in saving todo';

  //  if (result.affectedRows) {
//        message = 'Saved successfully';
   // }

   // return {message};
//}

// SQL: DELETE FROM summer_test.todo_tasks WHERE id = 1;


module.exports = {
    getUsers,
   login,
    register,

}