import { SetURLSearchParams } from 'react-router-dom';
import './Pagination.css';

type PropsType = {
    pageNumber: number;
    setSearchParams: SetURLSearchParams;
    searchParams: URLSearchParams;
    itemsPerPage: number;
};

export default function Pagination(props: PropsType) {
    const { pageNumber, setSearchParams, searchParams, itemsPerPage } = props;
    const isFirstPage = pageNumber === 1;
    const perPageItems = [10, 15, 20];

    const nextPage = () => {
        changePage(pageNumber + 1);
    };

    const previousPage = () => {
        changePage(pageNumber - 1);
    };

    const changePage = (page: number) => {
        const params = {
            page: page.toString(),
            limit: itemsPerPage.toString(),
        };
        setSearchParams(params);
    };

    const changeItemsPerPage = (value: string) => {
        const params = {
            page: pageNumber.toString(),
            limit: value,
        };
        console.log(params);
        setSearchParams(params);
        // setItemsPerPage(Number(value));
    };

    return (
        <div>
            <div className="pagination">
                <button onClick={previousPage} disabled={isFirstPage}>
                    &lt;
                </button>
                <div>{pageNumber}</div>
                <button onClick={nextPage}>&gt;</button>
            </div>
            <div>
                <select onChange={(e) => changeItemsPerPage(e.target.value)}>
                    {perPageItems.map((item, index) => (
                        <option
                            value={item}
                            key={index}
                            selected={
                                Number(searchParams.get('limit')) === item
                            }
                        >
                            {item} items per page
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
