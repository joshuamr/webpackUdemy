import './hello-world-button.scss';

class helloWorldButton {
    buttonCssClass = 'hello-world-button'
    render() {
        const body = document.querySelector('body')
        const button = document.createElement('button')
        button.classList.add(this.buttonCssClass)
        button.innerHTML = 'Hello World'
        button.onclick = function () {
            const p = document.createElement('p')
            p.innerHTML = 'Hello World'
            p.classList.add('hello-world-text')
            body.appendChild(p)
        }
        body.appendChild(button)
    }
}

export default helloWorldButton