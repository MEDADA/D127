<template>
    <div>
        <giant-table :list.sync="arr" @change="tableChange" group="listGroup1" :column="arrColumn"></giant-table>
        <giant-table :list.sync="arr1" @change="tableChange" group="listGroup1" :column="arrColumn"></giant-table>
    </div>
</template>

<script>
    import giantTable from '../components/giant-table'

    export default {
        name: "GiantTableDemo",
        data() {
            return {
                arr: [],
                arr1: [],
                arrColumn: [
                    'name', 'date'
                ]
            }
        },
        created() {
            this.getMockList();
            this.getMockList2();
        },
        methods: {
            async getMockList() {
                let res = await this.$api.getMockList();
                if (res.data.code === 200) {
                    console.log(res.data.data);
                    this.arr = res.data.data
                }
            }, async getMockList2() {
                let res = await this.$api.getMockList();
                if (res.data.code === 200) {
                    console.log(res.data.data);
                    this.arr1 = res.data.data
                }
            },
            tableChange(e) {
                console.log(e);
                console.log(this.arr);
            }
        },
        components: {
            giantTable
        }
    }
</script>

<style scoped>

</style>