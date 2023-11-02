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
                <p>{character.id}</p>
            </div>
        );
    }
}

export default CharacterItem;
