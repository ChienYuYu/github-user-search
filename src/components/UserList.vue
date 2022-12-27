<template>
  <div class="container">
    <div class="card" v-for="u in searchData" :key="u.id">
      <a :href="u.html_url" target="_blank">
        <img
          :src="u.avatar_url"
          alt="">
        <h3>{{ u.login }}</h3>
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const searchData = computed(() => store.state.userData);
    return { searchData };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 3rem auto;
  // border: 1px solid #f00;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.card {
  width: 180px;
  margin: 1rem;
  border: 1px solid #aaa;
  border-radius: .5rem;
  transition: .3s;
  &:hover{
    transform: scale(105%);
  }

  a {
    display: block;
    padding: 1rem;
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: .5rem;
  }

  h3 {
    margin-top: 1rem;
    text-align: center;
    color: #fff;
  }
}
</style>
