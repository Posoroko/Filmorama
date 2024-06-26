import { openDB } from 'idb';

export {
    initiateIdb,
    deleteDatabaseByName
};

async function initiateIdb() {
    let dbCreated = false;
    const db = await openDB('filmification', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('movies')) {                
                db.createObjectStore('movies', { keyPath: 'imdbID' });
                db.createObjectStore('state');
                dbCreated = true;
            }
        },
    });

    let persistent = {
        status: false,
        message: ''
    };

    if (db) {
        persistent.status = await navigator.storage.persist().then(granted => {
            if (granted) {
                persistent.message = 'Les donnée seront stockées dans votre navigateur.';
            } else {
                persistent.message = "Les données risquent d'être supprimées en cas de manque d'espace de stockage disponible.";
            }

            db.close();

            return granted;
        });
    }

    return { dbCreated, persistent };
}

async function deleteDatabaseByName(name) {
    const DBDeleteRequest = window.indexedDB.deleteDatabase(name);

    DBDeleteRequest.onerror = (event) => {
        console.error("Error deleting database.");
    };

    DBDeleteRequest.onsuccess = (event) => {
        // localStorage.removeItem('dbExists');
        location.reload();
        console.log("reloaded");
        console.log("Base de données supprimée !");

        console.log(event.result); // should be undefined
    };
}
