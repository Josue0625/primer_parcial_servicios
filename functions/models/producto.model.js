import pgService from "../services/pg.service.js";

export const getProductoModel = async (page = null, limit =  'null' , order = 'title') => {
    const pg =  new pgService();  
    return  await  pg.connection.query(`SELECT 
        id, title, price , description , category, images 
        FROM producto_serv
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
    return  await  pg.connection.one(`SELECT COUNT(*) AS cantidad FROM producto_serv `);
}

export const getProductoUnicoModel = async (id) => {
    const pg =  new pgService(); 
    return  await  pg.connection.oneOrNone(`SELECT * FROM producto_serv where id =  $1`, [id]);
}
export const postProductoModel = async (title, price, description, category, images) => {
    try{
        const pg =  new pgService(); 
        let out = await  pg.connection.one(`INSERT INTO producto_serv 
        (title, price , description , category, images)  
        VALUES 
        ($1, $2, $3, $4, $5) RETURNING  * 
        ` ,[title, price, description, category, images ]);
        return  out;
    }catch(error){ 
        console.log(error);
        return 'En este momento no se puede realizar su transacción';
    }
}

export const putProductoModel =  async (id, title, price, description, category, images) => {
    try{
        const pg =  new pgService(); 
        let temp = await pg.connection.none(`UPDATE producto_serv 
        SET title = $2,
            price = $3,
            description = $4,
            category= $5,
            images = COALESCE($6, images)
        WHERE id  = $1
        ` ,[id, title, price, description, category, images]).then(res=>{
            console.log(res);
        });
        console.log(temp);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }
}
 

export const delteProductoModel = async (id) => {
    try{
        console.log(id);
        const pg =  new pgService(); 
        pg.connection.none(`DELETE FROM producto_serv WHERE id = $1` ,[id]);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }
}