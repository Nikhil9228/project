function login(){
	document.location.href="LOGIN.html";
}
function cart(){
	document.location.href="cart.html";
}
function home(){
	document.location.href="index.html";
}
//-----------------------------------cart---------------------------------

let carts=document.querySelectorAll('.menu');

let products=[
	{pid:"c1",name:"Banana juice",tag:"banana juice", price:150, inCart:0},
	{pid:"c2",name:"Apple juice",tag:"apple juice", price:170, inCart:0},
	{pid:"c3",name:"sweet Lemon juice",tag:"sweetlemon juice", price:165, inCart:0},
	{pid:"c4",name:"Watermelon juice",tag:"watermelon juice", price:155, inCart:0},
	{pid:"c5",name:"Mango juice",tag:"mango juice", price:200, inCart:0},
	{pid:"c6",name:"Avacado juice",tag:"avacado juice", price:350, inCart:0},
	{pid:"c7",name:"Pomegranate juice",tag:"pomegranate juice", price:200, inCart:0},
	{pid:"c8",name:"Sugercane juice",tag:"sugarcane juice", price:100, incart:0},
	{pid:"p1",name:"NICARAGUA Coffeebeans",tag:"Nicaragua coffee", price:150, inCart:0},
	{pid:"p2",name:"COLUMBIA Coffeebeans",tag:"Columbia coffee", price:170, inCart:0},
	{pid:"p3",name:"PERU Coffeebeans",tag:"Peru coffee", price:165, inCart:0}
	
];


for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener('click', () => {
	  cartNumbers(products[i]);
	  totalCost(products[i]);
	});
  }
  
  function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem('cartNumbers');

	if (productNumbers) {
	  document.querySelector('.cart span').textContent = productNumbers;
	}
  }
  
  function cartNumbers(product) {
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);
  
	if (productNumbers) {
	  localStorage.setItem('cartNumbers', productNumbers + 1);
	  document.querySelector('.cart span').textContent = productNumbers + 1;
	} else {
	  localStorage.setItem('cartNumbers', 1);
	  document.querySelector('.cart span').textContent = 1;
	}
	setItems(product);
  }
  
  function setItems(product) {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
  
	if (cartItems != null) {
	  if (cartItems[product.tag] == undefined) {
		cartItems = {
		  ...cartItems,
		  [product.tag]: product
		};
	  }
	  cartItems[product.tag].inCart += 1;
	} else {
	  product.inCart = 1;
	  cartItems = {
		[product.tag]: product
	  }
	}
  
	localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  }
  
  function totalCost(product) {
	let cartCost = localStorage.getItem('totalCost');
  
	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem('totalCost', cartCost + product.price);
	  
	  
	} else {
		localStorage.setItem('totalCost', product.price);
	  
	}
  }
  
  function displayCart() {
	let cartItems = localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
  
	let productContainer = document.querySelector('.products');
	let cartCost = localStorage.getItem('totalCost')

    console.log(cartItems);
	if (cartItems && productContainer) {
		productContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			productContainer.innerHTML += `
			<div class="product">
				<ion-icon name="close-circle"></ion-icon>
				<img src="./images/${item.tag}.jpg" />
				<span>${item.name}</span>

			</div>
	  
			<div class="price">&#8377;${item.price}.00</div>
			<div class="quantity">
				<ion-icon class="decrease "
				name="arrow-dropleft-circle"></ion-icon>
				<span>${item.inCart}</span>
				<ion-icon class="increase "
				name="arrow-dropright-circle"></ion-icon>
				   
			</div>
			<div class="total">
			&#8377;${item.inCart * item.price}.00
			</div>
			`;
	  });
  
		productContainer.innerHTML += `
	  		<div class="basketTotalContainer">
	  			<h4 class="basketTotalTitle">
	  				Basket Total
				</h4>
				<h4 class="basketTotal">
				&#8377;${cartCost}.00
				</h4>
		`;
	 
	 
	 
	}
}
    
onLoadCartNumbers();
displayCart();