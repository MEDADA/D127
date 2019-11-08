<template>
  <div style="margin:30px 15px">
    <div>
      <el-input v-model="item.formula" v-for="(item,index) in formulaList" :key="index">

      </el-input>
    </div>
    <el-button @click="AddFormula">add formula</el-button>
    <el-form :model="{domList}" ref="ruleForm">
      <el-row>
        <template v-for="(dom,index) in domList" ref="domList">
          <el-col :span="6" :key="index">
            <el-form-item :prop="'domList.'+index+'.value'" :rules="dom.rule" :label="dom.label">
              <render-dom :dom="dom"></render-dom>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div>
      <el-button @click="checkRuleForm">校验</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "renderDomList",
    data() {
      return {
        formulaList:[],
        config: [
          {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          },
          {
            label: '输入框222',  //标签名
            baseFieldId: 5, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '3',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          }, {
            label: '选择框111',  //标签名
            baseFieldId: 6, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: ['是', '否'],  //选项
            value: '456',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          },
          {
            label: '选择框111',  //标签名
            baseFieldId: 3, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: ['是', '否'],  //选项
            value: '456',
            inputType: 'select', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          }, {
            label: '选择框111',  //标签名
            baseFieldId: 7, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: ['是', '否'],  //选项
            value: '456',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          }, {
            label: '选择框111',  //标签名
            baseFieldId: 3, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: ['是', '否'],  //选项
            value: '456',
            inputType: 'select', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          }, {
            label: '选择框111',  //标签名
            baseFieldId: 3, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: ['是', '否'],  //选项
            value: '456',
            inputType: 'select', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          }, {
            label: '输入框111',  //标签名
            baseFieldId: 1, //字段id
            blockId: 1, //块id
            child: null, //子级字段
            options: [],  //选项
            value: '123',
            inputType: 'input', //组件类型
            disabled: false, //是否不可编辑
            required: true,  //是否必填
            show: true, //是否显示
            sort: 1, //排序
            rule: '^((13[0-9])|(15[^4,\\D])|(18[0-9]))\\d{8}$'
          },
        ],
        domList: []
      }
    },
    created() {
      this.initDomList()
    },
    methods: {
      initDomList() {
        setTimeout(() => {
          let domList = [];
          for (let i = 0; i < this.config.length; i++) {
            let item = this.config[i];
            let dom = this.formatConfigData(item);
            domList.push(dom)
          }
          this.domList = domList;
          console.log(this.domList);
        }, 1000)
      },
      formatConfigData(obj) {
        let label = obj.label || '';
        let value = obj.value || '';
        let sort = obj.sort;
        let disabled = obj.disabled;
        let required = obj.required;
        let show = obj.show;
        let id = obj.baseFieldId;
        let _obj = {
          label,  //标签名
          value,
          disabled, //是否不可编辑
          required,  //是否必填
          show, //是否显示
          sort, //排序
          id,
          component: this.getComponent(obj.inputType)
        };
        if (obj.rule) {
          _obj.rule = this.getRule(obj.rule, required, obj.inputType, label)
        }
        if (obj.formula) {
          _obj.formula = obj.formula
        }
        return _obj
      },
      getRule(rule, required, inputType, label) {
        let _rule = [];
        if (required) {
          let _requiredRule = {
            required: true,
            message: this.getPlaceHolder(inputType, label),
            trigger: 'blur'
          };
          _rule.push(_requiredRule)
        }
        if (rule) {
          let _RegExp = new RegExp(rule);
          console.log(_RegExp);
          let validator = {
            validator: (_rule, value, callback) => {
              if (!(_RegExp.test(value))) {
                callback(new Error('验证规则未通过'))
              } else {
                callback()
              }
            }, trigger: 'blur'
          };
          _rule.push(validator)
        }
        return _rule
      },
      getPlaceHolder(inputType, label) {
        switch (inputType) {
          case 'input':
            return '请输入' + label;
          case 'select':
            return '请选择' + label;
        }
      },
      getComponent(inputType) {
        switch (inputType) {
          case 'input':
            return 'el-input';
          case 'select':
            return 'el-select';
        }
      },
      checkRuleForm() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {

          }
        })
      },
      getFormulaResult(formula, fix = '4') {
        let _str = formula.split('=');

        let formulaGroup = _str[0].match(/#+[0-9]+#/g);
        let _formula = _str[0];
        for (let i = 0; i < formulaGroup.length; i++) {
          let item = formulaGroup[i];
          let value = this.getIdValue(item.replace(/#/g, ''));
          _formula = _formula.replace(/#+[0-9]+#/, value)
        }
        console.log(_formula);
        _formula = eval(_formula);

        if (!isNaN(_formula)) {
          let _fixed = Math.pow(10, parseInt(fix));
          return (Math.round(_formula * _fixed) / _fixed);
        } else {
          return false
        }
      },
      getIdValue(id) {
        let list = this.domList;
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (item.id - 0 === id - 0) {
            return item.value - 0
          }
        }
      },
      setValue(id, value) {
        let list = this.domList;
        if (!value) return false;
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (item.id - 0 === id - 0) {
            item.value = value;
            return false
          }
        }
      },
      AddFormula(){
        this.formulaList.push({
          formula:''
        })
      }
    },
    components: {
      'render-dom': {
        functional: true,
        props: {
          dom: {
            type: Object,
            default: () => {
              return {}
            }
          }
        },
        render: (h, context) => {
          let params = context.props.dom;
          return h(params.component, {
            domProps: {
              value: params.value
            },
            on: {
              input: function (event) {
                params.value = event;
                if (params.formula) {
                  clearTimeout(params._timer);
                  params._timer = setTimeout(() => {
                    let _formula = params.formula;
                    let result = context.parent.getFormulaResult(_formula, '2') + '';
                    if (result) {
                      let resultId = _formula.split('=')[1].replace(/#/g, '');
                      context.parent.setValue(parseInt(resultId), result)
                    }
                    delete params._timer;
                  }, 1000)
                }
              }
            },
            attrs: {
              value: params.value,
              disabled: params.disabled
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
