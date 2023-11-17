import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { AnimeData } from '../../types/types';
import AnimeList from '../AnimeList/AnimeList';
import Loader from '../Loader/Loader';
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
                itemsPerPage={itemsPerPage}
            ></Pagination>
            {isLoading ? (
                <Loader />
            ) : (
                <AnimeList animeTitles={animeTitles} error={error} />
            )}
        </div>
    );
}

export default SearchPage;
