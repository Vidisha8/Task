document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    var dropdownContent = document.querySelector('.dropdown-content');
    var boxes = document.querySelectorAll('.box');
    var text = document.querySelectorAll('.center-text');
    var grid = document.querySelectorAll('.grid-container1');

    var isClicked = localStorage.getItem('dropdownClicked') === 'true';

    if (isClicked) {
        dropdownBtn.classList.add('clicked');
        dropdownContent.style.display = 'grid';
        moveBoxesDown();
    } else {
        dropdownContent.style.display = 'none';
    }

    dropdownBtn.addEventListener('click', function () {
        isClicked = !isClicked;
        localStorage.setItem('dropdownClicked', isClicked);

        if (isClicked) {
            dropdownBtn.classList.add('clicked');
            dropdownContent.style.display = 'grid';
            moveBoxesDown();
        } else {
            dropdownBtn.classList.remove('clicked');
            dropdownContent.style.display = 'none';
            moveBoxesUp();
        }
    });

    function moveBoxesDown() {
        var dropdownRect = dropdownContent.getBoundingClientRect();
        var offset = dropdownRect.bottom + -200;

        boxes.forEach(function (box) {
            box.style.top = offset + 'px';
        });
    }

    function moveBoxesUp() {
        boxes.forEach(function (box) {
            box.style.top = '100%';
        });
    }
});
function movetextDown() {
    var dropdownRect = dropdownContent.getBoundingClientRect();
    var offset = dropdownRect.bottom + -200; 

    text.forEach(function (text) {
        text .style.top = offset + 'px';
    });
}

function movetextUp() {
    text.forEach(function (text) {
        text.style.top = '100%';
    });
}   