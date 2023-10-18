const buttons = document.querySelectorAll('button')
const screen = document.querySelector('.screen')
let calculation = []
function calculate(button){
    const value = button.textContent
    if(value === "CLEAR") {
        calculation = []
        screen.textContent = '.'
    } else if (value === "="){
        screen.textContent = eval(accumulativeCalculation)
    } else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screen.textContent = accumulativeCalculation

    }
   

    console.log(calculation)
}

buttons.forEach(button => button.addEventListener('click',()=>calculate(button)))