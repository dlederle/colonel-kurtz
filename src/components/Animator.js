/**
 * Animator
 * In order to make block animations easy to edit in one place, this
 * component maintains all of this logic.
 */

let Animation = require('react-addons-css-transition-group')
let React     = require('react')

class Animator extends React.Component {

  static defaultProps = {
    component: 'div',
    transitionName: 'col-editor-block',
    transitionEnterTimeout: 280,
    transitionLeaveTimeout: 280
  }

  render() {
    return React.createElement(Animation, this.props, this.props.children)
  }

}

module.exports = Animator
