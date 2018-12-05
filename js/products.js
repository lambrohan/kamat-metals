var localStorage = window['localStorage'];
var selectedProduct = localStorage.getItem('selectedProduct');



class MyProduct {

  constructor(name,img,code,sizes,weightRange,availability){
    this.title = name;
    this.img = img;
    this.code = code;
    this.sizes = sizes;
    this.weightRange = weightRange;
    this.availability = availability;
  }
}

var giftProducts = [
  new MyProduct('Ganapati Shadow','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2F1.jpg?alt=media&token=8854ea0b-efcd-4c2a-9a13-47ebc02673fb','KM1CG11','','',3),
  new MyProduct('Utaran','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2F2.jpg?alt=media&token=da613480-394d-42b4-b213-1298e10587e5','KM1CG12','','',3)
];


$('#product-heading').text(selectedProduct.toUpperCase());


giftProducts.forEach((product)=>{
  $('#grid').append(createCard(product));
})






function createCard(product) {
  var card = `<div class="pro-card"><img src=${product.img}><div class="overlay"><div class="text">${product.title}</div></div></div>`;
  var awesomeCard = `<div class="pro-card"> <img src=${product.img} alt=""> <div class="overlay"> <h3 style="margin-top:32px">${product.title}</h3> <h5>Code: ${product.code} </h5> <span >Available in ${product.sizes} sizes</span> <div class="metal-wrapper"> <div style="background:#f6b791;color:#f6b791" class="metal-circle"> <p>Copper</p> </div> <div class="metal-circle" style="background:#c0c0c0;color:#c0c0c0"> <p>Silver</p> </div> <div class="metal-circle" style="background:#b5a642;color:#b5a642"> <p>Brass</p> </div> </div> <p style="margin-top:48px">${product.weightRange ? `Weight Range: ${product.weightRange} gm`:''}</p> </div> </div>`;
    return $(awesomeCard);
}




