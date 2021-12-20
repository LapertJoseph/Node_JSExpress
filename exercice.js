const express = require("express");                                              /**Const mandatory pour démarrer le serveur */
const app = express();
const port = 3000;
app.use(express.json());

/**--------------------------------------------------------------------------------------Base de données----------------------------------------------------------------------------*/

const todos = [
  { id: 1, texte: "premiere tache" },
  { id: 2, texte: "deuxieme tache" },
  { id: 3, texte: "troisieme tache" }
];

// const todos2 = [2,4,5,6];
// todos2.push(10);
/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const insertTodo = (id) => {                                                  /**Ajouter un élément */
  todos.push(id)
};

const deleteTodo = (id) => {                                                  /**delete un élément */
    todos.forEach((element, index) => {
        if (id == element.id) {
            let deleted = todos.splice(index, 1);                               
            console.log(deleted);
        }
    })
}

const updateTodo = (id, texte) => {                                           /**met à jour un élément */
    todos.forEach((todo, index) => {                                          /** on prend le tableau et on le parcoure et pour chaque élément*/
        if(todo.id == id )
        {                                                                       /* on verifie si id de la liste correspond a l'id du json et si c'est le cas alors*/
            todos[index].texte = texte
            return                                                           /*on update l'élément avec sa nouvelle valeur qu'on entre.*/
        }
    })
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.delete("/delete", (req, res) => {
    const { id } = req.body;                                                                            /** on extrait l'objet du body : id */

    deleteTodo(id);

    return res.status(200).json({ success: "La todo a bien été delete", todos: todos})                  /** envoi la réponse sous un json */
});

app.post("/update", (req, res) => {
    const { id, texte } = req.body;                                                                     /** on extrait l'objet du body : id et texte */

    // const id = req.body.id;
    // const texte = req.body.texte;

    updateTodo(id, texte);

    return res.status(200).json({ success: "La todo a bien été update", todos: todos})
});

app.post("/ajouter", (req, res) => {
    const { id } = req.body;                                                                            /** on extrait l'objet du body : id */

    insertTodo(id);

    return res.status(200).json({ success: "La todo a bien été ajouter", todos : todos})

});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})