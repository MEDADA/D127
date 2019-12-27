<template>
    <div>
        <giant-table :list.sync="list" :column="arrColumn" @change="tableChange" group="listGroup1">
            <giant-table-column label="姓名" prop="name"></giant-table-column>
            <giant-table-column label="日期" prop="date"></giant-table-column>
            <giant-table-column label="联系方式" prop="phone"></giant-table-column>
            <div slot="footer" style="text-align: center;">
                <giant-form ref="addForm" :form="add">
                    <tr class="giant-table-tr">
                        <td>
                            <giant-form-item prop="name" :rule="{required:true}">
                                <giant-input v-model="add.name" full-width></giant-input>
                            </giant-form-item>
                        </td>
                        <td>
                            <giant-form-item prop="date" :rule="{required:true}">
                                <giant-input v-model="add.date" full-width></giant-input>
                            </giant-form-item>
                        </td>
                        <td>
                            <giant-form-item prop="phone" :rule="{required:true}">
                                <giant-input v-model="add.phone" full-width></giant-input>
                            </giant-form-item>
                        </td>
                    </tr>
                </giant-form>
                <giant-button type="info" @click="listAdd(list)">ADD</giant-button>
            </div>
        </giant-table>
        <giant-table :list.sync="list2" :column="arrColumn" @change="tableChange" group="listGroup1">
            <giant-table-column label="姓名">
                <template #scope="{row,index}">
                    <giant-input v-if="table2IsEdit[index]" v-model="row.name"></giant-input>
                    <span v-else>
                        {{row.name}}
                    </span>
                </template>
            </giant-table-column>
            <giant-table-column label="日期">
                <template #scope="{row,index}">
                    <giant-input v-if="table2IsEdit[index]" v-model="row.date"></giant-input>
                    <span v-else>
                        {{row.date}}
                    </span>
                </template>
            </giant-table-column>
            <giant-table-column label="操作" fixed="right">
                <template #scope="{row,index}">
                    <giant-button @click="rowHandle(index,false)" v-if="table2IsEdit[index]">完成</giant-button>
                    <giant-button @click="rowHandle(index,true)" v-else>编辑</giant-button>
                </template>
            </giant-table-column>
        </giant-table>
        <giant-table :list.sync="list3" :column="arrColumn" @change="tableChange" group="listGroup1">
            <giant-table-column label="姓名" prop="name"></giant-table-column>
            <giant-table-column label="日期" prop="date"></giant-table-column>
        </giant-table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                list: [
                    {'name': '张三', 'date': '2019年12月17日', 'phone': '13166744995'},
                    {name: '李四', date: '1919年01月27日'},
                    {name: '王五', date: '1919年01月27日'},
                    {name: '赵六', date: '1919年01月27日'},
                    {name: '赵六2', date: '1919年01月27日'},
                    {name: '赵六3', date: '1919年01月27日'},
                ],
                list2: [
                    {name: '黄七', date: '1919年01月27日'},
                    {name: '兰八', date: '1919年01月27日'},
                    {name: '马九', date: '1919年01月27日'},
                ],
                list3: [
                    {name: '7酱', date: '1919年01月27日'},
                    {name: '8酱', date: '1919年01月27日'},
                    {name: '9酱', date: '1919年01月27日'},
                ],
                arrColumn: [
                    'name', 'date', 'phone'
                ],
                add: {
                    name: '', date: '', phone: ''
                },
                table2IsEdit:[false,false,false]
            }
        },
        created() {

        },
        methods: {
            tableChange(e) {
                console.log(e);
            },
            tableHandleClick(row) {
                console.log(row);
                row.edit = !row.edit;
                this.$forceUpdate()
            },
            listAdd(list) {
                this.$refs.addForm.validate().then(() => {
                    list.push(Object.assign({}, this.add));
                    Object.keys(this.add).forEach(i => {
                        this.add[i] = ''
                    });
                }).catch(() => {
                })
            },
            rowHandle:_.debounce(function(index,type){
                console.log(type);
                this.$set(this.table2IsEdit,index,type);
            },300,{leading:true})

        }
    }
</script>

<style scoped>

</style>