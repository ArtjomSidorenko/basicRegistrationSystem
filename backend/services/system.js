const db = require('./db');
const helper = require('../helper');
const bcrypt = require('bcrypt');


async function getUsers() {
    const rows = await db.query(
        `SELECT *
         FROM user_data`
    );
    const data = helper.emptyOrRows(rows);

    return data;
}


async function register(user_data) {
    let hash = bcrypt.hashSync(user_data.password, 10);


    const result = await db.query(
        `INSERT INTO user_data (email, name, surname, password)
         VALUES (?, ?, ?, ?)`,

        [user_data.email, user_data.name, user_data.surname, hash]
    );


    let message = 'Error in saving todo';

    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}

async function login(loginRequest) {


    const rows = await db.query(
        `SELECT *
         FROM user_data
         where user_data.email = ?
         LIMIT 1;`,
        [loginRequest.email]
    );


    if (rows.length === 0) {
        const result = await loginAdmin(loginRequest)
        return result
    } else {
        const user = rows[0];

        if (bcrypt.compareSync(loginRequest.password, user.password)) {
            return {
                message: "You are logged in",
                is_successful: true,
                is_admin: false
            }
        } else {
            return {
                message: "password is incorrect",
                is_successful: false,
                is_admin: false
            }
        }
    }


}


async function loginAdmin(loginRequest) {

    const rows = await db.query(
        `SELECT *
         FROM admin_data
         where admin_data.email = ?;`,
        [loginRequest.email]
    );


    if (rows.length === 0) {
        return {
            message: "Login NOK, invalid password or email",
            is_successful: false,
            is_admin: false
        }
    } else {
        const admin = rows[0];


        if (bcrypt.compareSync(loginRequest.password, admin.password)) {
            return {
                message: "logged in as admin",
                is_successful: true,
                is_admin: true
            }
        } else {
            return {
                message: "Login NOK, invalid password or email",
                is_successful: false,
                is_admin: false
            }
        }
    }
}


async function SelectingFromDefaultUsers(user) {
    const rows = await db.query(
        `SELECT *
        from bu19o6leu5rwvdct.user_data`,
        [user.id ,user.email, user.password, user.name, user.surname]
    );
    if (rows.length === 0) {
        return {
            message: "something went wrong"
        }
    } else {
        const result = await MakeAdmin(user)
        return result
    }
}

async function MakeAdmin(accountRemove, user) {
    const rows = await db.query(
        `DELETE
         FROM bu19o6leu5rwvdct.user_data
         WHERE id = ?;`,
        [accountRemove.removing],
    `INSERT INTO  bu19o6leu5rwvdct.admin_data(id, email, password, name, surname)
         VALUES (?, ?, ?, ?, ?)`

        [user.id, user.email, user.password, user.name, user.surname]
    )

}


async function deleting(registrationSystem) {
    const result = await db.query(
        `DELETE
         FROM user_data
         WHERE id = ?;`,
        [registrationSystem.removing]
    );

    let message = 'Error in saving todo';


    if (result.affectedRows) {
        message = 'Saved successfully';
    }

    return {message};
}


module.exports = {
    getUsers,
    login,
    register,
    deleting,
    loginAdmin,
    MakeAdmin,
    SelectingFromDefaultUsers,
}