import { SetURLSearchParams } from 'react-router-dom';
import './Pagination.css';

type PropsType = {
    pageNumber: number;
    setSearchParams: SetURLSearchParams;
};

export default function Pagination(props: PropsType) {
    const { pageNumber, setSearchParams } = props;
    const isFirstPage = pageNumber === 1;

    const nextPage = () => {
        changePage(pageNumber + 1);
    };

    const previousPage = () => {
        changePage(pageNumber - 1);
    };

    const changePage = (page: number) => {
        const params = {
            page: page.toString(),
            limit: '10',
        };
        setSearchParams(params);
    };

    return (
        <div className="pagination">
            <button onClick={previousPage} disabled={isFirstPage}>
                &lt;
            </button>
            <div>{pageNumber}</div>
            <button onClick={nextPage}>&gt;</button>
        </div>
    );
}
