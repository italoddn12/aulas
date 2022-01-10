(function(){
    const $btnMobile = document.querySelector('.btn-mobile');
    const $navMobile = document.querySelector('.nav');

    function toogleMenu(){
        $navMobile.classList.toggle('active');
    }

    $btnMobile.addEventListener('click', toogleMenu);
})();