import { Character } from '../../types/types';
import CharacterItem from '../CharacterItem/CharacterItem';

type PropsType = {
    characters: Character[];
    error: string;
};

function CharacterList(props: PropsType) {
    const { characters, error } = props;

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    }

    if (characters.length === 0) {
        return (
            <div>
                <p>No characters found</p>
            </div>
        );
    }
    return (
        <ul>
            {characters.map((character) => (
                <CharacterItem character={character} key={character.id} />
            ))}
        </ul>
    );
}

export default CharacterList;
