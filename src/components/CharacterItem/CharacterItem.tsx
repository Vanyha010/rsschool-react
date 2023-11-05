import { Character } from '../../types/types';

type PropsType = {
    character: Character;
};

function CharacterItem(props: PropsType) {
    const { character } = props;
    return (
        <div>
            <h3>{character.name}</h3>
            <img src={character.image} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
}

export default CharacterItem;
