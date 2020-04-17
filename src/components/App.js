import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroList from './HeroList';
import SquadStrength from './SquadStrength';
import Footer from './footer';
class App extends Component {
    state = {}
    render() {
        return (
            <div className='App'>
                <h2>Super Squad!</h2>
                <div className='row'>
                    <div className='col-md-4'><CharacterList /></div>
                    <div className='col-md-4'><HeroList /></div>
                    <div className='col-md-4'><SquadStrength /></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;