module.exports = {
  id    : 'test',
  label : 'Test',
  component: class TestBlockType extends React.Component {
    static defaultProps = {
      content: {
        text: 'Test'
      }
    }
    getMenuItems() {
      return [{ id: 'test', label: 'Test' }]
    }
    render() {
      return <div>{ this.props.children }</div>
    }
  }
}
