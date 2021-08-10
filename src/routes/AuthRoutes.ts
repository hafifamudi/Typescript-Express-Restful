//router
import BaseRouter from "./BaseRouter";

//Controller
import AuthController from "../controllers/AuthController";

//Validator
import validate from "../middleware/AuthValidator";
import auth from "../middleware/AuthMiddleware";

class AuthRoutes extends BaseRouter {
    public routes():void{
        this.router.post('/register',validate,AuthController.register);
        this.router.post('/login',AuthController.login);
        this.router.get('/profile',auth, AuthController.profile);
    }
}

export default new AuthRoutes().router;