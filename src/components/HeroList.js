import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';
class HeroList extends Component {
    state = {}
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>Heroes</h4>
                <ul className='list-group'>
                    {
                        this.props.heroes.map(hero => <li key={hero.id} className='list-group-item'>
                            <div className='list-item'>{hero.name}
                                <span className='right-button' onClick={() => this.props.removeCharacterById(hero.id)}>x</span>
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
        heroes: state.heroes
    };
}

function mapDispatchToProps(dispatach) {
    return bindActionCreators({ removeCharacterById }, dispatach)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroList);