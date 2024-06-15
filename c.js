if(document.querySelector('#container-slider')){
    setInterval('funcionEjecutar("siguiente")',5000);//Cada 5 segundos cambia la imagen
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){// si existe la clase listslider
    let link = document.querySelectorAll(".listslider li a");//guarda en link lo que esta dentro de la clase listslider dentro de li y a
    link.forEach(function(link) {// itera en la variable link o sea dentro de a
       link.addEventListener('click', function(e){//añade un eventio al cliquear
          e.anteriorentDefault();//Cambia el comportamiento automatico de click
          let item = this.getAttribute('itlist'); 
          let arrItem = item.split("_");
          funcionEjecutar(arrItem[1]);
          return false;
       });
     });
 }
 
 function funcionEjecutar(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, siguienteElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'anterior' || side == 'siguiente'){
 
         if(side=="anterior"){
             siguienteElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             siguienteElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         siguienteElement = side;
         side = (curElement > siguienteElement)?'anterior':'siguiente';
 
     }
     
     //PUNTOS INFERIORES
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[siguienteElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[siguienteElement].style.opacity=1;
     elements[siguienteElement].style.zIndex =1;
 }