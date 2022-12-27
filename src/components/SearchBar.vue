<template>
  <div class="wrap">
    <input type="text" aria-label="1" v-model="inputName" placeholder="輸入使用者名稱">
    <button @click="searchUser">搜尋</button>
  </div>
</template>

<script>
// https://api.github.com/search/users?q=xxx
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const inputName = ref('');
    const searchUser = () => {
      console.log(123);
      fetch(`https://api.github.com/search/users?q=${inputName.value}`)
        .then((res) => res.json())
        .then((res) => {
          store.commit('writeUserData', res.items);
        })
        .catch((err) => console.log(err));
    };

    return { inputName, searchUser };
  },

};
</script>

<style lang="scss" scoped>
.wrap {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  input[type=text] {
    width: 30%;
    background: #000;
    color: #fff;
    padding: .3rem;
    outline: none;
    border: none;
    transition: .3s;

    &:focus {
      width: 40%;
    }
  }

  button {
    background: transparent;
    border: 1px solid #fa0;
    color: #fa0;
    padding: .3rem 1rem;
    transition: .3s;

    &:hover {
      background: #fa0;
      color: #111;
    }
  }
}
</style>
