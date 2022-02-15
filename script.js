let squares = document.querySelectorAll('.square')
let colors = ['red','blue','green','yellow']
let btn = document.querySelector('.btn')


let setColorFunction = () => {
    squares.forEach((elem,index) => {
        elem.style.backgroundColor = colors[index]
    })
    let color = colors.pop()
    colors.unshift(color)
}
setColorFunction()
btn.addEventListener('click',   setColorFunction)