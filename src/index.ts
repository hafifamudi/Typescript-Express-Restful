import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import {config as dotenv} from 'dotenv'

//routes
import UserRoutes from './routes/UserRoutes'
import AuthRoutes from './routes/AuthRoutes';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    public plugins():void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    public routes():void{
        this.app.route('/').get((req: Request, res: Response) => {
            res.send("ini adalah route pertama saya menggunakan TypesScript")
        });

        this.app.use('/api/v1/users',UserRoutes);
        this.app.use('/api/v1/auth',AuthRoutes);
    }

}

const port:number = 3000;
const app = new App().app;(
app.listen(port, () => {
    console.log("The App is running on port " + port)
    console.log(process.env.DB_HOST);
    
}))