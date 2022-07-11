<template>
  <div class="container">
    <MainNavbar />
    <div class="content">
      <div class="welcome-title">
        Bem vindo, {{ sanitizedName }}
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';
export default {
    name: 'MainMenu',
    metaInfo: {
      title: 'Default App Title',
      titleTemplate: '%s | vue-meta Example App'
    },
    components: {
      MainNavbar,
    },
    data: () => ({
      sanitizedName: '',
    }),
    mounted() {
      this.sanitizedName = localStorage.getItem('email') ? localStorage.getItem('email').split('@')[0] : '';
    }
}
</script>

<style scoped>
  .content {
    margin-top: 30px;
  }

  .welcome-title {
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    /* identical to box height, or 121% */

    letter-spacing: 0.374px;

    color: #818181;
  }
</style>