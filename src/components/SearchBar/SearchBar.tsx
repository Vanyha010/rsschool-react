import { useEffect, useState, ChangeEvent } from 'react';
import { AnimeData } from '../../types/types';
import { fetchAnime } from '../../service/service';
import ErrorButton from '../ErrorBoundary/ErrorButton';
import './SearchBar.css';

interface Props {
    setAnimeTitles: (animeTitles: AnimeData[]) => void;
    setLoading: (value: boolean) => void;
    setError: (error: string) => void;
}

function SearchBar(props: Props) {
    const allowedInputSymbols = /\D/;
    const [inputError, setInputError] = useState('');
    const [inputValue, setInputValue] = useState(
        localStorage.getItem('inputValue') || ''
    );

    function checkInputValue(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value.match(allowedInputSymbols)) {
            event.preventDefault();
            setInputError('You can provide only id');
        } else {
            setInputError('');
            setInputValue(event.target.value);
        }
    }

    function submitInputValue() {
        localStorage.setItem('inputValue', inputValue);

        makeApiCall();
    }

    async function makeApiCall() {
        const { setAnimeTitles, setLoading, setError } = props;
        setLoading(true);
        try {
            const result = await fetchAnime(inputValue);
            if ('error' in result) {
                setError(result.message);
            } else {
                if (Array.isArray(result.data)) {
                    setAnimeTitles(result.data);
                } else {
                    const arr: AnimeData[] = [];
                    arr.push(result.data);
                    setAnimeTitles(arr);
                }
                setError('');
            }
        } catch (e) {
            if (e instanceof Error) {
                console.log(e);
            }
        }
        setLoading(false);
    }

    useEffect(() => {
        makeApiCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div>
                <h1>Find your Anime</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        checkInputValue(e);
                    }}
                />
                {inputError && <div className="error"> {inputError} </div>}
                <button onClick={() => submitInputValue()}>Search</button>
                <ErrorButton />
            </div>
        </div>
    );
}

export default SearchBar;
