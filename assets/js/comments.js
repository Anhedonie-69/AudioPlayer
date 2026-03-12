async function getCommentsBySongId(songId){
    try {
        const response = await fetch(
            `app/getCommentsBySongId.php?id=${songId}`
        );

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const allComments = await response.json();
        return allComments;

    } catch (error) {
        console.error("Error getComments :", error);
    };
};

async function createComment(content, songId){
    try {

        const data = {
            content: content,
            songId: songId
        };

        const response = await fetch("app/createComment.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Erreur réseau");
        };

        const result = await response.json();

    } catch (error) {
        console.error("Error createComment :", error);
    };
}