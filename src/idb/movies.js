import { openDB } from 'idb';
export {
    addMovie,
    getAllMovies,
    getMovieById,
    updateMovie
};

async function addMovie(Title, Year, imdbID, Type, Poster, Rating, Comment) {
    console.log('hello')
    const db = await openDB('filmification', 1);
    const tx = db.transaction('movies', 'readwrite');
    const store = tx.objectStore('movies');
    const newMovie = {
        Title: Title,
        Year: Year,
        imdbID: imdbID,
        Type: Type,
        Poster: Poster,
        Rating: Rating,
        Comment: Comment,
        Date_created: Date.now()
    };
    const request = store.add(newMovie);
    
    await tx.done;
    return newMovie;
}

async function getAllMovies() {
    const db = await openDB('filmification', 1);
    const tx = db.transaction('movies', 'readonly');
    const store = tx.objectStore('movies');
    const request = store.getAll();
    const movies = await request;
    return movies.sort((a, b) => b.Date_created - a.Date_created);
}

async function getMovieById(imdbID) {
    const db = await openDB('filmification', 1);
    const tx = db.transaction('movies', 'readonly');
    const store = tx.objectStore('movies');
    const request = store.get(imdbID);
    return request;
}

async function updateMovie(imdbID, index, newValue) {
    const db = await openDB('filmification', 1);
    const tx = db.transaction('movies', 'readwrite');
    const store = tx.objectStore('movies');
    const item = await store.get(imdbID);
    item[index] = newValue;
    store.put(item);
    await tx.done;
}