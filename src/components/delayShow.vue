<template>
  <transition-group tag="div" appear
                    @beforeEnter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"

                    @before-appear="beforeAppear"
                    @appear="appear"
                    @after-appear="afterAppear"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
  export default {
    name: "delayShow",
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.transform = 'translate(10px,10px)';
      },
      enter(el) {
        el.style.transition = 'all .3s ease';
        el.style.transitionDelay = '0s'
      },
      afterEnter(el) {
        el.style.opacity = 1;
        el.style.transform = 'translate(0,0)';
        el.style.transitionDelay = el.dataset.index / 30 + 's'
      },
      beforeAppear(el) {
        el.style.opacity = 0;
        el.style.transform = 'translate(10px,10px)';
      },
      appear(el) {
        el.style.transition = 'all .3s ease';
        el.style.transitionDelay = el.dataset.index / 30 + 's'
      },
      afterAppear(el) {
        el.style.opacity = 1;
        el.style.transform = 'translate(0,0)';
      },
      beforeLeave(el) {

      },
      leave(el, done) {
        el.style.opacity = 0;
        done()
      },
      afterLeave() {

      },
      leaveCancelled() {

      }
    }
  }
</script>

<style scoped>

</style>
