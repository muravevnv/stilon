document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {

        if (window.scrollY > 0) {
            header.classList.add('is-white');
        } else {
            header.classList.remove('is-white');
        }
    });
})