//getELementsByClassName returns a nodelist, to get the first item we need to ask for it --> [0]
const textQuestion = document.getElementsByClassName('question-text')[0]
const answer = document.getElementsByClassName('answer')[0]
const point = document.getElementsByClassName('point')[0]
const showAnswer = document.getElementById('answer-show')
const nextQuestion = document.getElementById('question-next')

const firstAnswer = document.getElementById('question1')
const secondAnswer = document.getElementById('question2')
const thirdAnswer = document.getElementById('question3')

// On doit recup les input afin de savoir s'ils sont checked
const firstInput = document.getElementById('first')
const secondInput = document.getElementById('second')
const thirdInput = document.getElementById('third')

let increPoint = 0

//Le tableau contenant toutes les questions (seulement 5 dans ce cas)
const arrayQuestion = [
    [
        "Who's the last boss of the Black Temple raid in World of Warcraft ?",
        "Sylvanas Windrunner",
        "Garrosh Hellscream",
        "Illidan",
        "Illidan"
    ],
    [
        "In the Youtube serie Madness Combat, what's the protagonist name ?",
        "Hank J. Wimbleton",
        "Duke Nukum",
        "Quint Crossbone",
        "Hank J. Wimbleton"
    ],
    [
        "In the Yakuza Zero game, of what crime is Kyriu accused ?",
        "Exhibitionism",
        "Bank robbery",
        "Murder",
        "Murder"
    ]
]

function getRandomInt(){
    return Math.floor(Math.random() * arrayQuestion.length)
}

showAnswer.addEventListener('click', () => {
    answer.style.display = 'block'
    point.innerHTML = increPoint
    if(firstInput.checked && firstAnswer.innerHTML === answer.innerHTML){
        increPoint += 1
    } else if(secondInput.checked && secondAnswer.innerHTML === answer.innerHTML){
        increPoint += 1
    } else if(thirdInput.checked && thirdAnswer.innerHTML === answer.innerHTML){
        increPoint += 1
    }
})


nextQuestion.addEventListener('click', () => {
    let random = getRandomInt()
    answer.style.display = 'none'
    textQuestion.innerHTML = arrayQuestion[random][0]
    firstAnswer.innerHTML = arrayQuestion[random][1]
    secondAnswer.innerHTML = arrayQuestion[random][2]
    thirdAnswer.innerHTML = arrayQuestion[random][3]
    answer.innerHTML = arrayQuestion[random][4]
})