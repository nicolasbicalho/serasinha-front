<template>
  <div>
      <div class="green-card">

      </div>
      <div class="score-card">
          <p>{{ score }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ScoreCard',
    
}
</script>

<style scoped>
    .score-card {
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 0px 15px 15px 0px;
    }
    .green-card {
        background: #58EA4B;
        border: 1px solid #000000;
        border-radius: 15px 0px 0px 15px;
    }
</style>