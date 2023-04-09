// Select all the panels from page
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Loop through each panel and add event listener
// for (let i = 0; i < panels.length; i++) {
//     panels[i].addEventListener('click', function() {
//         for (let j = 0; j < panels.length; j++) {
//             panels[j].classList.remove('active')
//         }
//         this.classList.add('active')
//     })
// }

