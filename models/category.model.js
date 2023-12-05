import pgService from "../services/pg.service.js";

export const getCategoryModel = async (page = null, limit =  'null' , order = 'id') => {
    const pg =  new pgService();  
    return  await  pg.connection.query(`SELECT 
        id, name, image 
        FROM category_serv
        ORDER BY $(order:raw)
        OFFSET $(page:raw) ROWS FETCH NEXT $(limit:raw) ROWS ONLY
        `, {
            order : order, 
            limit : limit,
            page : page ? page - 1 : 0
        });
}

export const getCountAll = async ()  => {
    const pg =  new pgService();  
    return  await  pg.connection.one(`SELECT COUNT(*) AS cantidad FROM category_serv `);
}