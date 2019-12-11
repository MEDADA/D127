
const Mock = require('mockjs');
const json = require('./index.json');
const form = require('./form.json');
const table = require('./table.json');

Mock.mock('/mockApi/user','post',(options)=>{

    let data = Mock.mock(json);
    console.log(data);
    return data
})
Mock.mock('/mockApi/form','post',(options)=>{
    let data = Mock.mock(form);
    console.log(data);
    return data
})
Mock.mock('/mockApi/list','post',(options)=>{
    let data = Mock.mock(table);
    console.log(data);
    return data
})