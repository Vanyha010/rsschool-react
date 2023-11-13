import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { AnimeData } from '../../types/types';
import AnimeList from '../AnimeList/AnimeList';
import Loader from '../Loader/Loader';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Pagination from '../Pagination/Pagination';

function SearchPage() {
    const [animeTitles, setAnimeTitles] = useState<AnimeData[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <ErrorBoundary>
                <SearchBar
                    setAnimeTitles={setAnimeTitles}
                    setLoading={setLoading}
                    setError={setError}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    setPageNumber={setPageNumber}
                    setItemsPerPage={setItemsPerPage}
                />
                <Pagination
                    pageNumber={pageNumber}
                    setSearchParams={setSearchParams}
                    searchParams={searchParams}
                    itemsPerPage={itemsPerPage}
                ></Pagination>
                {isLoading ? (
                    <Loader />
                ) : (
                    <AnimeList animeTitles={animeTitles} error={error} />
                )}
            </ErrorBoundary>
        </div>
    );
}

export default SearchPage;
