import jwt from 'jsonwebtoken';

const createUserToken = async(user, req, res) =>{

    //create token
    const token = jwt.sign({
        name: user.name,
        id: user._id,
    },"nossosecret");

    //return token
    res.status(200).json({
        message: "você está autenticado",
        token: token,
        userId: user._id,
    })

}

export default createUserToken;