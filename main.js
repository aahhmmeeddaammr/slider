var closebtn=document.getElementById("close");
var model=document.getElementById("box");
var modelphoto=document.getElementById("item");
var imgs=Array.from(document.querySelectorAll(".item img"));
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var srcs=new Array();
var x;

for(var i=0;i<imgs.length;i++){
     
     imgs[i].addEventListener('click',function(e){
     prev.style.opacity='1';
     prev.style.cursor='pointer';
     next.style.opacity='1';
     next.style.cursor='pointer';
          model.style.display='flex';
          for(var v=0;v<imgs.length;v++){
               if(imgs[v]==e.target){
                    x=v;
                    if(x==0){
                         prev.style.opacity='0.4';
                         prev.style.cursor='default';
                    }else if(x==5){
                         next.style.opacity='0.4';
                         next.style.cursor='default';
                    }
                    break;
               }
          }
          modelphoto.style.backgroundImage=`URL(${e.target.src})`;
     })
}

closebtn.addEventListener('click',closemodel);

function closemodel(){
     model.style=`
     display: none;
     `
}

function previtem(){
     if(x>0){
          modelphoto.style.backgroundImage=`URL(${imgs[--x].src})`; 
     }
     if(x==0){
          modelphoto.style.backgroundImage=`URL(${imgs[x].src})`; 
          prev.style.opacity='0.4';
          prev.style.cursor='default';
     }
     if(x<=5){
          next.style.opacity='1';
          next.style.cursor='pointer';
     }
}
prev.addEventListener('click',previtem)
next.addEventListener('click',nextitem)
function nextitem(){
     if(x<=4){
          modelphoto.style.backgroundImage=`URL(${imgs[++x].src})`; 
     }
     if(x==5){
          modelphoto.style.backgroundImage=`URL(${imgs[x].src})`; 
          next.style.opacity='0.4';
          next.style.cursor='default';
     }
     if(x>0){
          prev.style.opacity='1';
          prev.style.cursor='pointer';
     }
}

document.addEventListener('keydown',function(e){
     if(e.key=='ArrowRight'){

          nextitem();
     }else if(e.key=='ArrowLeft'){
          previtem();
     }else if(e.key=='Escape'){
          closemodel();
     }
})

model.addEventListener('click',function(e){
     if(e.target==model){
          closemodel();
     }
})


