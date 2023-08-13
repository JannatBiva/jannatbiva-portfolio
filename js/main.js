document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

/// Function to handle the intersection of the target element
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-up"); // Add the slide-up class
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the element is visible
});

// Start observing the .licenses-certifications section
const certificationSection = document.querySelector(".licenses-certifications");
if (certificationSection) {
    observer.observe(certificationSection);
}

// Your existing scrollAnimations.js code
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    var workExamples = document.querySelectorAll('.work-example');
    workExamples.forEach(function (example) {
        if (isElementInViewport(example)) {
            example.classList.add('slide-up');
        }
    });
}

handleScrollAnimations();

window.addEventListener('scroll', handleScrollAnimations);
});