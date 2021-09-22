const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.buttons')
const display = document.querySelector('.whatToWrite')
const clearButton = document.querySelector('.clear')

clearButton.addEventListener('click', e => {
    display.textContent = ''
})

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNumber = display.textContent

    if (!action) {
        if (displayedNumber === '0') {
            display.textContent = keyContent
        } else {
            display.textContent = displayedNumber + keyContent
        }
    }

    if (action === 'dot') {
        display.textContent = displayedNumber + '.'
    }

    if (action === 'plus' || action === 'minus' ||
        action === 'multiply' || action === 'divide') {
            display.textContent = displayedNumber + keyContent
    }
      
    if (action === 'equals') {
        display.textContent = Math.trunc(eval(display.textContent))
    }
  }
})