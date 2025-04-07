/* --- PATRICK MIRINDI - SCRIPT.JS --- */

document.addEventListener('DOMContentLoaded', function() {

    // --- Update copyright year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Mobile navigation toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            const isExpanded = mainNav.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
            // Optional: Change icon if using Font Awesome in button
            navToggle.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Optional: Close mobile menu if a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    // --- Trigger slide-in animation on load ---
    // Simple approach: add 'loaded' class to body after a short delay
    // More robust approach uses Intersection Observer (like previous example)
    // if you want animations as elements scroll into view.
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); // Small delay


    // --- Placeholder for Interactive Timeline ---
    function initializeTimeline() {
        // Find timeline elements
        // Use a library like TimelineJS or write custom JS
        // to make it interactive (e.g., on scroll, click)
        console.log("Timeline placeholder - implement interactivity here.");
    }
    // initializeTimeline(); // Call when ready


     // --- Placeholder for Publication Filtering ---
    function initializePublicationFilter() {
        // const filterButtons = document.querySelectorAll('.filter-btn');
        // const publications = document.querySelectorAll('.publication-list li');
        // Add event listeners to buttons to show/hide publications based on data attributes
        console.log("Publication filter placeholder - implement logic here.");
    }
    // initializePublicationFilter(); // Call when ready


    console.log("Patrick Mirindi website scripts loaded.");

});
