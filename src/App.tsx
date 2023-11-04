import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Character } from './types/types';
import CharacterList from './components/CharacterList/CharacterList';
import Loader from './components/Loader/Loader';

type StateType = {
    character: Character[];
    isLoading: boolean;
};

class App extends React.Component {
    state: StateType = {
        character: [],
        isLoading: false,
    };

    setCharacter = (characters: Character[]) =>
        this.setState({ character: characters });

    setLoading = (value: boolean) => this.setState({ isLoading: value });

    render() {
        const { character } = this.state;
        return (
            <div>
                <section>
                    <SearchBar
                        setCharacter={this.setCharacter}
                        setLoading={this.setLoading}
                    />
                </section>
                <section>
                    {this.state.isLoading ? (
                        <Loader />
                    ) : (
                        <CharacterList characters={character} />
                    )}
                </section>
            </div>
        );
    }
}

export default App;
