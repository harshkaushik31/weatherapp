// importing the close btn and answer box
const closeBtn = document.querySelectorAll('.btn-close')
const answer = document.querySelectorAll('.answer')

// making them arrays
const closeBtnArray = Array.from(closeBtn)
const answerArray = Array.from(answer)


// adding closing and opening functionality
closeBtnArray.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.classList.toggle('rotate-90')
        element.parentElement.parentElement.classList.toggle('show-text')
    })
})

