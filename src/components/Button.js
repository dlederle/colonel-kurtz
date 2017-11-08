let React = require('react')
let Ink  = require('react-ink')

class Button extends React.Component {

  static defaultProps = {
    className: 'col-btn',
    tagName: 'button',
    type: 'button'
  }

  render() {
    let { children, tagName, ...attrs } = this.props

    return React.createElement(tagName, attrs, [
      <Ink key="__ink__" />,
      children
    ])
  }

}

module.exports = Button
