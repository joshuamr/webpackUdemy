import twoGophers from './twoGophers.jpg'
import { brotliDecompressSync } from 'zlib'

const addImage = () => {
    const img = document.createElement('img')
    img.alt = 'Two Gophers'
    img.width = 300
    img.src = twoGophers
    const body = document.querySelector('body')
    body.appendChild(img)
}

export default addImage
