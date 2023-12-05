import pgService from "../services/pg.service.js";


export const getUsuario = async (usuario, pass)=> {
    const pg =  new pgService(); 
    return  await  pg.connection.oneOrNone(`SELECT id, email, name, avatar FROM user_serv
    where email = $1 and password = $2`, [usuario, pass]);
}