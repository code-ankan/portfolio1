document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const phrases = ['Web Developer', 'Microsoft Office Specialist', 'YouTube Search Engine Optimizer', 'Social Account Handler', 'Writer', 'Listener', 'Freelancer'];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let typing = true;
    const typingSpeed = 100; // Speed of typing in milliseconds
    const deletingSpeed = 50; // Speed of deleting in milliseconds
    const pauseBetweenPhrases = 1500; // Pause between phrases in milliseconds

    function type() {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typewriterElement.textContent += phrases[currentPhraseIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(type, typingSpeed);
        } else {
            typing = false;
            setTimeout(deleteText, pauseBetweenPhrases);
        }
    }

    function deleteText() {
        if (currentCharIndex > 0) {
            typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            typing = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzQlVe1secI36JELBpmYtyVBpm0B-f3g4dB629HdK9eZqxJ8NOEPu7IElKvwwPRS1SnBw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent succesfully ! "
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3500);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

let topButton = document.getElementById("topButton");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    let homeSection = document.getElementById("header-container").offsetHeight;

    if (document.body.scrollTop > homeSection || document.documentElement.scrollTop > homeSection) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Enter Key binding to submit button 
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    document.addEventListener('keydown', function (event) {
        if (event.code === 'NumpadEnter') {
            event.preventDefault();
            submitButton.click();
        }
    });
});


//   Key Binding of W, A, S, D 
document.addEventListener('DOMContentLoaded', () => {
    const step = 60;
    const inputIds = ['inputName', 'inputEmail', 'inputMessage'];


    function isInputFocused() {
        return inputIds.some(id => document.getElementById(id) === document.activeElement);
    }

    document.addEventListener('keydown', (event) => {
        if (isInputFocused()) return;

        switch (event.key.toLowerCase()) {
            case 'w':
            case 'ArrowUp':
                window.scrollBy(0, -step);
                break;
            case 'a':
            case 'ArrowLeft':
                window.scrollBy(-step, 0);
                break;
            case 's':
            case 'ArrowDown':
                window.scrollBy(0, step);
                break;
            case 'd':
            case 'ArrowRight':
                window.scrollBy(step, 0);
                break;
        }
    });
});

