const axios = require('axios');

class ApiHandler {
    constructor () {
        this.api = axios.create({
            baseURL: 'http://localhost:8000/characters'
        })
    }

    getAllCharacters = () => {
        return this.api.get('/');
    };

    getSingleCharacter = (characterId) => {
        return this.api.get(`/${characterId}`);
    }

    createCharacter = (characterInfo) => {
        return this.api.post('/', characterInfo)
    }

    deleteCharacter = (characterId) => {
        return this.api.delete(`/${characterId}`)
    }

    editCharacter = (characterId, characterInfo) => {
        return this.api.put(`/${characterId}`, characterInfo)
    }
}