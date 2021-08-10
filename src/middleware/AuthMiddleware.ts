import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

const auth = (req:Request, res:Response, next:NextFunction) => {
    if (!req.headers.authorization){
        return res.status(401).json("token tidak tersedia");
    }

    let secretKey = process.env.JWT_SECRET_KEY || "secret";
    const token: string = req.headers.authorization.split(" ")[1];
    console.log("token");
    
    try {
        const credential:string | object = jwt.verify(token, secretKey);
        if (credential){
            req.app.locals.credential = credential;
            next();
        }

        return res.send("auth gagal");
    } catch (error) {
        console.log(error);
    }
}

export default auth;