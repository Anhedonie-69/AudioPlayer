async function getSongsByAlbumById(albumId){
    try {
        const response = await fetch(
            `app/getSongsByAlbumId.php?id=${albumId}`
        );

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const album = await response.json();
        return album;

    } catch (error) {
        console.error("Error getSongs :", error);
    };
};

async function getAlbumById(albumId){
    try {
        const response = await fetch(
            `app/getAlbumById.php?id=${albumId}`
        );

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const al = await response.json();
        return al;

    } catch (error) {
        console.error("Error getAlbumById :", error);
    };
};

async function getAllAlbums(){
    try {
        const response = await fetch(
            `app/getAllAlbums.php`
        );

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const albs = await response.json();
        return albs;

    } catch (error) {
        console.error("Error getAllAlbums :", error);
    };
}