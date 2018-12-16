<template>
    <div id="api">
        <figure>
                <img :src="info.webImage.url" 
                    width=80% alt="">
                    <figcaption>{{  info.title }}</figcaption>
        </figure>
        <ul id="metadata" class="demo">
            <li v-for="(value, key) in info" :key="key">
                <b>{{key}}: </b>{{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
const apiKey = 'ieTAe8ON';
const apiUrl = `https://www.rijksmuseum.nl/api/en/collection/SK-C-5?key=${apiKey}&format=json`;
export default {
    name: 'Api',
    data: function() {
        return {
            info: null
        }
    },
    mounted() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => this.info = data.artObject);
    }
}
</script>

<style>
    #metadata {
        opacity: 0;
    }
    #metadata:hover {
        opacity: 1;;
    }
</style>
