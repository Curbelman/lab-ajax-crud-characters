const router = require("express").Router();

const APIHandler = require('./APIHandler');
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    router.get('/characters', (req, res) => {
      charactersAPI
      .getAllCharacters()
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
        res.render('/characters', { characters: response.data })
      })
      .catch(error => console.log(error));
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    router.get('/characters/:id', (req, res) => {
      const characterId = req.params.id;
      charactersAPI
      .getSingleCharacter(characterId)
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
        res.render(`/characters/${characterId}`, { oneCharacter: response.data })
      })
      .catch(error => console.log(error));
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    router.delete('/characters/:id', (req, res) => {
      const characterId = req.params.id;
      charactersAPI
      .deleteCharacter(characterId)
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
        res.render('/characters', { characters: response.data }, { deletedCharacter: true })
      })
      .catch(error => console.log(error))
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    router.put('/characters/:id', (req, res) => {
      const characterId = req.params.id;
      const characterInfo = req.body;
      charactersAPI
      .editCharacter(characterId, characterInfo)
      .then((response) => {
        console.log(response.data)
        res.json(response.data)
        res.render(`/characters/${charachterId}`, { oneCharacter: response.data })
      })
      .catch(error => console.log(error))
    })
    event.preventDefault();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    router.post('/characters', (req, res) => {
      const characterInfo = req.body;
      charactersAPI
      .createCharacter(characterInfo)
      .then((response) => {
        const newCharacterId = response.data.id;
        console.log(response.data)
        res.json(response.data)
        res.render(`/characters/${newCharacterId}`, { oneCharacter: response.data })
      })
      .catch(error => console.log(error))
    })
    event.preventDefault();
  });
});
