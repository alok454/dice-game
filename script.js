const result = document.querySelector('.result');
const imageOne = document.querySelector('#img-1');
const imageTwo = document.querySelector('#img-2');
const playButton = document.querySelector('.play-button');

const playGame = (resultText, imageOne, imageTwo) => {
    const random1 = Math.floor( (Math.random() * 6) + 1);
    const random2 = Math.floor( (Math.random() * 6) + 1);

    for(let i = 1; i < 3; i++) {
        switch(i == 1 ? random1 : random2) {
            case 1:
                i == 1? imageOne.src = "./images/one.png" : imageTwo.src = "./images/one.png";
                break;
            case 2:
                i == 1? imageOne.src = "./images/two.png" : imageTwo.src = "./images/two.png";
                break;
            case 3:
                i == 1? imageOne.src = "./images/three.png" : imageTwo.src = "./images/three.png";
                break;
            case 4:
                i == 1? imageOne.src = "./images/four.png" : imageTwo.src = "./images/four.png";
                break;
            case 5:
                i == 1? imageOne.src = "./images/five.png" : imageTwo.src = "./images/five.png";
                break;
            case 6:
                i == 1? imageOne.src = "./images/six.png" : imageTwo.src = "./images/six.png";
                break;
        }
    }

    if(random1 > random2) {
        resultText.innerText = "Player1 Wins!"
    } else if(random2 > random1) {
        resultText.innerText = "Player2 Wins!"
    } else {
        resultText.innerText = "DRAW!"
    }
}

playButton.addEventListener('click', () => {
    playGame(result, imageOne, imageTwo);
})