import axios from 'axios';

// export async function fetchAnime(id: string = '') {
//     let baseUrl = 'https://api.jikan.moe/v4/anime';
//     if (id) {
//         baseUrl = baseUrl.concat('/', id);
//     }
//     try {
//         const response = await fetch(baseUrl);
//         const result = await response.json();
//         return result;
//     } catch (e) {
//         return e;
//         // throw new Error('Oops, something went wrong. Try again later');
//     }
// }

export async function fetchAnime(id: string = '') {
    let baseUrl = 'https://api.jikan.moe/v4/anime';
    if (id) {
        baseUrl = baseUrl.concat('/', id);
    }
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data;
        }
    }
}

export async function fetchAnimes(page: number, limit: number) {
    const baseUrl = 'https://api.jikan.moe/v4/anime';

    try {
        const response = await axios.get(baseUrl, {
            params: {
                page,
                limit,
            },
        });
        console.log(response);
        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return e.response?.data;
        }
    }
}
