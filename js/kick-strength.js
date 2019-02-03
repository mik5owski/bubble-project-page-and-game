var strengthPointer = document.querySelector('#strength-bar-pointer');

function captureStrength() {

    strengthPointerToBottom();

    function strengthPointerToBottom() {
        var interval = setInterval(function () {
            strengthPointer.style.top = `${strengthPointer.offsetTop + 2}px`;

            document.addEventListener("keydown", function (event) {
                if (event.key === 's') {
                    clearInterval(interval);                    
                }
            });

            if (strengthPointer.style.top === '300px') {
                clearInterval(interval);
                strengthPointerToTop();
            }
        }, 0);
    }

    function strengthPointerToTop() {
        var interval = setInterval(function () {
            strengthPointer.style.top = `${strengthPointer.offsetTop - 2}px`;

            document.addEventListener("keydown", function (event) {
                if (event.key === 's') {
                    clearInterval(interval);                    
                }
            });

            if (strengthPointer.style.top === '0px') {
                clearInterval(interval);
                strengthPointerToBottom();
            }
        }, 0);
    };
}

captureStrength();

