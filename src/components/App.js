/**
 * This is the root component that contains sections for
 * toggling between viewing modes and viewing managed content
 */

let React       = require('react')
let PropTypes   = require('prop-types')
let Animator    = require('./Animator')
let Blocks      = require('../stores/Blocks')
let EditorBlock = require('./EditorBlock')
let Switch      = require('./Switch')

class App extends React.Component {

  static propTypes = {
    app : PropTypes.object.isRequired
  }

  getBlock(block, i) {
    return (<EditorBlock key={ block } app={ this.props.app } block={ block } />)
  }

  render() {
    let { app } = this.props

    let parents = Blocks.filterChildren(app.state.blocks)

    return (
      <div className="colonel">
        <Switch app={ app } />
        <Animator className="col-block-children">
          { parents.map(this.getBlock, this) }
        </Animator>
      </div>
    )
  }

}

module.exports = App
