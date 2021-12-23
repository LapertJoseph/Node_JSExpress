require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require("express");     //importation d'express
const app = express();                  // on utilise app
const port = 3000;                      // définis le port d'écoute
const todosRoute = require('./routes/todos'); 
/**------------------------------------------------------Serveur express--------------------------------------------- **/
app.use(express.json());              // middleware qui parse le body en JSON

app.get("/api", ( _ , res) => {
    // route pour avoir des info : 2 params req, res : callback
  res.status(200).json({
      success: "Todo API v1",
    });
});

app.use('/api', todosRoute);  /** permet d'épurer le code en ajouter un préfixe */


app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});