const express = require("express");
const app = express();
const port = 3000;

/**------------------------------------------------------Serveur express--------------------------------------------- **/
app.use(express.json()); // middleware qui parse le body

app.get("/", (_, res) => {  // route pour avoir des info : 2 params req, res : callback
  

  res.status(200).json({
    success: "Bonjour, vous êtes sur l'API d'entraînement",
    todos: todos,
  });
});
app.get("/bonjour/:prenom", (req, res) => { // : on attend une variable dans req.params en respectant la casse
  
  
  const { prenom } = req.params;    // dans prenom on recuperer l'input
                                   
  res.status(200).json({ success: `Bonjour ${prenom}` }); // const prenom = req.params.prenom;
});

app.post("/inscription", (req, res) => {
  const { username, email, password, password_repeat } = req.body;

  if (password !== password_repeat) {
    // vérif mdp concordance
    return res
      .status(400)
      .json({ error: "Les mots de passe ne correspondent pas." });
  }
  return res.status(200).json({ success: `${username} a bien été inscrit !` }); // success
});

app.post("/insertion", (req, res) => {
  const { id, texte } = req.body;

  insertTodo(id, texte);

  return res
    .status(200)
    .json({ success: "La todo a bien été ajoutée", todos: todos });
});

app.delete('/task/delete/:numtask', (req, res) => {
  const { numtask } = req.params;

  if (numtask > todos.length ) {
      // return res.status(400).json({ error: `Aucune tâche trouvée avec ce numéro`});
      return noTaskFound(res);
  }

  const temp_task = todos[numtask - 1];
  todos.splice(numtask - 1, 1);
  return res.status(200).json({ success: `Tâche numéro ${temp_task.id} contenant la description <<${temp_task.texte}>> a bien été supprimée`, todos: todos});
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
