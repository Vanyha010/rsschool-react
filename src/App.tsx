import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { Character } from './types/types';
import CharacterList from './components/CharacterList';

type StateType = {
    character: Character[];
};

class App extends React.Component {
    state: StateType = {
        character: [],
    };

    setCharacter = (characters: Character[]) =>
        this.setState({ character: characters });

    render() {
        const { character } = this.state;
        return (
            <div>
                <section>
                    <SearchBar setCharacter={this.setCharacter} />
                </section>
                <section>
                    <CharacterList characters={character} />
                </section>
            </div>
        );
    }
}

export default App;
