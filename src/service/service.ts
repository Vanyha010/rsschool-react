import { EmptyInputResponse, Character } from '../types/types';

export async function fetchCharacters(): Promise<EmptyInputResponse> {
    try {
        const response = await fetch(
            'https://rickandmortyapi.com/api/character/?page=1'
        );
        return await response.json();
    } catch {
        throw new Error('Sorry, can`t fetch characters');
    }
}

export async function searchCharacter(id: string): Promise<Character> {
    try {
        const response = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
        );
        return await response.json();
    } catch {
        throw new Error('Sorry, can`t find this character');
    }
}
