var localStorage = window['localStorage'];
var selectedProduct = localStorage.getItem('selectedProduct');

var _PRODUCT = {
  img:'https://images.sg.content-cdn.io/cdn/in-resources/49c6b065-7520-4b34-bb95-79f83fbcc799/Images/ProductImages/Large/MZ-4004.jpg;width=600;height=600;scale=canvas;anchor=bottomcenter',
  title:'Felix',
  subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, magnam?',
}

$('#product-heading').text(selectedProduct.toUpperCase());

 getCard = (product)=>{
  var card = "";
   if(product){
    card = `<div class="product-card card"><img class="card-img-top img-fluid" src="${product.img}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${product.title}</h5><p class="card-text">${product.subtitle}</p></div></div>`;
   }
   
  return card;
 } 

$('#grid').html($(getCard(_PRODUCT)))