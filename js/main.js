document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.header .links .icon');
    const navLinks = document.querySelector('.header .links .menu');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header .links')) {
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.header .links .menu li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}); 
