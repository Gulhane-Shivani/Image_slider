let items=document.querySelectorAll('.container .image_cont .item');
let next=document.getElementById('next');
let prev=document.getElementById('prev');
let thumbnails= document.querySelectorAll('.thumbnail .item');

let countitem=items.length;
let itemActive=0;

next.onclick=function(){
    itemActive=itemActive + 1;
    if (itemActive >=countitem){
        itemActive=0;
    }
    showSlider();
}
prev.onclick=function(){
    itemActive=itemActive - 1;
    if (itemActive < 0){
        itemActive=countitem - 1;
    }
    showSlider();
}

let refreshInterval=setInterval(()=>{
    next.click();
}, 5000)


function showSlider(){
   let itemActiveOld=document.querySelector('.image_cont .item.active');
   let thumbnailActiveOld=document.querySelector('.thumbnail .item.active');
   itemActiveOld.classList.remove('active');
   thumbnailActiveOld.classList.remove('active');

   items[itemActive].classList.add('active');
   thumbnails[itemActive].classList.add('active');
}

//click thumbnail
thumbnails.forEach((thumbnail, index)=>{
    thumbnail.addEventListener('click',()=>{
        itemActive=index;
        showSlider();
    })
})

