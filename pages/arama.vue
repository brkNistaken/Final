<template>
    <div>
      <Search @search="handleSearch" />
    </div>
  </template>
  
  <script>
  import Search from "../components/search.vue";
  
  export default {
    components: {
      Search,
    },
    methods: {
      handleSearch({ query, filters }) {
        console.log("Arama Sorgusu:", query);
        console.log("Filtreler:", filters);
        // Arama işlemini burada gerçekleştirin
      },
    },
  };
  </script>