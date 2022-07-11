<template>
  <div>
      <div class="label"> {{ label }} </div>
      <input class="input" type="text" v-model="value" @change="onInput">

  </div>
</template>

<script>
export default {
    name: 'InputText',
    data: () => ({
        value: '',
    }),
    props: {
        label: String,
    },
    methods: {
        onInput() {
            return this.$emit('input', this.value);
        }
    }
}
</script>

<style scoped>

.label {
    font-family: Abel;
    margin-bottom: 5px;
}

.input {
    box-sizing: border-box;
    /* Auto layout */

    padding: 20px 24px;
    gap: 10px;


    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 15px;
}

</style>