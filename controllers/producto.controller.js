import { delteProductoModel, getProductoModel,getProductoUnicoModel , postProductoModel, putProductoModel, getCountAll  } from "../models/producto.model.js";
import { saveImage } from "../middlewares/file.middleware.js";
 
export const getAll = async (req, res) =>{
    try{
        const { page, limit } = req.query;
        let data = await   getProductoModel(page , limit); 
        res.json({
            success: true,   
            msg : 'Productos obtenidos',
            count: data.length,
            page : parseInt(page),
            all : parseInt((await getCountAll())["cantidad"]),
            data: data,
        })    
    }catch(e){ 
        res.status(500).json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }
}


export async function getProducto (req, res){
    try{ 
        const { id } = req.params;
        const data = await   getProductoUnicoModel(id);  
        res.json({success: true, data: (data) ? data : {} ,   msg : 'Producto Único'})
    }catch(e){
        res.json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }
}

export async function postProducto (req, res){ 
    try{
        const {nombre, detalle, valor, img } = req.body;  
        const data =  await postProductoModel(nombre, detalle, valor, img );     
        res.status(201).json({success: true, data: data ,   msg : 'Acción realizada con exito' })
    }catch(e){
        res.status(500).json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }

}

export async function putProducto (req, res){
    try{
        let update = {};
        const { id_producto, nombre, detalle, valor, img } = req.body;
        update = await getProductoUnicoModel(id_producto);  
        if(!update){
            return res.status(200).json({success: true, data: [] ,   msg :'El dato no existe, no pued ser actualizado'})
        }
        const data = await putProductoModel(id_producto, nombre, detalle, valor , img ); 
        update = await getProductoUnicoModel(id_producto);  
        res.status(201).json({success: true, data:update ,   msg : data})

    }catch(e){
        res.json({data: [] ,msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
        console.log(e);
    }
}

 
export async function deleteProducto (req, res){
    try{
        const { id } = req.params;
        const data = await   delteProductoModel(id); 
        res.json({success: true, data: [] ,   msg : data})
    }catch(e){
        res.status(500).json({data: [],msg: 'Servicio no disponible, Por favor intente mas tarde',success: false});
    }
}

 
 