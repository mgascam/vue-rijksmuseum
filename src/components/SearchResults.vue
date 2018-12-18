<template>
    <div id="search-results" v-if="results.length > 0">
       <table>
           <thead>
               <tr>
                   <th>#</th>
                   <th>Image</th>
                   <th>Title</th>
                   <th>Author</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(result, index) in results" :key="result.id">
                   <td>{{index}}</td>
                   <td v-if="result.headerImage.url">
                       <img :src="result.webImage.url" 
                            width="150"
                            height="auto"
                            />
                    </td>
                   <td v-else>Image not found.</td>
                   <td><a :href="result.links.web">{{ result.title }}</a></td>
                   <td>{{ result.principalOrFirstMaker }}</td>
               </tr>
           </tbody>
       </table>
    </div>
</template>

<script>
export default {
    name: 'SearchResults',
    props: ['results']
}
</script>

<style>

</style>
