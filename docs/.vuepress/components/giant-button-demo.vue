<template>
    <div>
        <div>按钮类型</div>
        <div>
            <giant-button type="default">默认按钮</giant-button>
            <giant-button type="primary">主要按钮</giant-button>
            <giant-button type="info">信息按钮</giant-button>
            <giant-button type="warning">危险按钮</giant-button>
            <giant-button type="danger">警告按钮</giant-button>
        </div>
        <div>禁用状态</div>
        <div>
            <giant-button type="default" disabled>禁用状态</giant-button>
            <giant-button type="primary" disabled>禁用状态</giant-button>
        </div>
        <div>加载中</div>
        <div>
            <giant-button type="default" loading>加载中...</giant-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonDemo"
    }
</script>

<style scoped>

</style>