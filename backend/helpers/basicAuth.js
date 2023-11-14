function authUser(req, res, next){
    if(req.user == null){
        res.status(403).json({message: 'Você precisa estar Logado'});
    }

    next(); 
}

export default authUser;