export async function fetchAnime(id: string = '') {
    let baseUrl = 'https://api.jikan.moe/v4/anime';
    if (id) {
        baseUrl = baseUrl.concat('/', id);
    }
    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        return result;
    } catch (e) {
        return e;
        // throw new Error('Oops, something went wrong. Try again later');
    }
}
