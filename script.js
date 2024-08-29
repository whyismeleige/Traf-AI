document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.banter-loader');
    const logo = document.querySelector('.logo');

    // Set the duration of your loader animation (in milliseconds)
    const loaderDuration = 2000; // Adjust to match your loader animation duration
    const transitionDuration = 500; // Duration for the flip and fade-out effects

    // Ensure the logo is hidden initially and flipped
    logo.style.opacity = '0';
    logo.style.transform = 'rotateY(-90deg)'; // Initial flip position
    logo.style.display = 'flex'; // Ensure the logo is displayed to enable transition

    // Set the loader to fade out and the logo to flip in after the loader animation
    setTimeout(() => {
        loader.style.transition = `opacity ${transitionDuration}ms ease-out`; // Fade out the loader
        loader.style.opacity = '0';

        // Set a delay to hide the loader after fade out is complete
        setTimeout(() => {
            loader.style.display = 'none'; // Hide the loader
            logo.style.transition = `transform ${transitionDuration}ms ease-in, opacity ${transitionDuration}ms ease-in`; // Transition for flipping and opacity
            logo.style.transform = 'rotateY(0deg)'; // Flip the logo to its original position
            logo.style.opacity = '1'; // Show the logo
        }, transitionDuration); // Delay to match the fade-out duration
    }, loaderDuration);
});
