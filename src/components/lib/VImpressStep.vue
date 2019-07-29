<template lang="pug">
  .step(:id="id" :class="stepClasses" v-bind="data")
    slot
    .notes
      slot(name="notes")
</template>

<script>
export default {
  name: 'VImpressStep',
  props: {
    id: {
      type: String,
      default: () => null
    },
    position: {
      type: Object,
      default: () => ({})
    },
    isTitle: {
      type: Boolean,
      default: () => false
    },
    isSlide: {
      type: Boolean,
      default: () => false
    },
    notes: {
      type: String,
      default: () => null
    },
    scale: {
      type: Number,
      default: () => null
    },
    related: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    stepClasses() {
      let clzs = []
      if (this.isTitle) {
        clzs.push('title')
      }
      if (this.isSlide) {
        clzs.push('slide')
      }

      return clzs
    },
    data() {
      let dat = {}
      let pname = `data${this.related?'-rel':''}-`
      if (this.position.y !== undefined) {
        dat[`${pname}x`] = this.position.x
      }
      if (this.position.y !== undefined) {
        dat[`${pname}y`] = this.position.y
      }
      if (this.position.y !== undefined) {
        dat[`${pname}z`] = this.position.z
      }

      if (this.scale) {
        dat['data-scale'] = this.scale
      }

      return dat
    }
  }
}
</script>

<style lang="stylus" scoped>
// .notes
//   display none

// .title
//   background-image url(./images/background-title.png)
//   > h1
//   > h2
//   > h3
//     position absolute
//     left 45px
//     width 90%;
//     text-align center

// .title
//   > h1
//     top 40px
//   > h2
//     top 400px
//   > h3
//     top 500px

// .slide
//   display block

//   width 900px
//   height 700px
//   padding 40px 60px

//   background-image url(./images/background.png)
//   background-color white
//   border 1px solid rgba(0, 0, 0, .3)
//   border-radius 10px
//   box-shadow 0 2px 6px rgba(0, 0, 0, .1)
//   text-shadow 0 2px 2px rgba(0, 0, 0, .1)
//   font-family 'Open Sans', Arial, sans-serif
//   font-size 30px
//   letter-spacing -1px
//   > h1
//   > h2
//   > h3
//     margin-bottom 0.5em
//     margin-top 0.5em
//     text-align center
//   > p
//     text-align center
//     margin: 0.7em
//   > li
//     margin 0.2em

// /* Highlight.js used for coloring pre > code blocks. */
// .slide pre > code {
//   font-size: 14px;
//   text-shadow: 0 0 0 rgba(0, 0, 0, 0);
// }


</style>
