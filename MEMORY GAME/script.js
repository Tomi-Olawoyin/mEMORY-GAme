const cardArray = [
    {
        name: 'arrow',
        img: './images/akar-icons_arrow-right(1).png'
    },
    {
        name: 'arrowTwo',
        img: './images/akar-icons_arrow-right.png'
    },
    {
        name: 'collection',
        img: './images/bi_collection.png'
    },
    {
        name: 'arrow',
        img: './images/akar-icons_arrow-right(1).png'
    },
    {
        name: 'arrowTwo',
        img: './images/akar-icons_arrow-right.png'
    },
    {
        name: 'collection',
        img: './images/bi_collection.png'
    },
    {
        name: 'arrow',
        img: './images/akar-icons_arrow-right(1).png'
    },
    {
        name: 'arrowTwo',
        img: './images/akar-icons_arrow-right.png'
    },
    {
        name: 'collection',
        img: './images/bi_collection.png'
    },
    {
        name: 'arrow',
        img: './images/akar-icons_arrow-right(1).png'
    },
    {
        name: 'arrowTwo',
        img: './images/akar-icons_arrow-right.png'
    },
    {
        name: 'collection',
        img: './images/bi_collection.png'
    },
]
cardArray.sort(() => 0.5 - Math.random()) //this is a short way of shuffling an array randomly know it.

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function checkMatch() {
    const firstCard = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        firstCard[optionOneId].setAttribute('src', './images/Frame 18.png')
        firstCard[optionTwoId].setAttribute('src', './images/Frame 18.png')
        alert('you have clicked the same image')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match')
        firstCard[optionOneId].setAttribute('src', './images/Frame 19.png')
        firstCard[optionTwoId].setAttribute('src', './images/Frame 19.png')
        firstCard[optionOneId].removeEventListener('click', () => {
            cardsChosen.push(card.name)
            cardsChosenId.push(x)
            cards.setAttribute('src', card.img)
            if (cardsChosen.length === 2) {
                setTimeout(checkMatch, 500)
            }
        })
        firstCard[optionTwoId].removeEventListener('click', () => {
            cardsChosen.push(card.name)
            cardsChosenId.push(x)
            cards.setAttribute('src', card.img)
            if (cardsChosen.length === 2) {
                setTimeout(checkMatch, 500)
            }
        })
        cardsWon.push(cardsChosen)
    } else {
        firstCard[optionOneId].setAttribute('src', './images/Frame 18.png')
        firstCard[optionTwoId].setAttribute('src', './images/Frame 18.png')
        alert('sorry try again!')
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = `Congratulations, you found them all!`
    }
}

function createBoard() {
    cardArray.forEach(card => {
        const cards = document.createElement('img')
        cards.setAttribute('src', './images/Frame 18.png')
        let x = cardArray.indexOf(card)
        cards.setAttribute('data-id', `${x}`)
        cards.style.width = '25%'
        cards.addEventListener('click', () => {
            cardsChosen.push(card.name)
            cardsChosenId.push(x)
            cards.setAttribute('src', card.img)
            if (cardsChosen.length === 2) {
                setTimeout(checkMatch, 500)
            }
        })
        gridDisplay.appendChild(cards)
    })
}

createBoard()

