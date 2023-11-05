import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { Character } from './types/types';
import CharacterList from './components/CharacterList/CharacterList';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
    const [character, setCharacter] = useState<Character[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <div>
            <ErrorBoundary>
                <section>
                    <SearchBar
                        setCharacter={setCharacter}
                        setLoading={setLoading}
                        setError={setError}
                    />
                </section>
                <section>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <CharacterList characters={character} error={error} />
                    )}
                </section>
            </ErrorBoundary>
        </div>
    );
}

export default App;
