export function createElement(tag, content){
    const element = document.createElement(tag)
    element.innerText = content
    document.body.appendChild(element)
}