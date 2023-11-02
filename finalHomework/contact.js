

let slider=document.getElementsByClassName("slider");
let index=0;
slider[1].style.display="none";
slider[2].style.display="none"



setInterval(()=>{
    for (let i=0; i<slider.length;i++){
        slider[i].style.display="none";
    }

    slider[index].style.display="block";
    index=(index+1) % slider.length;
}, 4000)


