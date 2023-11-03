import React from 'react';
import { Character } from '../types/types';
import CharacterItem from './CharacterItem';

type PropsType = {
    characters: Character[];
};

class CharacterList extends React.Component<PropsType> {
    render(): React.ReactNode {
        const { characters } = this.props;
        // console.log(characters);

        if (characters.length === 0) {
            return (
                <div>
                    <p>No characters found</p>
                </div>
            );
        }
        return (
            <ul>
                {characters.map((character, idx) => (
                    <CharacterItem character={character} key={idx} />
                ))}
            </ul>
        );
    }
}

export default CharacterList;
