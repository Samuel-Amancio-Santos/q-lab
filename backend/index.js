import express  from 'express';
import cors from 'cors';
import UserRoutes from "./routes/UserRoutes.js";
import coon from './db/coon.js' 

coon();

const app = express();

//config json response

app.use(express.json());

//solve cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//public folder for images ;

//Routes 

app.use('/users', UserRoutes);

app.listen(5000, function(){
    console.log("Servidor Online!!");
});