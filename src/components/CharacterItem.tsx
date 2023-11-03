import React from 'react';
import { Character } from '../types/types';

type PropsType = {
    character: Character;
};

class CharacterItem extends React.Component<PropsType> {
    render(): React.ReactNode {
        const { character } = this.props;

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
}

export default CharacterItem;
