let React = require('react')
let cx    = require('classnames')

class Frame extends React.Component {

  static defaultProps = {
    element: 'figure'
  }

  render() {
    var { element, children, open, ...other } = this.props

    let className = cx('col-frame', {
      'col-frame-open': !!open
    })

    return React.createElement(element, { className, ...other }, children)
  }

}

module.exports = Frame
