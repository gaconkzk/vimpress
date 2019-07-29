// contexts to require
const contexts = [
  require.context("@/components/lib", true, /\.vue$/)
]

// Define components
const components = []
contexts.forEach(context => {
  context.keys().forEach(key => components.push(context(key).default))
})

// Instann above defined components
const VImpress = {
  install(Vue) {
    components.forEach(component => Vue.component(component.name, component))
  }
}

// Automatic installation if Vue has been added to the global scope
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VImpress)
}

// Finally export as default
export default VImpress
