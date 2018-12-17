<template>
    <div>
        <form 
            id="search-form" 
            method="post"
            action="#" 
            v-on:submit.prevent = "onSubmit">
        <p>
            <label for="searchTearm">Search: </label>
            <input
                id="searchTerm"
                v-model="searchTerm"
                type="text"
                name="searchTerm"
                placeholder="ex. Rembrandt">
        </p>
        <p>
            <input
                type="submit"
                value="Submit">
        </p>
        </form>
        <div id="results">
            {{ results }}
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Search',
    props: ['results'],
    data() {
        return {
            searchTerm: null
        }
    },
    methods: {
        onSubmit: async function (e) {
            e.preventDefault();
            this.$emit('search', this.searchTerm);
        }
    }
}
</script>

<style>

</style>
