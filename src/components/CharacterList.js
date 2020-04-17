import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
    state = {}
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>Characters!</h4>
                <ul className='list-group'>
                    {
                        this.props.characters.map(character => <li key={character.id} className='list-group-item'>
                            <div className='list-item'>{character.name}
                                <span className='right-button' onClick={() => this.props.addCharacterById(character.id)}>+</span>
                            </div>

                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('state', state);
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatach) {
    return bindActionCreators({ addCharacterById }, dispatach)
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);