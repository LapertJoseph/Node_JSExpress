const todos = [
    { id: 1, texte: "premiere tache" },
    { id: 2, texte: "deuxieme tache" },
    { id: 3, texte: "troisieme tache" },
];


/**export l'utiliser dans un autre fichier */
module.exports = {      
                             
    getAlltodos : (req, res) => {
        
        res.status(200).json({ success : todos })

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

    deleteTodo : (req, res) => {
            const { id } = req.params;                      // sinon param                                                             /** on extrait l'objet du body : id */
            todos.forEach((element, index) => {
                if (id == element.id) {
                    let deleted = todos.splice(index, 1);                               
                }
            })
            return res.status(200).json({ success: "La todo a bien été delete", todos: todos})                  /** envoi la réponse sous un json */
    },

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
    }
}