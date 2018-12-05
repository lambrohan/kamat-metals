var localStorage = window['localStorage'];
var selectedProduct = localStorage.getItem('selectedProduct');
var arrayToShow;




class MyProduct {

  constructor(name,img,code,sizes,weightRange,availability){
    this.title = name;
    this.img = img;
    this.code = code;
    this.sizes = sizes;
    this.weightRange = weightRange;
    this.availability = availability; //[copper =0,silver = 1,brass = 2]
  }
}



$('#product-heading').text(selectedProduct.toUpperCase());


var giftProducts = [
  new MyProduct('Ganapati Shadow','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fc_gift%2F1.jpg?alt=media&token=a004129b-8e0e-4c10-927c-22ce9a3e882a','KM1CG11','','',[0,1,2]),
  new MyProduct('Utaran','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fc_gift%2F2.jpg?alt=media&token=8b01c908-d7a0-4632-ab85-0badc309415c','KM1CG12','','',[0,1,2])
];

var poojaSahitya = [
  new MyProduct('Spring Bowl','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F1-spring-bowl.jpg?alt=media&token=adfd3267-5f97-4de7-9986-2e298a4102b1','KM2NA1-8','8','5-60',[0,1,2]),

  new MyProduct('Karanda','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F2-karanda.jpg?alt=media&token=dfe4228d-292f-49cc-9b50-1eb6d43edbc0','KM2JA1-4','4','15-40',[0,1,2]),

  new MyProduct('Tripal','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F3-Tripal.jpg?alt=media&token=705be096-aa66-4117-8849-6414bd8f4a64','KM2JB1-4','4','40-100',[0,1,2]),

  new MyProduct('Pancharti','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F4-Pancharti.jpg?alt=media&token=ec029705-48c5-4065-9539-7daa4e008c57','KM2JC1-2','2','70-100',[1,2]),

  new MyProduct('Gandh Thati','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F5-Gandhathati.jpg?alt=media&token=3ed89aac-c70a-4af4-8a4c-3b83d6360998','KM2NB1-7','7','5-40',[0,1]),

  new MyProduct('Taman','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2Ftaman.jpg?alt=media&token=e5a3acb1-63db-4422-aefe-0771ae62ef2e','KM2NC1-5','5','60-200',[0,1]),

  new MyProduct('Tambya','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F7-Tambya.jpg?alt=media&token=f267dc54-f7c6-4989-85f1-4145075bbd9e','KM2ND1-6','6','50-200',[0,1]),

  new MyProduct('Pali','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2Fpali.jpg?alt=media&token=7c1f629c-af2d-4b19-b592-fa93a90ef84a','KM2NE1-3','3','15-40',[0,1]),

  new MyProduct('Agarbatti Stand','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F9-Agarbatti-stand.jpg?alt=media&token=d8fbe005-86b2-47b4-bd4b-03d041595697','KM2JD1-3','3','10-20',[0,1,2]),

  new MyProduct('Trishul','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2Ftrishul.jpg?alt=media&token=d4511137-5acf-4634-92f3-58747f990d5d','KM2NF1','1','15',[1]),

  new MyProduct('Parshu','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2Fparshu.jpg?alt=media&token=b8151ba4-1d55-42a4-9142-031ee4e40c72','KM2NG1','1','15',[1]),

  new MyProduct('Jaswand','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2F12-Jaswand-Flower.jpg?alt=media&token=3bcd5186-781f-4616-8002-85143054d079','KM2JE1','1','6',[1]),

  new MyProduct('Har','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fpooja%20sahitya%2Fhar.jpg?alt=media&token=f00dadd6-4002-4b88-bbf9-5877f3c88c3c','KM2JF1','1','50',[1]),
];

var drinkAndKichen = [
  new MyProduct('Glass','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdrink%20and%20kitchen%2Fglass.jpg?alt=media&token=960db8c2-2887-4c2d-9e87-73dc826857ec','KM3NA1-8','8','10-70',[0,1])
]

var homeDecor = [
  new MyProduct('Jod Kamal','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fhome%20decor%2F1-Jod-kamal.jpg?alt=media&token=4e443634-5608-4571-8586-29af7095d352','KM4JA1-3','3','30-70',[0,1,2]),
  new MyProduct('Choupal','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fhome%20decor%2F2-Choupal.jpg?alt=media&token=41751746-754c-4d5e-b08c-162bd4ef4a69','KM4JB1-3','3','40-100',[0,1,2]),

  new MyProduct('Nakshi Plate Karanda','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fhome%20decor%2F3-Nakshi-plate-karanda.jpg?alt=media&token=5f9d7977-72a0-4f27-827d-211f3668123d','KM4JC1-3','3','70-120',[0,1,2]),
]

var diyaProducts = [
  new MyProduct('Dandi Chirag','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F1-Dandi-Chirag.jpg?alt=media&token=edbf8979-2051-4c67-8ce6-880c902b1819','KM5JA1-5','5','10-40',[0,1,2]),

  new MyProduct('Nakshi Stand Chirag','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F2-Nakshi-stand-chirag.jpg?alt=media&token=4e25abec-28eb-443e-a0d9-858c6e6e949c','KM5JB1-7','7','10-50',[0,1,2]),

  new MyProduct('Gol Niranjan','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F3-Gol-Niranjan.jpg?alt=media&token=f35eee62-9bed-41b3-8f91-a8926226f3eb','KM5JC1-8','8','5-50',[0,1,2]),

  new MyProduct('Pakli Niranjan','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F4-Pakli-Niranjan.jpg?alt=media&token=13f46726-a0e2-40c0-abd8-c631f420920e','KM5JD1-7','7','8-50',[0,1,2]),

  new MyProduct('Damru Niranjan','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F5-Damru-Niranjan.jpg?alt=media&token=88fadf23-1e0c-46de-8f90-830f06aeb2a2','KM5JE1-7','7','10-60',[0,1,2]),

  new MyProduct('Ekvati Niranjan','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F6-Ekvati-Niranjan.jpg?alt=media&token=0958d7f2-fe59-462c-bc25-75e427238231','KM5JF1-7','7','10-60',[0,1,2]),

  new MyProduct('Plate Damru','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F7-Plate-Damru.jpg?alt=media&token=9539d647-cea1-4613-95b5-8e28cfc2c940','KM5JG1-4','4','15-35',[0,1,2]),

  new MyProduct('Kalkatta Vati','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F8-Kalkatta-vati.jpg?alt=media&token=3ac6d5bb-5779-42ef-925b-1964ed8a0de4','KM5NA1-4','4','5-12',[0,1,2]),

  new MyProduct('Panti Chirag','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F9-Panti-chirag.jpg?alt=media&token=44beeaf8-5bca-4d4f-a42d-92a410eaa8cf','KM5NB1-7','7','5-40',[0,1,2]),

  new MyProduct('Sadhi Vati','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F10-Sadhi-vati.jpg?alt=media&token=3a3b2010-6ea2-4159-936f-c3a476f2092d','KM5NC1-8','8','5-50',[0,1,2]),

  new MyProduct('Gol panti','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F11-Got-panti.jpg?alt=media&token=37db9f39-32a4-4e73-8384-5e58db7b87a6','KM5ND1-7','7','5-40',[0,1,2]),

  new MyProduct('Nakshi Panti','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2F12-Nakshi-Panti.jpg?alt=media&token=c317fe68-5593-4156-bd99-1d8d2c89a044','KM5NE1-5','5','4-20',[0,1,2]),

  new MyProduct('Samayi','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fdiyas%2Fsamayi.jpg?alt=media&token=c6dace9d-3968-4ea3-884e-2e9a0273e724','KM5JH1-7','7','15-150',[0,1,2]),
]

var murtiProducts = [
  new MyProduct('Solid Ganesh Murti','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fmurti%2F1-Solid-Ganesh-Murti.jpg?alt=media&token=c0e841e2-a086-4597-84fe-58329dee59de','KM6NA1-10','10','40-250',[1,2]),
  new MyProduct('Solid Annapurna Murti','https://firebasestorage.googleapis.com/v0/b/uploadme-4348f.appspot.com/o/kamat%20metals%2Fall%20products%2Fmurti%2Fsolid-annapurna-murti.jpg?alt=media&token=fe7f8660-9861-4280-8bcf-5df13ee987df','KM6NB1-4','4','30-100',[1,2]),
]

switch (selectedProduct) {
  case 'Corporate Gift':{
    arrayToShow = giftProducts;
    break;
  }
  case 'Pooja Sahitya' :{
    arrayToShow = poojaSahitya;
    break;

  }
  case 'Kitchen & Drink Ware':{
    arrayToShow = drinkAndKichen;
    break;


  }
  case 'Home Decor' :{
    arrayToShow = homeDecor;
    break;
  }
  case 'Diya':{
    arrayToShow = diyaProducts;
    break;
  }
  case 'Murti':{
    arrayToShow = murtiProducts;
    break;
  }

  default :{
    arrayToShow = [];
    break;
  }
    
}


arrayToShow.forEach((product)=>{
  $('#grid').append(createCard(product));
})






function createCard(product) {
  var awesomeCard = `<div class="pro-card"> <img src=${product.img} alt=""> <div class="overlay"> <h3 style="margin-top:32px">${product.title}</h3> <h5>Code: ${product.code} </h5> <span >${product.sizes ? `Available in ${product.sizes} sizes`:''}</span> <div class="metal-wrapper"> ${product.availability.includes(0)? `<div style="background:#f6b791;color:#f6b791" class="metal-circle"> <p>Copper</p> </div>`: ''} ${product.availability.includes(1) ? `<div class="metal-circle" style="background:#c0c0c0;color:#c0c0c0"> <p>Silver</p> </div>`:''} ${product.availability.includes(2) ? `<div class="metal-circle" style="background:#b5a642;color:#b5a642"> <p>Brass</p> </div>`:''} </div> <p style="margin-top:48px">${product.weightRange ? `Weight Range: ${product.weightRange} gm`:''}</p> </div> </div>`;
    return $(awesomeCard);
}




