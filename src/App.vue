<template>
  <div id="app">
    <SearchForm v-on:search="onSearch" />
    <SearchResults :results="results" />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue';
import SearchResults from './components/SearchResults.vue';
import Api from'./api/Api';

export default {
  name: 'app',
  created() {
    this.api = new Api({key: 'ieTAe8ON'});
  },
  data() {
    return {
      results: []
    }
  },
  components: {
    SearchForm,
    SearchResults
  },
  methods: {
    onSearch: async function(query) {
      this.results = [];
      const data = await this.api.search(query);
      this.results = data.artObjects;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
