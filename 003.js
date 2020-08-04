const element = {
  type: 'h1',
  props: {
    children: 'Hello',
    title: 'foo',
  }
}
const container = document.getElementById("root")
ReactDOM.render(element, container)
