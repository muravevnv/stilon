document.addEventListener('DOMContentLoaded', () => {

    function initStickyHeader() {
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {

            if (window.scrollY > 0) {
                header.classList.add('is-white');
            } else {
                header.classList.remove('is-white');
            }
        });
    }

    initStickyHeader();

    function initMap() {
        const map = document.querySelectorAll('.js-map');

        if(map.length > 0) {
            
        }
    }

})