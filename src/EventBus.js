import Vue from 'vue'
import imageError from './assets/img/img-error.png'
import imagePreview from './components/imagePreview'

let eventBus = Vue.directive('view-pic', {
  inserted: function (el) {
    el.onerror = (e) => { //错误情况处理
      console.log(e);
      el.src = imageError;
      el.onerror = () => {
      }; //清理事件绑定
      el.onload = () => {
      };
    };
    el.onload = (e) => {
      el.onclick = (e2) => {
        if (!document.getElementById('view-pic')) {  //插入Vue组件
          let _div = document.createElement('div');
          _div.id = 'view-pic';
          document.getElementById('app').appendChild(_div);
        }
        let component = Vue.extend(imagePreview);  //调用图片预览组件
        let testDom = new component().$mount();  //获取挂在对象
        testDom.show = true;  //修改参数
        testDom.src = el.src;
        testDom.list
        document.getElementById('view-pic').innerHTML = '';
        document.getElementById('view-pic').appendChild(testDom.$el);
      };
      el.onload = () => {
      }; //清理事件绑定
    };
  }
});
export default eventBus

