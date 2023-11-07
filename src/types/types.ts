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
// TEEEEEEEEEEEEEEEEESTT
interface Image {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
    medium_image_url?: string;
    maximum_image_url?: string;
}

interface Titles {
    type: string;
    title: string;
}

interface Common {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

export interface AnimeData {
    mal_id: number;
    url: string;
    images: {
        jpg: Image;
        webp: Image;
    };
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
        images: Image;
    };
    approved: boolean;
    titles: Titles[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
        from: Date;
        to: Date;
        prop: {
            from: {
                day: number;
                month: number;
                year: number;
            };
            to: {
                day: number;
                month: number;
                year: number;
            };
        };
        string: string;
    };
    duration: string;
    rating: string;
    score: number;
    scoreb_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    backgrond: string;
    season: string;
    yaer: number;
    broadcast: {
        day: string;
        time: Date;
        timezone: string;
        string: string;
    };
    producers: Common[];
    licensors: Common[];
    studios: Common[];
    genres: Common[];
    explicit_genres: Common[];
    themes: Common[];
    demographics: Common[];
}

export interface AnimeResponse {
    pagination: {
        last_visible_page: number;
        has_next_page: boolean;
        current_page: number;
        items: {
            count: number;
            total: number;
            per_page: number;
        };
    };
    data: AnimeData[];
}

export interface ErrorType {
    error: string;
    message: string;
    status: number;
    type: string;
}
