import style from './assets/index.styl'

export default (text = 'Hello world!') => {
    const element = document.createElement('div')
    element.innerHTML = text
    element.className = style.greenClass
    return element
}