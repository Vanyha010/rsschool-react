import { EmptyInputResponse, Character, APIError } from '../types/types';

export async function fetchCharacters(): Promise<EmptyInputResponse> {
    try {
        const response = await fetch(
            'https://rickandmortyapi.com/api/character/?page=1'
        );
        const result = await response.json();
        console.log(result);
        return result;
    } catch {
        throw new Error('Sorry, can`t fetch characters');
    }
}

export async function searchCharacter(
    id: string
): Promise<Character | APIError | Character[]> {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
        );
        const result = await response.json();
        return result;
    } catch {
        throw new Error('Sorry, can`t find this character');
    }
}
