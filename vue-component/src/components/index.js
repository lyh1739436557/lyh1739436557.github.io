import ScrollNum from './scrollNum'

const components = [
  ScrollNum
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export const FyScrollNum = ScrollNum

export default {
  version: '0.0.1',
  install,
  FyScrollNum
}


