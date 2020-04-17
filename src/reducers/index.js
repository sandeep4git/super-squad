import characters_json from '../data/characters.json'
import { ADD_CHARACTER } from '../actions';
import { combineReducers } from 'redux';
import characters from './characters_reducer';
import heroes from './heroes_reducer';

// function characters(state = characters_json, action) {
//     switch (action.type) {
//         case ADD_CHARACTER:
//             let characters = state.filter(item => item.id !== action.id);
//             return characters;
//         default:
//             return state;
//     }
// }

// function heroes(state = [], action) {
//     console.log('<<<<<<>>>>>>,' + action.id);
//     switch (action.type) {
//         case ADD_CHARACTER:
//             let heroes = [...state, createCharacter(action.id)];
//             return heroes;
//         default:
//             return state;
//     }
// }

// function createCharacter(id) {
//     let character = characters_json.find(el => el.id === id);
//     console.log(character);
//     return character;
// }

const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;