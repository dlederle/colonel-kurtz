let React     = require('react')
let PropTypes = require('prop-types')
let Button    = require('./Button')

class MenuItem extends React.Component {

  static propTypes = {
    app   : PropTypes.object.isRequired,
    block : PropTypes.object.isRequired,
    label : PropTypes.string.isRequired,
    id    : PropTypes.string.isRequired
  }

  static defaultProps = {
    className  : 'col-menu-item',
    type       : 'button',
    onClick    : () => {},
    isDisabled : () => {}
  }

  isDisabled() {
    let { app, block, isDisabled } = this.props
    return isDisabled(app, block)
  }

  render() {
    let { label, app, block, onOpen, onExit, active, isDisabled, items, ...safe } = this.props

    return (
      <Button { ...safe } onClick={ this._onClick } disabled={ this.isDisabled() }>
        { label }
      </Button>
    )
  }

  _onClick = () => {
    let { app, block, onClick } = this.props
    onClick(app, block, this)
  }

}

module.exports = MenuItem
