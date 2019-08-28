<template>
    <div class="line">
        <ul>
            <li class="lines"></li>
            <li class="lines"></li>
            <li class="lines"></li>
            <li class="lines"></li>
            <li class="lines"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Lines"
    }
</script>

<style scoped lang="scss">
.line{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        position: relative;
        li{
            width: 20%;
            background: #000;
            height: 100%;
            box-sizing: border-box;
            /*border-right: white 1px solid;*/
            position: absolute;
        }
        li:nth-child(1){
            left: 0;
        }
        li:nth-child(2){
            left: 20%;
        }
        li:nth-child(3){
            left: 40%;
        }
        li:nth-child(4){
            left: 60%;
        }
        li:nth-child(5){
            left: 80%;
        }
    }
}
</style>
