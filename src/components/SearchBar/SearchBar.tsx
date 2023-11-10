import { useEffect, useState, ChangeEvent } from 'react';
import { AnimeData } from '../../types/types';
import { fetchAnime, fetchAnimes } from '../../service/service';
import ErrorButton from '../ErrorBoundary/ErrorButton';
import './SearchBar.css';
import { SetURLSearchParams } from 'react-router-dom';

interface Props {
    setAnimeTitles: (animeTitles: AnimeData[]) => void;
    setLoading: (value: boolean) => void;
    setError: (error: string) => void;
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
    setPageNumber: (pageNumber: number) => void;
}

function SearchBar(props: Props) {
    const allowedInputSymbols = /\D/;
    const [inputError, setInputError] = useState('');
    const [inputValue, setInputValue] = useState(
        localStorage.getItem('inputValue') || ''
    );

    const {
        setAnimeTitles,
        setLoading,
        setError,
        searchParams,
        setSearchParams,
        setPageNumber,
    } = props;

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

    async function makeApiCall(page = 1, limit = 10) {
        setLoading(true);
        if (inputValue) {
            try {
                const result = await fetchAnime(inputValue);
                if ('error' in result) {
                    setError(result.message);
                } else {
                    const arr: AnimeData[] = [];
                    arr.push(result.data);
                    setAnimeTitles(arr);
                    setError('');
                }
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e);
                }
            }
            setLoading(false);
        } else {
            try {
                const result = await fetchAnimes(page, limit);
                if ('error' in result) {
                    setError(result.message);
                } else {
                    setAnimeTitles(result.data);
                    setError('');
                }
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e);
                }
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        const currentPageNumber = searchParams.get('page')?.toString();
        setPageNumber(Number(currentPageNumber));
        const params = {
            page: currentPageNumber || '1',
            limit: '10',
        };

        setSearchParams({ ...params });
        makeApiCall(Number(currentPageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
        <div className="header">
            <h1>Find your Anime</h1>
            <div className="searchbar">
                <input
                    className="searchbar__input"
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
