// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.header .links .icon');
    const navLinks = document.querySelector('.header .links ul');

    menuIcon.addEventListener('click', function() {
        // Toggle the display of the navigation links
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header .links')) {
            navLinks.style.display = 'none';
        }
    });

    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.header .links ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.style.display = 'none';
        });
    });
}); 