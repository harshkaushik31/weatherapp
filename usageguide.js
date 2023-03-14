console.log("Hello World!")

const closeBtn = document.querySelectorAll('.btn-close')
const answer = document.querySelectorAll('.answer')

const closeBtnArray = Array.from(closeBtn)
const answerArray = Array.from(answer)


closeBtnArray.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.classList.toggle('rotate-90')
        element.parentElement.parentElement.classList.toggle('show-text')
    })
})

