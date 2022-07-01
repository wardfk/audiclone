let menu = document.getElementsByClassName('menu');
let small = document.getElementsByClassName('menu-small');
let close = document.getElementsByClassName('close');
let a = document.getElementsByTagName('a');

menu[0].addEventListener('click', function() {
    small[0].style.display = 'block'
});

close[0].addEventListener('click', function(){
    small[0].style.display = 'none'
})




let footerTitle = document.getElementsByClassName('footertitle');
let footerList = document.getElementsByClassName('footerlist');

for(let i = 0; i < footerTitle.length; i++) {
    footerTitle[i].addEventListener('click', function(){
        this.indice = i;
        for(let j = 0; j < footerList.lenght; j++){
            if(j !== i){
                footerList[j].classList.remove('active');
            }
        }
        this.nextElementSibling.classList.toggle('active');
    })
};

