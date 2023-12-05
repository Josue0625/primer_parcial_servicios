
/** Importación type: Module / ES */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import { exports } from "./default.js";
import router from "../routes/index.route.js";
import middleware from "..//middlewares/index.middleware.js";
import pgService from '../services/pg.service.js';
export default class Server{

    constructor(){
        this.app = express();
        this.port = exports.port;
        this.app.use(cors({
            origin: (origin, callback) => {
                const ACCEPTED_ORIGINS = [
                    'http://localhost:4200'
                ]

                if(ACCEPTED_ORIGINS.includes(origin)){
                    return callback(null, true)
                }

                if(!origin) {
                    return callback(null, true)
                }

                return callback(new Error('Not allowed by CORS'))
            }
        }));
    }

    async connectionDB(){
        new pgService();
    }

    middleware(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true })); 
        this.app.use(middleware)

    }

    route(){
        this.app.use('/img/',express.static("img",{extensions : ["jpg","png","jpeg","PNG","JPG"]}));
        this.app.use(router);
    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log("Server on!!", this.port);
        })
    }

    load(){
        this.connectionDB();
        this.middleware();
        this.route();
        this.runServer();
    }

}
