<template>
  <button type="button" class="round-button" :style="`background: ${backgroundColor}`">
      {{ buttonText }}
  </button>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        backgroundColor: String,
        buttonText: String,
    }
}
</script>

<style scoped>
.round-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 0px;
    gap: 10px;

    position: absolute;
    width: 344px;
    height: 52px;
    left: calc(50% - 344px/2 + 1.5px);
    bottom: 52px;

    background: #000000;
    border-radius: 100px;
    color: #FFFFFF;
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
}
</style>