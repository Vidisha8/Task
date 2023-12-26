document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var toggleSwitch = document.querySelector('.toggle-switch');
    
    var rightToggleBtn = document.getElementById('rightToggleBtn');
    var rightSwitch = document.querySelector('.right-container .toggle-switch');

    toggleBtn.addEventListener('change', function () {
        if (toggleBtn.checked) {
            toggleSwitch.style.transform = 'translateX(100%)';
        } else {
            toggleSwitch.style.transform = 'translateX(0)';
        }
    });

    rightToggleBtn.addEventListener('change', function () {
        if (rightToggleBtn.checked) {
            rightSwitch.style.transform = 'translateX(100%)';
        } else {
            rightSwitch.style.transform = 'translateX(0)';
        }
    });
});
