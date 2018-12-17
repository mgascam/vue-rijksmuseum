<template>
  <div id="app">
    <SearchForm v-on:search="onSearch"
      :results="results"/>
    <!-- <Api /> -->
  </div>
</template>

<script>
import SearchForm from './components/SearchForm';
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
    SearchForm
  },
  methods: {
    onSearch: async function(query) {
      this.results = [];
      const data = await this.api.search(query);
      this.results = data;
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
