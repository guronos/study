const questions = [
    {
        id: 1,
        question: "Ваше возраст?",
        type: 'math',
        answers: [
            {
                value: 1,
                label: 'Более 18 лет'
            },
            {
                value: 0,
                label: 'Менее 18 лет'
            }
        ]
    },
    {
        id: 2,
        question: "Ваш пол?",
        type: 'info',
        answers: [
            {
                value: 'male',
                label: 'Муж.'
            },
            {
                value: 'female',
                label: 'Жен.'
            }
        ]
    },
    {
        id: 3,
        question: "Любите ли вы пить воду?",
        type: 'math',
        answers: [
            {
                value: 1,
                label: 'Да'
            },
            {
                value: 0,
                label: 'Нет'
            }
        ]
    }
]

// function addBlock () {
//     let mainContainer = document.getElementById('main-container')
//     let greenSquare = document.createElement('div')
//     greenSquare.className = 'green'
//     // greenSquare.className = 'md-size'
//     greenSquare.classList.add('md-size')
//     greenSquare.innerText = `NotHelloWorld`
//     mainContainer.append(greenSquare)
//     console.log(greenSquare.className)
// }
let homeHtml = ''

function getTest() {
    let mainContainer = document.getElementById('main-container')
    mainContainer.classList.add('display-none')
    const testBlock = document.getElementById('test')
    testBlock.classList.remove('display-none')
    // homeHtml = mainContainer.innerHTML
    // mainContainer.innerHTML = 'test';
    // console.dir(mainContainer)
}

function getHome() {
    let mainContainer = document.getElementById('main-container')
    mainContainer.classList.remove('display-none')
    const testBlock = document.getElementById('test')
    testBlock.classList.add('display-none')
}