import characters_json from '../data/characters.json'
function createCharacter(id) {
    let character = characters_json.find(el => el.id === id);
    return character;
}
export default createCharacter;