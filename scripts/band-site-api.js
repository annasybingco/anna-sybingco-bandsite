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
    async addComment(newComment) {
        try {
            const addCommentResponse = await axios.post(
                `${this.baseUrl}comments?api_key=${this.apiKey}`,
                newComment
            );
            return addCommentResponse.data;
        } catch (error) {
            console.error("An error occured: " + error);
        }
    }

    async getShowdates() {
        try {
            const getShowdatesResponse = await axios.post (
                `${this.baseUrl}showdates?api_key=${this.apiKey}`,
            );
            return getShowdatesResponse.data;
        } catch (error) {
            console.error("An error has occurred: " + error);
        }
    }

}


