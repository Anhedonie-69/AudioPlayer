async function getSongsByAlbumById(albumId){
    try {
        const response = await fetch(
            `../app/getSongsByAlbumId.php?id=${albumId}`
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

async function getCoverByAlbumById(albumId){
    try {
        const response = await fetch(
            `../app/getCoverByAlbumId.php?id=${albumId}`
        );

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const cover = await response.json();
        return cover;

    } catch (error) {
        console.error("Error getCover :", error);
    };
};