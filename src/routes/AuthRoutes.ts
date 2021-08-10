//router
import BaseRouter from "./BaseRouter";

//Controller
import AuthController from "../controllers/AuthController";

//Validator
import validate from "../middleware/AuthValidator";

class AuthRoutes extends BaseRouter {
    public routes():void{
        this.router.post('/register',validate,AuthController.register);
        this.router.post('/login',AuthController.login);
    }
}

export default new AuthRoutes().router;