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
  class Component extends React.Component {}

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
