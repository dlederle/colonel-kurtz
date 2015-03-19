/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

import BlockMenu   from 'components/block_menu'
import EditorBlock from 'components/editor_block'
import React       from 'react'

let App = React.createClass({

  propTypes: {
    allowed : React.PropTypes.array.isRequired,
    flux    : React.PropTypes.object.isRequired
  },

  childContextTypes: {
    allowed : React.PropTypes.array.isRequired,
    flux    : React.PropTypes.object.isRequired
  },

  getChildContext() {
    return {
      allowed : this.props.allowed,
      flux    : this.props.flux
    }
  },

  render() {
    let { root, flux } = this.props

    return (
      <div className="colonel">
        <BlockMenu block={ root } blockTypes={ flux.stores.blockTypes } />
        <EditorBlock block={ root } />
      </div>
    )
  }

})

module.exports = App
