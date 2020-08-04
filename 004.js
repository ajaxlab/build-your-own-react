const element = {
  type: 'h1',
  props: {
    children: 'Hello',
    title: 'foo',
  }
}

const container = document.getElementById("root")

// ReactDOM.render(element, container)

const h1Node = document.createElement(element.type)
h1Node['title'] = element.props.title // loop props

const textNode = document.createTextNode('')
textNode['nodeValue'] = element.props.children

h1Node.appendChild(textNode)
container.appendChild(h1Node)
