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

const ReactDOM = {
  render(element, container) {
    const node = element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)
    Object.keys(element.props)
      .filter(key => key !== 'children')
      .forEach(attrName => {
        node[attrName] = element.props[attrName]
      })
    element.props.children.forEach(child => ReactDOM.render(child, node))
    container.appendChild(node)
  }
}

const React = {
  createElement,
}

const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('span', null, 'hello'),
  React.createElement('a', { href: '/some/path' })
);

ReactDOM.render(
  element,
  document.getElementById('root')
)
