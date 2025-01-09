
class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        try {
            const getCommentsResponse = await axios.get(
                `${this.baseUrl}comments?api_key=${this.apiKey}`
            );
            return getCommentsResponse.data;
        } catch (error) {
            console.error("An error has occurred: " + error);
        }
    }
}

const api = new BandSiteApi("ac2bf06c-5b5f-4ccb-9b1c-5d24a455bc33");

async function displayComments() {
    const commentsList = document.getElementById("comments-list");

    // Fetch comments
    const comments = await api.getComments();
    console.log("Fetched comments:", comments); // Log to debug


    // Add comments to the list
    comments.forEach(comment => {
        const listItem = document.createElement("li");
        listItem.textContent = `${comment.comment} (Posted on: ${new Date(comment.timestamp).toLocaleString()})`;
        commentsList.appendChild(listItem);
    });
}