<template>
    <label class="box">
        <input type="checkbox" class="checkbox">
        <span class="wrap"></span>
    </label>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.box {
    position: relative;
    display: inline-block;
    border: 1px solid #e8e8e8;
    width: 50px;
    height: 50px;
    border-radius: 4px;
}
.wrap{
    transform: scale(0);
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
}
.checkbox:checked + .wrap{
    transition: transform .2s ease;
    transform: scale(1);
    background: #489eff;
}
.checkbox:checked + .wrap::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 35%;
    display: block;
    width: 0;
    height: 0;
    /* width: 30px; */
    /* height: 14px; */
    border-top: 20px solid transparent;
    border-right: 40px solid transparent;
    border-left: 4px solid #fff;
    border-bottom: 4px solid #fff;
    transform: translate(-50%, -50%) rotate(-45deg);
}
.checkbox {
    display: none;
}
</style>