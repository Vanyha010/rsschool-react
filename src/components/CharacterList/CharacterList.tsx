import React from 'react';
import { Character } from '../../types/types';
import CharacterItem from '../CharacterItem/CharacterItem';

type PropsType = {
    characters: Character[];
    error: string;
};

class CharacterList extends React.Component<PropsType> {
    render(): React.ReactNode {
        const { characters, error } = this.props;

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
}

export default CharacterList;
