(function(){
    var $body = document.querySelector('body');
    var $slideBtnPrev = document.querySelector('.prev');
    var $slideBtnNext = document.querySelector('.next');
    var $slideImgs1 = document.querySelectorAll('.img1')
    var $slideImgs2 = document.querySelectorAll('.img2')
    var $slideImgs3 = document.querySelectorAll('.img3')
    var $slideImgs4 = document.querySelectorAll('.img4')

    $slideBtnNext.removeAttribute('style');
    $slideBtnPrev.removeAttribute('style');

    $body.classList.remove('no-js');
    $body.classList.add('js');

    var mostra = 1;

    $slideBtnNext.addEventListener('click',function(){
        mostra = mostra + 1;
        if(mostra === 1){
            $slideImgs1.classList.remove('mostra');  
        }
        else if(mostra === 2){
            $slideImgs2.classList.add('mostra'); 
        }
        else if(mostra === 3){
            $slideImgs2.classList.remove('mostra');
            $slideImgs3.classList.add('mostra'); 
        }
        else if(mostra === 4){
            $slideImgs3.classList.remove('mostra');
            $slideImgs4.classList.add('mostra'); 
        }
        
    })
   
})();