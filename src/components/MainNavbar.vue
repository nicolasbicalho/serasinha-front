<template>
  <div class="d-flex justify-content-between p-2 border bg-light">
    <div class="title">
      Serasinha
    </div>
    <div class="navbar-images">
      <img style="margin-right: 20px" src="../assets/envelope.svg" alt="">
      <img src="../assets/user.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar',
}
</script>

<style scoped>
  .main-navbar {
    border: 5px;
    border-color: #E0E0E0;
  }
  .navbar-images {
    display: flex;
    justify-content: flex-end;
  }

  .title {
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;

    letter-spacing: 0.374px;

    color: #9e9e9e;
  }
</style>