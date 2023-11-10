import { AnimeData } from '../../types/types';
import AnimeItem from '../AnimeItem/AnimeItem';

type PropsType = {
    animeTitles: AnimeData[];
    error: string;
};

function AnimeList(props: PropsType) {
    const { animeTitles, error } = props;

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    if (animeTitles.length === 0) {
        return (
            <div>
                <p>No titles found</p>
            </div>
        );
    }
    return (
        <div>
            <ul>
                {animeTitles.map((anime) => (
                    <AnimeItem animeTitle={anime} key={anime.mal_id} />
                ))}
            </ul>
        </div>
    );
}

export default AnimeList;
