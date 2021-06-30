const axios = require('axios');
const { json } = require('express');
const express = require('express');
const server = express();
let PORT = process.env.PORT || 8000;


server.get('/', (req, res) => {
    axios.get('https://api.github.com/orgs/takenet/repos?sort=created&direction=asc')
        .then((response) => {
            let saida = [];
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].language == "C#" && i <= 5) {
                    saida.push({ nome: response.data[i]['name'], descricao: response.data[i]['description'], url_imagem: response.data[i].owner['avatar_url'] });
                }
            }
            return res.json(saida);
        })
        .catch(function (error) {
            console.log(error)
        })
})

server.listen(PORT, () => {
    console.log('tá rodando')
})



