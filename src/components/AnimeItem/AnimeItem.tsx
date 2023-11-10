import { AnimeData } from '../../types/types';
import './AnimeItem.css';

type PropsType = {
    animeTitle: AnimeData;
};

function AnimeItem(props: PropsType) {
    const { animeTitle } = props;
    return (
        <div className="animecard">
            <div>
                <img src={animeTitle.images.jpg.image_url} />
            </div>
            <div>
                <h3>{animeTitle.title}</h3>
                <p>Status: {animeTitle.status}</p>
                <p>Number of episodes: {animeTitle.episodes}</p>
                <p>Score: {animeTitle.score}</p>
                <p>Rank: {animeTitle.rank}</p>
            </div>
        </div>
    );
}

export default AnimeItem;
