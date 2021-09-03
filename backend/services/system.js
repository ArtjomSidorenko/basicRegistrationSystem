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
4


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

async function login(loginRequest) {

    const rows = await db.query(
        `SELECT user_data.email, user_data.password

         FROM basic_registration_system.user_data where user_data.password = ? and user_data.email = ?;`,
            [loginRequest.password, loginRequest.email]
    );


    console.log('rows: ' + JSON.stringify(rows));

    const user = rows[0];

    if (user.password === loginRequest.password && user.email === loginRequest.email) {
        return {
            message: "logged in",
            is_successful: true,
            is_admin: false
        }
    } else {


        return {
            message: "error",
            is_successful: false,
            is_admin: false
        }
    }

    const data = helper.emptyOrRows(rows);

    return data;
    }





async function deleting(registrationSystem) {
    const result = await db.query(
        `DELETE FROM basic_registration_system.user_data WHERE id = ?;`,
        [registrationSystem.removing]
    );

    let message = 'Error in saving todo';



    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}




// SQL: DELETE FROM summer_test.todo_tasks WHERE id = 1;


module.exports = {
    getUsers,
    login,
    register,
    deleting
}