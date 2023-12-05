import { Router } from "express";
import Producto from "./producto.route.js"
import Category from "./category.route.js"
import Auth from "./auth.route.js"

const router = Router();

const generalRouters =[
    {path: '/auth' , route : Auth},
    {path: '/api/producto' , route : Producto},
    {path: '/api/category' , route : Category}

];

generalRouters.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;