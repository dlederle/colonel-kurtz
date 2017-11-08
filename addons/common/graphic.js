let React = require('react')

class Graphic extends React.Component {

  static defaultProps = {
    className : 'col-graphic',
    element   : 'img',
    src       : null
  }

  render() {
    var { element, ...other } = this.props
    return React.createElement(element, other)
  }

}

module.exports = Graphic
