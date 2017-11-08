let React     = require('react')
let PropTypes = require('prop-types')
let Block     = require('./Block')
let Blocks    = require('../stores/Blocks')

class EditorBlock extends React.Component {

  static propTypes = {
    app   : PropTypes.object.isRequired,
    block : PropTypes.object.isRequired
  }

  getBlock(block) {
    return (<EditorBlock key={ block } app={ this.props.app } block={ block } />)
  }

  render() {
    let { app, block } = this.props

    return (
      <Block app={ app } block={ block }>
        { Blocks.getChildren(app.state.blocks, block).map(this.getBlock, this) }
      </Block>
    )
  }

}

module.exports = EditorBlock
