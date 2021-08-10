import {Request, Response} from 'express';

import IController from './ControllerInterface'

class TodoController implements IController {
    index(req: Request, res: Response):Response {
        return res.send("index todo");
    }
    create(req: Request, res: Response):Response {
       

        return res.send("create sukses"); 
    }
    show(req: Request, res: Response):Response {
      

        return res.send("show todo");
    }
    update(req: Request, res: Response):Response {
    

        return res.send("sukses update")
    }
    delete(req: Request, res: Response):Response {

        
        return res.send("delete todo");
    }
}

export default new TodoController();