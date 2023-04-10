const steps = document.querySelectorAll('.step')

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let progressBar = document.querySelector('#progress');

let proportion = 0;


function getActiveSteps() {
    return document.querySelectorAll('.step.active');
}

function changeBar(proportion) {
    progressBar.style.width = `${proportion}%`
}



next.addEventListener('click', () => {
    let activeSteps = getActiveSteps();
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

    proportion += 33;
    changeBar(proportion)

})

prev.addEventListener('click', () => {
    let activeSteps = getActiveSteps();
    let numOfActive = activeSteps.length
    let lastActiveStep = activeSteps[numOfActive - 1]

    lastActiveStep.classList.remove('active')
    numOfActive--;

    if (numOfActive === 1) {
        prev.disabled = true;
        next.disabled = false;
    }
    
    proportion -= 33;
    changeBar(proportion)
})