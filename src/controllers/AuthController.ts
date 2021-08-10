import {Request, Response} from 'express';
import Authentication from "../../utils/Authentication"
const db = require("../db/models");

class AuthController{
    register = async (req: Request, res: Response):Promise<Response> => {
        let {username, password} = req.body;
        
        try {
            const hashedPassword:string = await Authentication.hash(password);

            await db.user.create({
                username,
                password:hashedPassword
            });
        } catch (error) {
            console.log(error);
        }

        return res.send("sukses create user")
    }
    login = async (req: Request, res: Response):Promise<Response> => {
        let {username, password} = req.body;

        try {
            const user = await db.user.findOne({ 
                where: {username}
            });
            console.log(user);
            
            let compare = await Authentication.passwordCompare(password, user.password);
            if (compare) {
                let token = Authentication.generateToken(user.id, username, password);
                return res.send({
                    token
                });
            }            
        } catch (error) {
            console.log(error);
        }

        return res.send("login failed");
    }

    profile =  (req:Request, res:Response):Response => {
        return res.send("ini adalah profile section");
    }

}

export default new AuthController();