export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: object;
    location: object;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface EmptyInputResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}

export interface APIError {
    error: string;
}

// export type APIResponse = Character | EmptyInputResponse | APIError;
