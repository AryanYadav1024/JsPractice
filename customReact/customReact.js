function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('targer',reactElement.props.target)
    container.appendChild(domElement)
}
const root = document.querySelector('#root');
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me To Visit GOOGLE'
}

customRender(reactElement,root)