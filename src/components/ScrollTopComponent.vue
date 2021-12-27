<template>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
        <slot></slot>
        <span class="scroll-text">Başa Dön</span>
    </a>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 50)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  text-decoration:none;
  z-index:9999!important;
}
.scroll-text{
  font-size:12px;
}
@media only screen and (max-width: 600px) {
  .scroll-text{
  display:none;
}
}

</style>
