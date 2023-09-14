let b="######"


for(let i=0; i<=b.length; i=i+1){
    console.log(b);
    b=b.slice(0,-1)  

    if(i===3){
        i=-1
    }

}