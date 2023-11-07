import { AnimeData } from '../../types/types';

type PropsType = {
    animeTitle: AnimeData;
};

function AnimeItem(props: PropsType) {
    const { animeTitle } = props;
    return (
        <div>
            <h3>{animeTitle.title}</h3>
            <img src={animeTitle.images.jpg.image_url} />
            <p>Status: {animeTitle.status}</p>
            {/* <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p> */}
        </div>
    );
}

export default AnimeItem;
