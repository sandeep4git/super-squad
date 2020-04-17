import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import characters_json from '../data/characters.json'

function createCharacter(id) {
    let character = characters_json.find(el => el.id === id);
    return character;
}

function heroes(state = [], action) {
    let heros;
    switch (action.type) {
        case ADD_CHARACTER:
            heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter(el => el.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

export default heroes;