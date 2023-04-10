const steps = document.querySelectorAll('.step')

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

function currentActive() {
    return document.querySelectorAll('.step.active');
}

next.addEventListener('click', () => {
    let activeSteps = document.querySelectorAll('.step.active');
    let numOfActive = activeSteps.length
    let lastActiveStep = activeSteps[numOfActive - 1]

    let nextStep = lastActiveStep.nextElementSibling.classList.add('active')
    numOfActive++;
    if (numOfActive > 1) {
        prev.disabled = false;
    }

    if (numOfActive == steps.length) {
        next.disabled = true;
    }
    console.log(lastActiveStep)

})

prev.addEventListener('click', () => {
    let activeSteps = document.querySelectorAll('.step.active');
    let numOfActive = activeSteps.length
    let lastActiveStep = activeSteps[numOfActive - 1]

    lastActiveStep.classList.remove('active')
    numOfActive++;

    if (numOfActive === 1) {
        prev.disabled = true;
    }

})