(function(){
    
    var $hamburguerMenu = document.querySelector('.header-nav__hamburgger');
    var $html = document.querySelector("html");

    $html.classList.remove('no-js');
    $html.classList.add('js');

    $hamburguerMenu.addEventListener('click',function(){
        $html.classList.toggle('menu-opened');
    })

})();