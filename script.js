document.addEventListener("DOMContentLoaded", function() {
    const scroller = document.querySelector('.scroll-container');
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust this value to change the scrolling speed

    function startScroll() {
        scrollAmount += scrollSpeed;

        if (scrollAmount >= scroller.scrollWidth - scroller.clientWidth) {
            // Reset scroll amount to 0 if end is reached
            scrollAmount = 0;
        }

        scroller.scrollLeft = scrollAmount;
        window.requestAnimationFrame(startScroll);
    }

    startScroll();
});


