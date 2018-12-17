class Api {
    constructor(props) {
        this.key = props.key;
        this.host = props.host || 'https://www.rijksmuseum.nl/api'; 
        this.language = props.language || 'en';
    }
    async search(query) {
        const searchUrl = `${this.host}/${this.language}/collection/?q=${query}&key=${this.key}&format=json`;
        const res = await fetch(searchUrl);
        const data = await res.json();
        return data.artObjects;
    }
}

export default Api;