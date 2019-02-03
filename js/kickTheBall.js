function getDirection() {
    let direction = document.querySelector('#direction-bar-pointer');
    let directionNumber = parseFloat(direction.style.left);
    let directionMultiplied = directionNumber;

    return directionMultiplied;
}


function getStrength() {
    let strength = document.querySelector('#strength-bar-pointer');
    let strengthNumber = parseFloat(strength.style.top);
    let strengthMultiplied = strengthNumber * 1.7;

    return strengthMultiplied;
}

function establishNewDirection() {
    let direction = document.querySelector('#direction-bar-pointer');
    let directionNumber = parseFloat(direction.style.left);
    let directionPosition = '';

    if (directionNumber <= 150) {
        directionPosition = 'left'
    }
    if (directionNumber >= 150) {
         directionPosition = 'right'
    }
    return directionPosition;
}



function kickTheBall() {
    addEventListener('keydown', event => {
        if (event.code === 'KeyD') {
            ball.style.top = `${getStrength()}px`;
            if (establishNewDirection() === 'left') {
                ball.style.left = `${(getDirection() * 2)}px`;
            } else if (establishNewDirection() === 'right') {
                ball.style.left = `${(getDirection()) + 300}px`;
            }
            ball.style.height = `35px`;
            ball.style.width = `35px`;
        }
    })
}

kickTheBall() 