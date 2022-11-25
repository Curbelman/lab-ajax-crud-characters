const axios = require('axios');

class ApiHandler {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/'
        })
    }

    getAllCharacters = () => {
        return this.api.get('/characters');
    };

    getSingleCharacter = (characterId) => {
        return this.api.get(`/characters/${characterId}`);
    }

    createCharacter = (characterInfo) => {
        return this.api.post('/characters', characterInfo)
    }

    deleteCharacter = (characterId) => {
        return this.api.delete(`/characters/${characterId}`)
    }

    editCharacter = (characterId, characterInfo) => {
        return this.api.put(`/characters/${characterId}`, characterInfo)
    }
}

module.exports = ApiHandler;