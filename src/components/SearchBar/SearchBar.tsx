import { useEffect, useState } from 'react';
import { Character } from '../../types/types';
import { fetchCharacters, searchCharacter } from '../../service/service';
import ErrorButton from '../ErrorBoundary/ErrorButton';

interface Props {
    setCharacter: (characters: Character[]) => void;
    setLoading: (value: boolean) => void;
    setError: (error: string) => void;
}

function SearchBar(props: Props) {
    const [inputValue, setInputValue] = useState(
        localStorage.getItem('inputValue') || ''
    );
    const [errorMsg, setErrorMsg] = useState('');

    function submitInputValue() {
        localStorage.setItem('inputValue', inputValue);

        makeApiCall();
    }

    async function makeApiCall() {
        const { setCharacter, setLoading, setError } = props;
        if (inputValue.length > 0) {
            try {
                setLoading(true);
                const result = await searchCharacter(inputValue);
                const arr = [];
                if ('error' in result) {
                    setError(result.error);
                } else {
                    setError('');
                    if (result instanceof Array) {
                        result.forEach((item) => {
                            arr.push(item);
                        });
                    } else {
                        arr.push(result);
                    }
                    setCharacter(arr);
                }

                setLoading(false);
            } catch (err) {
                console.log(err);
                if (err instanceof Error) {
                    setErrorMsg(err.message);
                }
            }
        } else {
            try {
                setLoading(true);
                const { results } = await fetchCharacters();
                setError('');
                setCharacter(results);
                setLoading(false);
            } catch (err) {
                console.log(err);
                if (err instanceof Error) {
                    setErrorMsg(err.message);
                }
            }
        }
    }

    useEffect(() => {
        makeApiCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (errorMsg) {
        return <div>{errorMsg}</div>;
    }

    return (
        <div>
            <div>
                <h1>Find your Rick and Morty character</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                    }}
                />
                <button onClick={() => submitInputValue()}>Search</button>
                <ErrorButton />
            </div>
        </div>
    );
}

export default SearchBar;
