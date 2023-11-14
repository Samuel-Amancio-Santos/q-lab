import { User } from "../models/User.js";

import bcrypt from 'bcrypt'

import jwt from "jsonwebtoken";

//helpers
import createUserToken from "../helpers/create-user-token.js";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";

const UserModel = User;

const userController = {

    register: async(req, res) => {

        try {

            const ROLE = {
                ADMIN: 'admin',
                BASIC: 'basic'
            }

            const {name, email, phone, password, confirmpassword} = req.body;

            //validations

            if(!name){
                res.status(422).json({message: 'O nome é obrigatório'});
                return;
            }

            if(!email){
                res.status(422).json({message: 'O email é obrigatório'});
                return;
            }

            if(!phone){
                res.status(422).json({message: 'O telefone é obrigatório'});
                return;
            }

            if(!password){
                res.status(422).json({message: 'A senha é obrigatória'});
                return;
            }

            if(!confirmpassword){
                res.status(422).json({message: 'A confirmação de senha é obrigatória'});
                return;
            }

            if(password !== confirmpassword){
                res.status(422).json({message: 'A senha e a confirmaçaõ de senha precisam ser iguais'});
                return;
            }

            //Check if user exist

            const userExist = await UserModel.findOne({email: email});

            if(userExist){
                res.status(422).json({message: 'Por favor Utilize outro e-mail'});
                return;
            }

            // create a password
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);

            // create user
            const user = new UserModel({
                name,
                email,
                phone,
                password: passwordHash,
                role: ROLE.BASIC,
            });
            

            try {
                
                const newUser = await user.save();

                await createUserToken(newUser, req, res);

            } catch (error) {
                res.status(500).json({message: error})
            }

            

            
        } catch (error) {
            console.log(error);
        }

    },

    login: async(req, res) =>{

        const {email, password} = req.body;

        if(!email){
            res.status(422).json({message: 'O email é obrigatório'});
            return;
        }

        if(!password){
            res.status(422).json({message: 'A senha é obrigatória'});
            return;
        }

        //check if user exists
        const user = await UserModel.findOne({email: email});

            if(!user){
                res.status(422).json({message: 'Não há usuario cadastrado com esse email'});
                return;
            }
        

        //check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword){
            res.status(422).json({message: 'Senha invalida'});
            return;
        }

        await createUserToken(user, req, res);

    },

    checkUser: async(req, res) =>{

        try {
            
            let currentUser;

            if(req.headers.authorization){

                const token = getToken(req);
                const decoded = jwt.verify(token, 'nossosecret');

                currentUser = await UserModel.findById(decoded.id);

                currentUser.password = undefined;

            }
            else{
                currentUser = null;
            }

            res.status(200).send(currentUser);
            

        } catch (error) {
            console.log(error);
        }

    },

    getUserById: async(req, res) =>{


        try {
            
            const id = req.params.id;

            const user = await UserModel.findById(id).select("-password");

            if(!user){

                res.status(422).json({message: 'Usuario não encotrado'});
                return; 
            }

            res.status(200).json({user});



        } catch (error) {
            console.log(error);
        }

    },

    editUser: async(req,res) =>{

        try {
 
            const token = getToken(req);

            const user = await getUserByToken(token);

            const {name, email, phone, password, confirmpassword} = req.body;

            let image = '';
            
            const id = req.params.id;

            //validation
            if(!name){ 
                res.status(422).json({message: 'O nome é obrigatório'});
                return;
            }

            if(!email){
                res.status(422).json({message: 'O email é obrigatório'});
                return;
            }

            const userExist = await UserModel.findOne({email: email});


            //check if email has already taken
            if(user.email !== email && userExist){

                res.status(422).json({message: 'Por favor, Ultilize outro email'});
                return; 

            }

            user.email = email;

            if(!phone){
                res.status(422).json({message: 'O telefone é obrigatório'});
                return;
            }

            user.phone = phone;

            if(!password){
                res.status(422).json({message: 'A senha é obrigatória'});
                return;
            }

            if(password !== confirmpassword){
                res.status(422).json({message: 'A senha e a confirmaçaõ de senha precisam ser iguais'});
                return;
            }
            else if(password == confirmpassword && password != null){
                
                //create password
                const salt = await bcrypt.genSalt(12);
                const passwordHash = await bcrypt.hash(password, salt);

                user.password = passwordHash;
            }

            
            try {
                
                // returns user updated data

                const updateUser = await User.findOneAndUpdate(
                    {_id: user._id},
                    {$set: user},
                    {new: true},
                )

                res.status(200).json({message: "Usuario atualizado com sucesso!"})

            } catch (error) {

                res.status(500).json({message: error});
                return;

            }



        } catch (error) {
            console.log(error);
        }


    },

}

export default userController;