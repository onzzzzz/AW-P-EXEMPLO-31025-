const publicoRouter = require('express').Router();


// Define uma rota para a página HTML
publicoRouter.get('/', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/Users/ninatchernega/Desktop/web api/AW-P-EXEMPLO-31025-/templates/frontEnd/index.html');
  });


module.exports = publicoRouter;