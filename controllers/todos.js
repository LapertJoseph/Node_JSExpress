// const todos = [
//     { id: 1, texte: "premiere tache" },
//     { id: 2, texte: "deuxieme tache" },
//     { id: 3, texte: "troisieme tache" },
// ];
const pool = require('../config/database');

/**export permet de l'utiliser dans un autre fichier */
module.exports = {      
                             
    getAlltodos : (req, res) => {                       // requete
        
        res.status(200).json({ success : todos })

    },

    deleteTodos : (req, res) => {
        todos.splice(0, todos.length)
        res.status(200).json({success : {todos: todos, message :'les todos on bien été supprimé'}})
    },

    postAllTodos : (req, res) => {
        const { username, email, password, password_repeat } = req.body;
        if (password !== password_repeat) {
            // vérif mdp concordance
            return res
              .status(400)
              .json({ error: "Les mots de passe ne correspondent pas." });
          }
          return res.status(200).json({ success: `${username} a bien été inscrit !` });
    },

    // deleteTodo : (req, res) => {                        // requête paramétrés
    //         const { id } = req.params;                                                                                   /** on extrait l'objet du body : id */
    //         todos.forEach((element, index) => {
    //             if (id == element.id) {
    //                 let deleted = todos.splice(index, 1);                               
    //             }
    //         })
    //         return res.status(200).json({ success: "La todo a bien été delete", todos: todos})                  /** envoi la réponse sous un json */
    // },

    insertUser : (req, res) => {
        const { username, email, password, password_repeat } = req.body; // quand plein de param mettre dans body

            if (password !== password_repeat) {
                // vérif mdp concordance
                return res
                .status(400)
                .json({ error: "Les mots de passe ne correspondent pas." });
            }
            return res.status(200).json({ success: `${username} a bien été inscrit !` }); // success
    },

    updateTodo : (req, res) => {
        const { id } = req.params
        const { texte } = req.body              /** on extrait l'objet du body : id et texte */
        
        todos.forEach((element, index) => {
            if (id == element.id) {
                todos[index].texte = texte         /**Pour accéder a l'index de l'objet et le texte */               
            }
        })
        return res.status(200).json({ success: "La todo a bien été update", todos: todos})
    },

    test: async (req, res) => {

        let connection; 

        try {

            connection = await pool.getConnection();
            const result = await connection.query('SELECT * FROM todo;');
            console.log(result);
            return res.status(200).json( { success: result } );

        } catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }

    },

    SelectAllTodos: async ( _ , res) => {

        let connection; 

        try {
            connection = await pool.getConnection();
            const result = await connection.query(`CALL selectAllTodos;`);
            console.log(result[0]);
            return res.status(200).json( { success: result[0] } );

        } catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }

    },

    insertTodo: async ( req , res) => {

        let connection; 

        try {
            const  { texte } = req.body
            connection = await pool.getConnection();
            const result = await connection.query('CALL insertTodo(?);',[texte]);
            console.log(result);
            return res.status(200).json( { success: result } );

        } catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }

    },

    updatedTodo: async ( req , res) => {
        let connection; 
        try {
            const { id } = req.params;
            const { texte } = req.body;
                        
            connection = await pool.getConnection();
            const result = await connection.query('CALL updatedTodo(?,?);',[id, texte]);
            console.log(result);
            return res.status(200).json( { success: result } );

        } catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }

    },
    deleteTodo: async (req, res) => {
        let connection; 
        try {
            const { id } = req.params;
            connection = await pool.getConnection();
            const result = await connection.query('CALL deleteTodo(?);',[id]);
            console.log(result);
            return res.status(200).json( { success: result } );

        }
        catch (error) {

            return res.status(400).json( { error: error.message } );

        } finally {

            if (connection) connection.end();

        }
    }
}