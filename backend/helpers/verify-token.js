import jwt from "jsonwebtoken";
import getToken from "./get-token.js";

//middleware to validation token
const checkToken = (req, res, next) =>{

    if(!req.headers.authorization) {
        return res.status(401).json({message: "Acesso negado!"});
    }


    const token = getToken(req);

    if(!token){
        return res.status(401).json({message: "Acesso negado!"});
    }

    try {
        
        const verified = jwt.verify(token, 'nossosecret');
        req.user = verified;
        next()

    } catch (error) {
        return res.status(400).json({message: "Token Inválido!"});
    }

}

export default checkToken;