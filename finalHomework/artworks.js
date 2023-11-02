


 let products=[];

function fetchData() {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        products = json;
        displayproducts(); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  function displayproducts() {
    let productString = ``;
  
  
    let productsList = document.querySelector(".wrap_photos");
  
    for (let product of products) {
      let newProduct = `<div class="photo_box1">
        <img src="${product.image}"/>
        <p class="photo_box_p_1">${product.title}</p>
        <div class="box_p2_i">
          <p class="photo_box_p_2">$${product.price}</p>
          <i class="bi bi-cart3 photo_box_icon"></i>
        </div>
      </div>`;
      productString += newProduct;
    }
  
  
    productsList.innerHTML = productString;
  }
  
