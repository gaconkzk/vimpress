<template lang="pug">
  .vimpress
    .fallback-message(v-if="!support")
      p error impress not supported
    div(:id="id" :data-transition-duration="duration" :data-autoplay="autoplay")
      slot
    #impress-toolbar
    .impress-progressbar
    .impress-progress
    #impress-help
</template>

<script>
// Impress console not handle custom rootId - check source
import 'impress.js/js/impress.js'

export default {
  name: "VImpress",
  props: {
    id: {
      type: String,
      default: () => "impress" // for now choose diff name got error - im fix the lib later
    },
    duration: {
      type: Number,
      default: () => 1000,
    },
    autoplay: {
      type: Number,
      default: () => 10
    }
  },
  data() {
    return {
      impressApi: null
    }
  },
  computed: {
    support() {
      // TODO should do better later
      return true
    }
  },
  mounted() {
    if (window.impress) {
      this.impressApi = window.impress(this.id)
      this.impressApi.init()
    }
  },
  beforeDestroy() {
    if (this.impressApi) {
      this.impressApi.tear()
    }
  }
}
</script>

<style lang="stylus">
body
  font-family 'PT Sans', sans-serif
  min-height 740px
  background rgb(215, 215, 215)
  color rgb(102, 102, 102)

.step
  position relative
  width 900px
  padding 40px
  margin 20px auto
  box-sizing border-box
  font-family 'PT Serif', georgia, serif
  font-size 48px
  line-height 1.5

.impress-enabled
  pointer-events none
  .step
    margin 0
    opacity 0.3
    transition opacity 1s
    &.active
      opacity 1
  div#impress-toolbar
    position fixed
    right 1px
    bottom 1px
    opacity 0.6
    z-index 10
    & > span
      margin-right 10px
  #impress-help
    background none repeat scroll 0 0 rgba(0, 0, 0, 0.5)
    color #EEEEEE
    font-size 80%
    position fixed
    left 2em
    bottom 2em
    width 24em
    border-radius 1em
    padding 1em
    text-align center
    z-index 100
    font-family Verdana, Arial, Sans
    td
      padding-left 1em
      padding-right 1em
  #impress
    pointer-events auto
  #impress-toolbar
    pointer-events auto
  #impress-console-button
    pointer-events auto

.notes
  display none

.slide
  display block
  width 900px
  height 700px
  padding 40px 60px
  background-image url(./images/background.png)
  background-color white
  border 1px solid rgba(0, 0, 0, .3)
  border-radius 10px
  box-shadow 0 2px 6px rgba(0, 0, 0, .1)
  text-shadow 0 2px 2px rgba(0, 0, 0, .1)
  font-family 'Open Sans', Arial, sans-serif
  font-size 30px
  letter-spacing -1px
  p
    text-align center
    margin 0.7em
  li
    margin 0.2em
  pre
    & > code
      font-size 14px
      text-shadow 0 0 0 rgba(0, 0, 0, 0)
  .right
    float right
    margin-left 40px
    margin-right 0px
    margin-top 20px
    margin-bottom 20px
  .left
    float left
    margin-right 40px
    margin-left 0px
    margin-top 20px
    margin-bottom 20px
  .top
    position absolute
    top 20px
    margin-bottom 20px
    margin-top 0px
  .bottom
    position absolute
    bottom 20px
    margin-bottom 0px
    margin-top 20px

.slide h1,
.slide h2,
.slide h3
  margin-bottom 0.5em
  margin-top 0.5em
  text-align center

code
  font-family "Cutive mono","Courier New", monospace

a
  color inherit
  text-decoration none
  padding 0 0.1em
  background rgba(200,200,200,0.2)
  text-shadow -1px 1px 2px rgba(100,100,100,0.9)
  border-radius 0.2em
  border-bottom 1px solid rgba(100,100,100,0.2)
  border-left 1px solid rgba(100,100,100,0.2)
  transition 0.5s

a:hover,
a:focus
  background rgba(200,200,200,1)
  text-shadow -1px 1px 2px rgba(100,100,100,0.5)

blockquote
  font-family 'PT Serif'
  font-style italic
  font-weight 400

em
  text-shadow 0 2px 2px rgba(0, 0, 0, .3)

strong
  text-shadow -1px 1px 2px rgba(100,100,100,0.5)

q
  font-family 'PT Serif'
  font-style italic
  font-weight 400
  text-shadow 0 2px 2px rgba(0, 0, 0, .3)

strike
  opacity 0.7

small
  font-size 0.4em

img
  width 300px

.title
  background-image url(./images/background-title.png)
  h1
    top 50px
  h2
    top 400px
  h3
    top 500px

.title h1,
.title h2,
.title h3
  position absolute
  left 45px
  width 90%
  text-align center

.future
  .fly-in
    transform translateY(-700px)
    opacity 0.0
  .fade-in
    opacity 0.0
  .zoom-in
    transform scale(10)
    opacity 0.0

.present
  .fly-in
    transform translateY(0px)
    opacity 1.0
    transition 2s
  .fade-in
    opacity 1.0
    transition 3s
  .zoom-in
    transform scale(1)
    opacity 1.0
    transition 3s

.past
  .fly-out
    transform translateY(700px)
    opacity 0.0
    transition 2s
  .fade-out
    opacity 0.0
    transition 3s
  .zoom-out
    transform scale(10)
    opacity 0.0

body
  &.impress-mouse-timeout
    cursor none
    div#impress-toolbar
      display none

.impress-progressbar
  position absolute
  right 118px
  bottom 1px
  left 118px
  border-radius 7px
  border 2px solid rgba(100, 100, 100, 0.2)
  DIV
    width 0
    height 2px
    border-radius 5px
    background rgba(75, 75, 75, 0.4)
    transition width 1s linear

.impress-progress
  position absolute
  left 59px
  bottom 1px
  text-align left
  font-size 10pt
  opacity 0.6

#impress
  .step
    .substep
      opacity 0
      &.substep-visible
        opacity 1
        transition opacity 1s

#acme-graph-bottom
  position absolute
  bottom 100px
  left 440px
  background-color black
  width 410px
  height 2px

#acme-graph-q1,
#acme-graph-q2,
#acme-graph-q3,
#acme-graph-q4
  border solid 1px black
  width 70px
  margin-left 10px
  position absolute
  bottom 100px

#acme-graph-q1
  background-color red
  left 450px

#acme-graph-q2
  background-color blue
  left 550px

#acme-graph-q3
  background-color green
  left 650px

#acme-graph-q4
  background-color purple
  left 750px
</style>

<style>
</style>


<style lang="stylus" scoped>
@import url("http://fonts.googleapis.com/css?family=Open+Sans:regular,semibold,italic,italicsemibold|PT+Sans:400,700,400italic,700italic|PT+Serif:400,700,400italic,700italic|Cutive+Mono")
</style>

<style lang="stylus" scoped>
/*
  Make inactive steps a little bit transparent.
*/
.impress-enabled
  > .step
  margin 0
  opacity 0.3
  transition opacity 1s
  > .step.active
    opacity 1
</style>
