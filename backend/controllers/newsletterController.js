import {Newsletter} from '../models/Newsletter.js';

import {response} from 'express'; 

const NewsletterModel = Newsletter;

const newsletterController = {
    
    showNewsletter: async(req, res) =>{
        try {
            
            const newsletters = await NewsletterModel.find().sort('-createdAt');
            
            //res.render('newsletter/all', {newsletters})
            res.status(200).json({newsletters: newsletters,});

        } catch (error) {
            console.log(error);
        }
    },


    createNewsletter: async(req, res) =>{
        try {

            res.render('newsletter/create');

        } catch (error) {
            console.log(error);
        }

    },

    create: async(req, res) =>{
        try { 
            
            const newsletter = {
                title: req.body.title,
                image: req.body.image,
                description: req.body.description,
            };

            console.log(newsletter);

            const response = await NewsletterModel.create(newsletter);

            //await response.save();

            //res.status(201).Json({response, msg: "Produto criado com sucesso"});

            res.redirect('/newsletters');

        } catch (error) {
            console.log(error);
        }


    },

    getNewsletter: async(req, res) =>{
        try {
            
            const id = req.params.id;
            const newsletter = await NewsletterModel.findById(id).lean();
            res.status(200).json({newsletters: newsletter,});
            //res.render('newsletters/newsletter', {newsletter})

        } catch (error) {

            console.log(error)
            
        }

    },


    deleteNewsletter: async(req, res) =>{

        try {
            
            const id = req.params.id;

            const deleteNewsletter = await NewsletterModel.findByIdAndDelete(id);

            console.log(deleteNewsletter);

            res.redirect('/newsletters')

        } catch (error) {
            console.log(error);
        }


    },

    editNewsletter: async(req, res) =>{
        try {
            
            const id = req.params.id;
            const newsletter = await NewsletterModel.findById(id).lean();

            res.render('newsletters/edit', {newsletter})

        } catch (error) {
            console.log(error);
        }
    },

    editNewsletterUpdate: async(req, res) =>{

        try {
            const id = req.body.id;

            const newsletter = {
                title: req.body.title,
                image: req.body.image,
                description: req.body.description,
            };

            const updateNewsletter = await NewsletterModel.findByIdAndUpdate(id, newsletter);

            res.redirect('/newsletter');

            
        } catch (error) {
            console.log(error)
        }


    },


}

export default newsletterController;
