// Efter mycket trixande lyckades jag ta mig till Level 3, iaf.

const digitButtons = document.querySelectorAll('.digit')
const selectedNumber = document.querySelector('#input')
const operators = document.querySelectorAll('.op')
const resultDisplay = document.querySelector('#result')

let currentNumber = ''
let currentoperator = ''
let currentResult = 0

digitButtons.forEach(button => {
    button.addEventListener('click', addDigit)
})

function addDigit(event) {
    currentNumber += event.target.textContent
    selectedNumber.innerText = currentNumber
    console.log(`Current Number: ${currentNumber}`)
    kalkylate()
}

operators.forEach(operator => {
    operator.addEventListener('click', useOperator)
})

function useOperator(event) {
    currentoperator = event.target.textContent.trim()
    console.log( `Current Operator : ${currentoperator}`)
    kalkylate()
}

function kalkylate() {
    if (currentNumber === '') return
    const number = parseFloat(currentNumber)
    if (isNaN(number)) {
        console.error ('Invalid number')
        return
    }
    switch (currentoperator) {
        case '+':
            currentResult += number
            break
        case '-':
            currentResult -= number
            break
        case '*':
            currentResult *= number
            break
        case '/':
            currentResult /= number
            break
        default: 
            console.error('Unkown operator')
            return
    }  

    resultDisplay.innerText = currentResult
    currentNumber = ''
    console.log(`Current result after calculation: ${currentResult}`);
}

