import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Character } from './types/types';
import CharacterList from './components/CharacterList/CharacterList';
import Loader from './components/Loader/Loader';

type StateType = {
    character: Character[];
    isLoading: boolean;
    error: string;
};

class App extends React.Component {
    state: StateType = {
        character: [],
        isLoading: false,
        error: '',
    };

    setCharacter = (characters: Character[]) =>
        this.setState({ character: characters });

    setLoading = (value: boolean) => this.setState({ isLoading: value });

    setError = (error: string) => this.setState({ error: error });

    render() {
        const { character, error } = this.state;
        return (
            <div>
                <section>
                    <SearchBar
                        setCharacter={this.setCharacter}
                        setLoading={this.setLoading}
                        setError={this.setError}
                    />
                </section>
                <section>
                    {this.state.isLoading ? (
                        <Loader />
                    ) : (
                        <CharacterList characters={character} error={error} />
                    )}
                </section>
            </div>
        );
    }
}

export default App;
