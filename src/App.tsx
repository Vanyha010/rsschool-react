import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { AnimeData } from './types/types';
import AnimeList from './components/AnimeList/AnimeList';
import Loader from './components/Loader/Loader';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
    const [animeTitles, setAnimeTitles] = useState<AnimeData[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <div>
            <ErrorBoundary>
                <section>
                    <SearchBar
                        setAnimeTitles={setAnimeTitles}
                        setLoading={setLoading}
                        setError={setError}
                    />
                </section>
                <section>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <AnimeList animeTitles={animeTitles} error={error} />
                    )}
                </section>
            </ErrorBoundary>
        </div>
    );
}

export default App;
