function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const root = document.querySelector('#root');
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        style: 'color: inherit; text-decoration: none'
    },
    children: 'Click Me To Visit GOOGLE'
}

customRender(reactElement,root)