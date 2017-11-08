let React     = require('react')
let DOM       = require('react-dom')
let PropTypes = require('prop-types')
let Btn       = require('./Button')

class ActionButton extends React.Component {

  static propTypes = {
    label   : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
  }

  static defaultProps = {
    className : 'col-btn-fab',
    symbol    : '+'
  }

  focus() {
    DOM.findDOMNode(this).focus()
  }

  render() {
    let { className, disabled, label, onClick, symbol } = this.props

    return (
      <Btn className={ className } onClick={ onClick } disabled={ disabled }>
        <span className="col-hidden">{ label }</span>
        <span aria-hidden="true">{ symbol }</span>
      </Btn>
    )
  }

}

module.exports = ActionButton
