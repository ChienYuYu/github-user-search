<template>
  <div class="wrapper">
    <h1>Github User Search</h1>
    <div class="wrap">
      <input type="text" aria-label="1">
      <button>搜尋</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
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
  h1{
    color: #fff;
    text-align: center;
    padding: 5rem 0;
  }
  .wrap{
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    input[type=text] {
      background: #000;
      color: #fff;
      padding: .3rem;
      outline: none;
      border: none;
    }
    button{
      background: transparent;
      border: 1px solid #fa0;
      color: #fa0;
      padding: .3rem 1rem;
    }
  }
}
</style>
