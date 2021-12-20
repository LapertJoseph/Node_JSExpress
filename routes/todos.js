// utilisation de express-promise pour création des routes
const router = require('express-promise-router')(); 

// définir en params les fonctions qui sont dans le controllers
const { getAlltodos, postAllTodos, deleteTodo, insertUser, updateTodo } = require('../controllers/todos')   


router
    .route('/todos')            //création de la route
    .get(getAlltodos)           // get + le controleur
    .post(postAllTodos)         // idem avec post
    
router
    .route('/todos/:id')
    .delete(deleteTodo)
    .post(insertUser)
    .put(updateTodo)

/**export pour l'utiliser dans un autre fichier */
module.exports = router;    