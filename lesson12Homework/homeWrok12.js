let pictures = document.getElementsByClassName("img_class");
let index = 0;

setInterval(() => {
  for (let i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";
  }

  pictures[index].style.display = "inline-block";
  index = (index + 1) % pictures.length;
  console.log(index)
}, 5000);