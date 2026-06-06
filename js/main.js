document.addEventListener('DOMContentLoaded', () => {

    function initStickyHeader() {
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {

            if (window.scrollY > 0) {
                header.classList.add('header--white');
            } else {
                header.classList.remove('header--white');
            }
        });
    }

    initStickyHeader();


    function initHeaderCatalog() {
        const header = document.querySelector('.header');
        const headerCatalogLink = document.querySelector('.js-header-catalog-link');
        const headerCatalogMenu = document.querySelector('.js-header-catalog-menu');
        
        let closeTimeout;

        const openCatalog = () => {
            clearTimeout(closeTimeout); 
            header.classList.add('header--open-catalog');
        };

        const closeCatalog = () => {
            clearTimeout(closeTimeout); 
            
            closeTimeout = setTimeout(() => {
                header.classList.remove('header--open-catalog');
            }, 500);
        };

        headerCatalogLink.addEventListener('mouseenter', openCatalog);
        headerCatalogLink.addEventListener('mouseleave', closeCatalog);

        headerCatalogMenu.addEventListener('mouseenter', openCatalog);
        headerCatalogMenu.addEventListener('mouseleave', closeCatalog);
    }

    initHeaderCatalog();
})