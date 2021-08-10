import { Router} from "express";

import IRoute from "./RouterInterface";


abstract class BaseRouter implements IRoute {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;
}

export default BaseRouter;