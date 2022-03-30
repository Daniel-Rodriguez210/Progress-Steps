// creating variables for dom elements to be utilized in js code
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//setting the default state to 
let currentActive = 1;
// when user clicks the next button it increases the counter by one also maxes the incrementor to the length of list
next.addEventListener('click', ()=> {
    currentActive++ 

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})
// when the user clicks the 'prev' button it subtracts the incrementor by 1, bottoming out at 1
prev.addEventListener('click', ()=> {
    currentActive-- 

    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})
// this function changes the active class attribute to the current selection also removes the same class from the previous element
function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //lines 38-49 selects all the elements with class active, takes the current active class length subtracts it by 1 and multiplys by 100 to get the correct percentage for the width to have the correct amount of gray to be lit up with the correct Number assigned
    // The subtraction of 1 is necessary because the width of line would be slightly greater than 2 and 3 when these elements are active
    //if/else statement needed to cycle through the elements and enable/disable the prev and next buttons when they are their limits
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }


}