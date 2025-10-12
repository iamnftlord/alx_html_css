/**
 * Hamburger Menu Toggle
 * Toggles the mobile navigation menu on and off
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and nav menu
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        // Toggle active class on hamburger for animation
        hamburger.classList.toggle('active');
        
        // Toggle active class on nav to show/hide menu
        nav.classList.toggle('active');
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active classes to close menu
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        // If click is outside nav and hamburger, close the menu
        if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
    
    // Close menu on window resize if screen becomes larger than 480px
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480 && nav.classList.contains('active')) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});