<template>
  <div class="wrapper">
    <h1>Github User Search</h1>
    <SearchBar></SearchBar>
    <UserList></UserList>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import UserList from '@/components/UserList.vue';

export default {
  name: 'App',
  components: { SearchBar, UserList },
};
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
.wrapper{
  background: #121212;
  height: 100vh;
  overflow: auto;
  h1{
    color: #fff;
    text-align: center;
    padding: 5rem 0;
  }
}
</style>
