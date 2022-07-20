<template>
    <div class="d-flex justify-content-between">
        <div class="label">
            SCORE:
        </div>
        <div style="height: 50px;" class="d-flex">
            <div class="green-card"/>
            <div class="score-card">
                <div class="score-text">{{ score }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScoreCard',
    props: {
        score: Number,
    }
    
}
</script>

<style scoped>
    .score-card {
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 0px 15px 15px 0px;
        display: flex;
        align-items: center;
    }
    
    .green-card {
        background: #58EA4B;
        border: 1px solid #000000;
        border-radius: 15px 0px 0px 15px;
        width:50px;
    }

    .score-text {
        margin-left: 10px;
        font-size: 36px;
        margin-right: 24px;
        line-height: 16px;
        color: #000000;
        opacity: 0.9;
    }
    
    .label {
        font-size: 17px;
        line-height: 22px;
        letter-spacing: -0.408px;
        color: #000000;

        font-family: 'Abel';
        font-style: normal;
        align-self: center;
    }
</style>