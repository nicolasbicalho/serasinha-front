<template>
  <div class="main-navbar d-flex justify-content-between p-2 border bg-light">
    <div class="title">
      Serasinha
    </div>
    <div class="navbar-images">
      <img style="margin-right: 20px" src="../assets/envelope.svg" alt="">
      <img style="margin-right: 20px" src="../assets/user.svg" alt="">
      <button @click="logout" type="button" class="btn btn-secondary">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { SerasinhaService } from '../SerasinhaService';

export default {
  name: 'MainNavbar',
  methods: {
    logout() {
      return SerasinhaService.logout();
    }
  }
}
</script>

<style scoped>
  .main-navbar {
    margin-top: 20px;
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