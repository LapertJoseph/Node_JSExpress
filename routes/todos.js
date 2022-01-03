// utilisation de express-promise pour création des routes
const router = require('express-promise-router')(); 

// définir en params les fonctions qui sont dans le controllers
const { getAlltodos, postAllTodos, insertUser, updateTodo, deleteTodos, test, allTodos, insertTodo, updatedTodo, deleteTodo } = require('../controllers/todos')   


router
    .route('/todos')            //création de la route
    .get(getAlltodos)           // get + le controleur
    .post(postAllTodos)         // idem avec post
    .delete(deleteTodos)
    
router
    .route('/todos/:id')
    // .delete(deleteTodo)
    .post(insertUser)
    .put(updateTodo)

router                                          /* Route avec les procédures stockées */
    .route('/test')
    // .get(test)
    .post(insertTodo)
    .get(allTodos)
    // .put(updatedTodo)
router                                          /* Route avec des params  */
    .route('/test/:id')
    .put(updatedTodo)
    .delete(deleteTodo)

module.exports = router; /**export pour l'utiliser dans un autre fichier */


/* POST: Création d'une ressource   C
/* GET: select une ressource        R
/* PUT: Update la ressource         U
/* DELETE: Effacer                  D
/**/