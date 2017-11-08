let React = require('react')
let DefaultBlockType = require('../components/DefaultBlockType')

let defaults = {
  component   : DefaultBlockType,
  group       : null,
  maxChildren : Infinity,
  root        : true,
  types       : []
}

function generateComponent (component) {
  function Component (props, context) {
    React.Component.apply(this, props, context)
  }

  Component.prototype = Object.create(React.Component.prototype)

  Component.prototype.render = () => null

  Object.assign(Component.prototype, component)

  return Component
}

class BlockType {

  constructor(config) {
    let { component } = Object.assign(this, defaults, config)

    if (typeof component === 'object') {
      this.component = generateComponent(component)
    }
  }

  valueOf() {
    return this.id
  }

}

module.exports = BlockType
