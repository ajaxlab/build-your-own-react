function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object'
          ? child
          : creatTextElement(child)
      )
    }
  }
}

function creatTextElement(value) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: value,
      children: [],
    }
  }
}

const React = {
  createElement,
}

const element = createElement('h1', { title: 'foo' }, 'Hello');

const container = document.getElementById("root")

// ReactDOM.render(element, container)

const h1Node = document.createElement(element.type)
h1Node['title'] = element.props.title // loop props

const textNode = document.createTextNode('')
textNode['nodeValue'] = element.props.children

h1Node.appendChild(textNode)
container.appendChild(h1Node)
