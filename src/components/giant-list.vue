<template>
    <div class="giant-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "giant-list"
    }
</script>

<style scoped lang="scss">
    .giant-list {
        overflow: hidden;
        background-color: #fff;
    }
</style>