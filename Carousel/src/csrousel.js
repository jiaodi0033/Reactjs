let wrap=document.querySelector(".carousel_pic");
let pre=document.querySelector('.arrow_left');
let next=document.querySelector('.arrow_right');
next.onclick=function (){
    next_pic();
}
pre.onclick=function (){
    pre_pic();
}
function next_pic(){
    let newLeft;
    if(wrap.style.left==='-3600px'){
        newLeft=-1200;
    }else {
        newLeft=parseInt(wrap.style.left)-600;
    }
    wrap.style.left=newLeft+'px';
    index++;
    if(index>4){
        index=0;
    }
    showCurrentDot();
}
function pre_pic(){
    let newLeft;
    if(wrap.style.left==='-600px'){
        newLeft=-2400;
    }else {
        newLeft=parseInt(wrap.style.left)+600;
    }
    wrap.style.left=newLeft+'px';
    index--;
    if(index<0){
        index=4;
    }
    showCurrentDot();
}
let timer=null;
var index=0;
let carousel=document.querySelector('.header');
var dots=document.getElementsByTagName('span');
carousel.onmouseenter=function (){
    clearInterval(timer);
}
carousel.onmouseleave=function (){
    autoPlay();
}
function autoPlay(){
    timer=setInterval(function (){
        next_pic();
    },3000);
    showCurrentDot();
}
autoPlay();
showCurrentDot();
function showCurrentDot(){
    for (var i=0;i<dots.length;i++){
        dots[i].className='';
    }
    dots[index].className='on';
}
for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 4 && parseInt(wrap.style.left)!==-3000){
                dis = dis - 5;
            }
            //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
            if(index == 0 && parseInt(wrap.style.left)!== -600){
                dis = 5 + dis;
            }
            wrap.style.left = (parseInt(wrap.style.left) +  dis * 600)+"px";
            index = i;
            showCurrentDot();
        }
    })(i);
}