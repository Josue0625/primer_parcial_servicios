import { getCategoryModel, getCountAll  } from "../models/category.model.js";
// import { saveImage } from "../middlewares/file.middleware.js";
 
export const getAll = async (req, res) =>{
    try{
        const { page, limit } = req.query;
        let data = await  getCategoryModel(page , limit); 
        res.json({
            success: true,   
            msg : 'Categorias obtenidos',
            count: data.length,
            page : parseInt(page),
            all : parseInt((await getCountAll())["cantidad"]),
            data: data,
        })    
    }catch(e){ 
        res.status(500).json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }
}