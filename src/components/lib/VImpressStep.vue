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
