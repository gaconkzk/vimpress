<template lang="pug">
  #app
    v-impress
      v-impress-step(:position="{x: -1000, y: -1500}" notes="what the hell" is-title is-slide)
        h1 Example Presentation: <br/>
          | Classic Slides
        h2 Henrik Ingo
        h3 2015
        template(v-slot:notes)
          | Any element with the class="notes" will not be displayed. This can
          | be used for speaker notes. In fact, the impressConsole plugin will
          | show it in the speaker console.!
      v-impress-step#toc(:position="{x: 1000, y: 0}" related is-slide notes="hey hello")
        h1 Table of Contents
        ul
          li
            a(href="#step-1") A title slide
          li
            a(href="#step-2") Table of Contents
        .notes
          p Table of Contents, with links to other slides of this same presentation.
          p Note that instead of absolute poisitioning we use relative positioning,
            | with the data-rel-x and data-rel-y attributes. This means the step is
            | positioned relative to the foregoing step. In other words, this is
            | equivalent to data-x="0" data-y="-1500"
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
