const React = require('react')

module.exports = function DefaultBlockType ({ children }) {
  return (
    <div>
      { this.props.children }
    </div>
  )
}
