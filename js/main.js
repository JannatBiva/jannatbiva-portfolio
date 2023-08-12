// scrollAnimations.js

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function handleScrollAnimations() {
    var workExamples = document.querySelectorAll('.work-example');
    workExamples.forEach(function (example) {
        if (isElementInViewport(example)) {
            example.classList.add('slide-up');
        }
    });
}

// Initial call to handleScrollAnimations
handleScrollAnimations();

// Add event listener for scroll
window.addEventListener('scroll', handleScrollAnimations);
