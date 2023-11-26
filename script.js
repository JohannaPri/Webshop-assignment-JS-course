const productsArray = [
    {
        id: 1, 
        name: 'Bright & Delicious', 
        price: 3.55, 
        originalPrice: 3.55,
        category: 'Vegan', 
        rating: 4, 
        imageURL: 'assets/compressed_photos/bright-and-delicious.png',
        description: 'A delicious donut with orange glaze and sprinkles',
        quantity: 0,
    },
    {
        id: 2, 
        name: 'Bloody Strawberry', 
        price: 2.75, 
        originalPrice: 2.75,
        category: 'Fruit', 
        rating: 3, 
        imageURL: 'assets/compressed_photos/bloody-strawberry.png',
        description: 'A donut with a bright red strawberry cream coating',
        quantity: 0,
    },
    {
        id: 3, 
        name: 'Hazelnut & Chocolate Amazing', 
        price: 4.85, 
        originalPrice: 4.85,
        category: 'Chocolate', 
        rating: 5, 
        imageURL: 'assets/compressed_photos/cobnut-chocolate-and-amazing.png',
        description: 'A donut with a chocolate cover with finely chopped hazelnut',
        quantity: 0,
    },
    {
        id: 4, 
        name: 'Crispy Chocolate', 
        price: 3.25, 
        originalPrice: 3.25,
        category: 'Chocolate', 
        rating: 3., 
        imageURL: 'assets/compressed_photos/crispy-chocolate.png',
        description: 'A donut dipped in chocolate with crunchy sprinkles',
        quantity: 0,
    },
    {
        id: 5, 
        name: 'Extra Extra Caramel', 
        price: 4.25, 
        originalPrice: 4.25,
        category: 'Caramel', 
        rating: 5, 
        imageURL: 'assets/compressed_photos/extra-extra-caramel.png',
        description: 'A donut with wonderful caramel drizzle and fantastic crunch',
        quantity: 0,
    },
    {
        id: 6, 
        name: 'Les Is More Chocolate', 
        price: 3.45, 
        originalPrice: 3.45,
        category: 'Chocolate', 
        rating: 3, 
        imageURL: 'assets/compressed_photos/les-is-more-chocolate.png',
        description: 'A chocolate dipped donut with crushed chocolate on top',
        quantity: 0,
    },
    {
        id: 7, 
        name: 'Pink & Still Going Strong', 
        price: 2.65, 
        originalPrice: 2.65,
        category: 'Vegan', 
        rating: 3, 
        imageURL: 'assets/compressed_photos/pink-still-going-strong.png',
        description: 'A bright pink donut with colorful sprinkles on top',
        quantity: 0,
    },
    {
        id: 8, 
        name: 'Plane But Fabolous', 
        price: 2.85, 
        originalPrice: 2.85,
        category: 'Plane',
        rating: 2, 
        imageURL: 'assets/compressed_photos/plane-but-fabolous.png',
        description: 'A plain donut with a little bit of green and white glaze',
        quantity: 0,
    },
    {
        id: 9, 
        name: 'Red Velvet A Match In Heaven', 
        price: 4.85, 
        originalPrice: 4.85,
        category: 'Red Velvet', 
        rating: 5, 
        imageURL: 'assets/compressed_photos/red-velvet-match-in-heaven.png',
        description: 'An extraordinary red velvet donut with a magical raspberry glaze and crunch',
        quantity: 0,
    },
    {
        id: 10, 
        name: 'Sprinkles All The Way', 
        price: 3.45, 
        originalPrice: 3.45,
        category: 'Sprinkles', 
        rating: 4,
        imageURL: 'assets/compressed_photos/sprinkles-all-the-way.png',
        description: 'A donut with chocolate cover and orange glaze with sprinkles',
        quantity: 0,
    },
];

let shoppingCart = [];
let productsFromArray = [];

document.addEventListener('DOMContentLoaded', function() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;

    window.onload = function() {
      let productsFromArray = [...productsArray];
      fetchAndUpdateProduct(productsFromArray);
  }

    function fetchAndUpdateProduct(products) {
        renderProducts(applyWeekendSurcharge(products));
    }
    
document.querySelector('#header').innerHTML = `
<div class="content">
  <header>
    <div class="header">
      <div class="header-inner">
        <div class="hamburger-menu" aria-label="open menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="menu-logo">Donut Factory</div>
        <div class="cart-total">
          <span class="amount" id="menuCartAmount">0.00€</span>
          <button class="cart-icon" id="cartIcon" aria-label="Shopping Cart Button">
            <img class="icon-svg" src="assets/icons/shopping-cart_dark.svg" alt="Icon for shopping cart">
            <div class="cart-count" id="menuCartCount">0</div>
          </button>
        </div>
      </div>
    </div>
    <main class="main" id="main">
      <ul class="product-items" id="product-items"></ul>
    </main>
  </header>
  <nav class="menu-links" id="menu-links">
  <ul class="menu-items">
      <li><a href="#products">About us</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#contact">Deals</a></li>
  </ul>
  </nav>
</div>
`;

document.querySelector("#checkOut").innerHTML = `
<div class="check-out-form">
            <form id="checkOutForm">
              <div class="checkout-section" id="section1">
                  <h2>Shipping Details</h2>

                  <label for="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required>

                  <label for="lastname">Last Name:</label>
                  <input type="text" id="lastName" name="lastname" required>

                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>

                  <label for="phonenumber">Phone Number:</label>
                  <input type="tel" id="phoneNumber" name="phonenumber" required>

                  <label for="address">Address:</label>
                  <input type="text" id="address" name="address" required>

                  <label for="zipcode">Zip Code:</label>
                  <input type="text" id="zipCode" name="zipcode" required>
                  
                  <label for="city">City:</label>
                  <input type="text" id="city" name="city" required>
                  
                  <label for="pincode">Pin Code:</label>
                  <input type="text" id="pinCode" name="pincode">

                  <div class="button-container">
                    <div id="errorMessages"></div>
                      <button id="checkOutNext1" type="button">Next</button>
                  </div>
              </div>
              <div class="checkout-section" id="section2">
                  <h2>Payment Details</h2>
                  <div class="payment-options-container">
                      <h3 class="payment-options-title">CHOOSE</h3>
                      <div class="payment-options-button-container">
                          <button class="card-option-button">Card</button>
                          <span class="option-or-text">or</span>
                          <button class="invoice-option-button">Invoice</button>
                      </div>
                  </div>
                  <div class="card-details">
                      <label for="cardHolderName">Name on Card:</label>
                      <input type="text" id="cardHolderName" name="cardHolderName" required>
                    
                      <label for="cardNumber">Card Number:</label>
                      <input type="text" id="cardNumber" name="cardNumber" required>
                
                      <div class="card-container">
                        <div class="expire-date">
                          <label for="expireDate">Expiry Date:</label>
                          <input type="text" id="expireDate" name="expireDate" placeholder="MM/YY" required>
                        </div>
                        <div class="security-code">
                          <label for="securityCode">Security Code:</label>
                          <input type="text" id="securityCode" name="securityCode" placeholder="CVC">
                        </div>
                      </div>
                    </div>
                    <div class="invoice-details">
                      <label for="socialSecurityNumber">Social Security Number</label>
                      <input type="text" id="socialSecurityNumber" name="socialSecurityNumber" placeholder="19880708-3568">
                    </div>
                  <div class="button-container">
                    <button id="checkOutPrevious1" type="button">Previous</button>
                    <button id="checkOutNext2" type="button">Next</button>
                  </div>
              </div> 
              <div class="checkout-section" id="section3">
                  <h2>Order Details</h2>
                  <div class="checkout-information">
                    <span class="order-name">Name:</span>
                    <span class="order-quantity">Quantity:</span>
                    <span class="order-price">Price:</span>
                  </div>
                  <div class="cheackout-price-amount">
                    <span class="order-subtotal">Subtotal:</span>
                    <span class="order-discount">Discount:</span>
                    <span class="order-shipping">Shipping:</span>
                    <span class="order-grandtotal">Grandtotal:</span>
                  </div>
                  <div class="discount-code">
                    <label for="discountCode">Discount Code</label>
                    <input type="text" id="discountCode" name="discountCode">
                  </div>
                  <div class="button-container">
                      <button id="checkOutReset" type="button">Reset All</button>
                      <button id="checkOutPrevious2" type="button">Previous</button>
                      <button id="placeOrder" type="submit">Place Order</button>
                  </div>
              </div>
          </form>
          </div>
`;

const shoppingCartButton = document.querySelector('#cartIcon');
shoppingCartButton.addEventListener('click', function() {
    const shoppingCart = document.querySelector('.shopping-cart');
    const checkOutView = document.querySelector(".check-out");
    shoppingCart.classList.toggle('active');
    checkOutView.classList.remove("active");
    shoppingCart.classList.contains('active') ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
    renderShoppingCartItems();
});

const menu = document.querySelector('.hamburger-menu');

function togglePayment(option) {
  const cardDetails = document.querySelector(".card-details");
  const invoiceDetails = document.querySelector(".invoice-details");

  if (option === "card") {
    cardDetails.style.display = "block";
    invoiceDetails.style.display = "none";
  } else if (option === "invoice") {
    cardDetails.style.display = "none";
    invoiceDetails.style.display = "block";
  }
}

const form = document.getElementById("checkOutForm");
const sections = document.querySelectorAll(".checkout-section");
const nextButtons = document.querySelectorAll('[id^="checkOutNext"]');
const nextButton1 = document.querySelector("#checkOutNext1");
const nextButton2 = document.querySelector("#checkOutNext2");
const prevButtons = document.querySelectorAll('[id^="checkOutPrevious"]');
const resetButton = document.getElementById("checkOutReset");
let currentSection = 0;

function showSection(sectionIndex) {
  sections.forEach((section, index) => {
    if (index === sectionIndex) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
}

function navigateToNext() {
  if (currentSection < sections.length - 1) {
    currentSection++;
    showSection(currentSection);
  }
}

function navigateToPrevious() {
  if (currentSection > 0) {
    currentSection--;
    showSection(currentSection);
  }
}

function resetForm() {
  form.reset();
  currentSection = 0;
  showSection(currentSection);
}

nextButton1.addEventListener("click", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phonenumber = document.getElementById("phoneNumber").value.trim();
  const address = document.getElementById("address").value.trim();
  const zipCode = document.getElementById("zipCode").value.trim();
  const city = document.getElementById("city").value.trim();

  let errorMessages = [];

  if (firstName === "") {
    errorMessages.push("First Name is required!");
  }

  if (lastName === "") {
    errorMessages.push("Last Name is required!");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessages.push("Enter a valid email address!");
  }

  if (phonenumber === "" || isNaN(phonenumber)) {
    errorMessages.push("Phonenumber is required!");
  }

  if (address === "") {
    errorMessages.push("Address is required!");
  }

  if (zipCode === "" || isNaN(zipCode)) {
    errorMessages.push("Zip Code is required!");
  }

  if (city === "") {
    errorMessages.push("City is required!");
  }

  const errorContainer = document.getElementById("errorMessages");
  if (errorMessages.length > 0) {
    
    //Not using! 
    //errorContainer.innerHTML = 
    //"<ul>" + errorMessages.map((msg) => `<li>${msg}</li>`).join("") + "</ul>";

    alert(errorMessages.map((msg) => msg).join('\n'));
  } else {
    errorContainer.innerHTML = "";
    navigateToNext();
  }
});

nextButton2.addEventListener("click", function (event) {
  event.preventDefault();

  const ssNumber = document.getElementById("socialSecurityNumber").value.trim();
  const cardName = document.getElementById("cardHolderName").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();

  const ssnInput = document.getElementById("socialSecurityNumber");
  const ssnPattern = /^(19|20)?(\d{6}[-+]|\d{8})\d{4}$/;
  //collectFormData();
  const errorContainer = document.getElementById("errorMessages");
  if (!ssnPattern.test(ssnInput.value) === true) {
    if (cardName !== '' && cardNumber !== '') {
        navigateToNext();
    } else {
        alert("Oops! Something went wrong, try again!");
        return;
    }
    alert("Oops! Something went wrong, try again!");
    return;
  } else {
    navigateToNext(); 
  }

});

prevButtons.forEach((button) => {
  button.addEventListener("click", navigateToPrevious);
});

resetButton.addEventListener("click", resetForm);

function collectFormData() {
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(key + ": " + value);
  }
}

form.addEventListener("submit", function (event) { 
    event.preventDefault();
    collectFormData();
 });

showSection(currentSection);

const cardOptionButton = document.querySelector(".card-option-button");
const invoiceOptionButton = document.querySelector(".invoice-option-button");

const cardDetails = document.querySelector(".card-details");
const invoiceDetails = document.querySelector(".invoice-details");

cardOptionButton.addEventListener("click", function () {
  togglePayment("card");
});

invoiceOptionButton.addEventListener("click", function () {
  togglePayment("invoice");
});

const formReset = document.getElementById("checkOutForm");
formReset.reset();

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');

    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
    //document.body.classList.toggle('no-scroll');
}

menu.addEventListener('click', function() {
    console.log('Toggle Menu!');
    toggleMenu(); 
});

function generateShoppingCartItem(cartItem) {
    const shoppingCartItem = document.createElement('div');
    shoppingCartItem.classList.add('shopping-cart-item');
    shoppingCartItem.id = `shoppingCartItem-${cartItem.id}`;
    shoppingCartItem.innerHTML = `
        <div class="shopping-cart-button">
                <button class="shopping-cart-delete-btn" aria-label="remove item from shopping cart" data-id=${cartItem.id}>
                    <img class="close-icon-img" src=${
                      prefersDarkMode
                        ? "assets/icons/close-icon_white.svg"
                        : "assets/icons/close-icon_dark.svg"
                    } width="24" height="24" alt="Icon to remove donut" aria-label="Button to remove donut from shopping cart">
                </button>
        </div>
        <div class="shopping-cart-item-img">
            <img src=${cartItem.imageURL} alt=${cartItem.name}>
        </div>
        <div class="shopping-cart-description">
            <span class="desc-title">${cartItem.name}</span>
            <span class="desc-category">${cartItem.category}</span>
            <span class="desc-desc">${cartItem.description}</span>
        </div>
        <div class="shopping-cart-quantity">
            <button class="shopping-cart-minus-btn" id=shoppingCartBtnMinus-${
              cartItem.id
            } data-id=${cartItem.id}>-</button>
            <input type="text" id=shoppingCartInputValue-${cartItem.id} value=${
      cartItem.quantity
    }>
            <button class="shopping-cart-plus-btn" id=shoppingCartBtnPlus-${
              cartItem.id
            } data-id=${cartItem.id}>+</button>
        </div>
        <div class="shopping-cart-total-price" id=shoppingCartTotalPrice-${
          cartItem.id
        }>${parseFloat(cartItem.quantity * cartItem.price).toFixed(2)} €</div>
    </div>
    `;

    return shoppingCartItem;
}

function renderShoppingCartItems() {
    const shoppingCartItemsContainer = document.getElementById('shoppingCartItems');
    shoppingCartItemsContainer.innerHTML = '';

    shoppingCart.forEach(cartItem => {
        const cartItemElement = generateShoppingCartItem(cartItem);
        shoppingCartItemsContainer.appendChild(cartItemElement);

        const buttonsDeleteItemsFromCart = cartItemElement.querySelectorAll('.shopping-cart-delete-btn');

        buttonsDeleteItemsFromCart.forEach(button => {
            button.addEventListener('click', function() {
                const itemIdToRemove = parseInt(button.getAttribute('data-id'));
                const itemToRemove = shoppingCart.find(item => item.id === itemIdToRemove);
                document.querySelector('.amount').textContent = `0.00€`;
                document.querySelector('.cart-count').textContent = `0`;
                removeItemFromCart(itemToRemove);
            });
        });
        const shoppingCartBtnAdd = document.querySelector(`#shoppingCartBtnPlus-${cartItem.id}`);
        shoppingCartBtnAdd.addEventListener('click', function(event) {
            const target = event.target;
            if (target.matches(`#shoppingCartBtnPlus-${cartItem.id}`)) {
                addToShoppingCart(cartItem);
                const inputElement = cartItemElement.querySelector(`#shoppingCartInputValue-${cartItem.id}`);
                inputElement.value = cartItem.quantity;
                const totalPriceElement = cartItemElement.querySelector(`#shoppingCartTotalPrice-${cartItem.id}`);
                totalPriceElement.textContent = `${parseFloat(cartItem.quantity * cartItem.price).toFixed(2)}€`;
            }
        });
        const shoppingCartBtnRemove = document.querySelector(`#shoppingCartBtnMinus-${cartItem.id}`);
        shoppingCartBtnRemove.addEventListener('click', function(event) {
            const target = event.target;
            if (target.matches(`#shoppingCartBtnMinus-${cartItem.id}`)) {
                removeFromShoppingCart(cartItem);
                const inputElement = cartItemElement.querySelector(`#shoppingCartInputValue-${cartItem.id}`);
                inputElement.value = cartItem.quantity;
                const totalPriceElement = cartItemElement.querySelector(`#shoppingCartTotalPrice-${cartItem.id}`);
                totalPriceElement.textContent = `${parseFloat(cartItem.quantity * cartItem.price).toFixed(2)}€`;
            }
        });
    });
    console.log('CartItems are rendered!');

    //Check-out button in shopping cart
    const checkOutBtnContainer = document.createElement('div');
    checkOutBtnContainer.classList.add('check-out-btn-container');
    const checkOutBtn = document.createElement('button');
    checkOutBtn.classList.add('check-out-btn');
    checkOutBtn.id = 'check-out-btn';
    checkOutBtn.textContent = 'Check Out';
    checkOutBtnContainer.appendChild(checkOutBtn);
    shoppingCartItemsContainer.appendChild(checkOutBtnContainer);

    checkOutBtn.addEventListener('click', function() {
        console.log('Checkout button');
        const checkOutView = document.querySelector(".check-out");
        const shoppingCart = document.querySelector('.shopping-cart');
        checkOutView.classList.toggle("active");
        shoppingCart.classList.remove('active');
    });
}

function renderProducts(products) {
  const productItemsUL = document.querySelector("#product-items");
  productItemsUL.innerHTML = "";
  const li = document.createElement("li");
  li.classList.add("donut-item");
  li.id = "donut-item";

  products.forEach((product) => {
    //itemImage
    const itemImage = document.createElement("div");
    itemImage.classList.add("item-image");
    const img = document.createElement("img");
    img.src = product.imageURL;
    img.alt = product.description;
    img.loading = "lazy";
    img.width = "1000";
    img.height = "1000";
    itemImage.appendChild(img);

    //itemRating
    const itemRating = document.createElement("div");
    itemRating.classList.add("item-rating");
    itemRating.id = `item-rating-${product.id}`;
    itemRating.textContent = generateStarRating(product.rating);

    //itemDetails
    const itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");

    //itemName
    const itemName = document.createElement("div");
    itemName.classList.add("item-name");
    const itemNameText = document.createElement("p");
    itemNameText.textContent = `${product.name}`;
    itemName.appendChild(itemNameText);

    //itemPrice
    const itemPrice = document.createElement("div");
    itemPrice.classList.add("item-price");
    const itemPriceText = document.createElement("p");
    itemPriceText.textContent = `${product.price}€`;
    itemPrice.appendChild(itemPriceText);

    //itemCategory
    const itemCategory = document.createElement("div");
    itemCategory.classList.add("item-category");
    const itemCategoryText = document.createElement("p");
    itemCategoryText.textContent = `Category: ${product.category}`;
    itemCategory.appendChild(itemCategoryText);

    //itemTotal
    const itemTotal = document.createElement("div");
    itemTotal.classList.add("item-total");
    const itemTotalText = document.createElement("p");
    itemTotalText.id = `item-total-${product.id}`;
    itemTotalText.textContent = `Total: 0€`;
    itemTotal.appendChild(itemTotalText);

    //itemAmount
    const itemAmount = document.createElement("div");
    itemAmount.classList.add("item-amount");
    const btnMinus = document.createElement("button");
    btnMinus.textContent = "-";
    btnMinus.classList.add("btn-minus");
    const amount = document.createElement("span");
    amount.id = `item-amount-${product.id}`;
    amount.classList.add("amount");
    amount.textContent = 0;
    const btnPlus = document.createElement("button");
    btnPlus.textContent = "+";
    btnPlus.classList.add("btn-plus");

    //Append from above to itemAmount
    itemAmount.appendChild(btnMinus);
    itemAmount.appendChild(amount);
    itemAmount.appendChild(btnPlus);

    //Append from above to itemDetails
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(itemCategory);
    itemDetails.appendChild(itemPrice);
    itemDetails.appendChild(itemTotal);
    itemDetails.appendChild(itemAmount);

    //Append everything to li
    li.appendChild(itemImage);
    li.appendChild(itemRating);
    li.appendChild(itemDetails);

    //Append all li to the main ul (show on screen)
    productItemsUL.appendChild(li);

    // Buttons for adding and removing the choosen item to/from shoppingcart array.
    btnPlus.addEventListener("click", function () {
      addToShoppingCart(product);
    });
    btnMinus.addEventListener("click", function () {
      removeFromShoppingCart(product);
    });
  });
}
//Star rating for donuts 
function generateStarRating(value) {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';

    const fullStars = fullStar.repeat(value);
    const emptyStars = emptyStar.repeat(maxRating - value);

    return fullStars + emptyStars;
}

function addToShoppingCart(product) {
    applyQuantityDiscount(shoppingCart);
    console.log('Product added to Shoppingcart: ', product);

    const cartIcon = document.getElementById('cartIcon');
    cartIcon.classList.add('cart-wiggle');

    cartIcon.addEventListener('animationend', function() {
        cartIcon.classList.remove('cart-wiggle');
      });

    const priceAmount = document.getElementById('menuCartAmount');
    priceAmount.classList.add('priceAmountZoomIn');

    priceAmount.addEventListener('animationend', function() {
        priceAmount.classList.remove('priceAmountZoomIn');
    });

    const totalPricePerItem = addToTotalPricePerItem(shoppingCart, product.id, product.price);
    console.log(`${product.name} added to cart!`);

    const indexToAdd = shoppingCart.findIndex(cartItem => cartItem.id === product.id);
    if (indexToAdd !== -1) {
        shoppingCart[indexToAdd].quantity++;
        document.getElementById(`item-amount-${product.id}`).textContent = shoppingCart[indexToAdd].quantity;
        document.getElementById(`item-total-${product.id}`).textContent = `Total ${parseFloat(totalPricePerItem).toFixed(2)} €`;
    } else {
        shoppingCart.push({ ... product, quantity: 1 });
        document.getElementById(`item-amount-${product.id}`).textContent = 1;
        document.getElementById(`item-total-${product.id}`).textContent = `Total: ${parseFloat(totalPricePerItem).toFixed(2)} €`;
    }
    console.log('VARUKORG: ', shoppingCart);
    getTotalOfItemsAndPrice(shoppingCart);
}

function removeFromShoppingCart(product) {
    console.log('Product removed from Shoppingcart: ', product);

    const priceAmountEffect = document.getElementById('menuCartAmount');
    priceAmountEffect.classList.add('priceAmountZoomOut');

    priceAmountEffect.addEventListener('animationend', function() {
        priceAmountEffect.classList.remove('priceAmountZoomOut');
    });

    const totalPricePerItem = removeTotalPriceFromItem(shoppingCart, product.id, product.price);
    console.log(`${product.name} removed from cart!`);

    const indexToRemove = shoppingCart.findIndex(cartItem => cartItem.id === product.id);
    if (indexToRemove !== -1) {
        if (shoppingCart[indexToRemove].quantity > 0) {
            shoppingCart[indexToRemove].quantity--;
            document.getElementById(`item-amount-${product.id}`).textContent = shoppingCart[indexToRemove].quantity;
            document.getElementById(`item-total-${product.id}`).textContent = `Total: ${parseFloat(totalPricePerItem).toFixed(2)} €`;
            if (shoppingCart[indexToRemove].quantity === 0) {
                shoppingCart.splice(indexToRemove, 1);
                const cartItemElement = document.querySelector(`#shoppingCartItem-${product.id}`);
                if (cartItemElement) {
                    cartItemElement.remove();
                    if (shoppingCart.length === 0) {
                        const shoppingCart = document.querySelector('.shopping-cart');
                        shoppingCart.classList.toggle('active');
                    }
                }
            }
        }
    }
    getTotalOfItemsAndPrice(shoppingCart);
}

function removeItemFromCart(cartItem) {
    console.log('CART ITEMS IN: ', shoppingCart);
    const indexToRemove = shoppingCart.findIndex(item => item.id === cartItem.id);
    if (indexToRemove !== -1) {
        const itemToRemove = shoppingCart[indexToRemove];
        if (itemToRemove.quantity > 0) {
            shoppingCart.splice(indexToRemove, 1);
            const cartItemElement = document.querySelector(`#shoppingCartItem-${cartItem.id}`);
            if (cartItemElement) {
                cartItemElement.remove();
                if (shoppingCart.length === 0) {
                    const shoppingCart = document.querySelector('.shopping-cart');
                    shoppingCart.classList.toggle('active');
                }
            }
            getTotalOfItemsAndPrice(shoppingCart);
            document.querySelector(`#item-total-${cartItem.id}`).textContent = `${parseFloat(totalPrice).toFixed(2)}€`;
            document.querySelector(`#item-amount-${cartItem.id}`).textContent = `${totalQuantity}`;
        }
    }
    console.log('CART ITEMS AFTER: ', shoppingCart);
}

function addToTotalPricePerItem(shoppingCart, itemId, itemPrice) {
    let totalPricePerItem = itemPrice;

    shoppingCart.forEach(item => {
        if (item.id === itemId) {
            if (item.quantity > 0) {
                totalPricePerItem += item.price * item.quantity;
            } else {
                totalPricePerItem = item.price;
            }
        }
    });

    return totalPricePerItem;
}

function removeTotalPriceFromItem(shoppingCart, itemId, itemPrice) {
    let totalPricePerItem = itemPrice;

    shoppingCart.forEach(item => {
        if (item.id === itemId) {
            if (item.quantity > 0) {
                totalPricePerItem += (item.price * item.quantity) - item.price - item.price;
            } else {
                totalPricePerItem = item.price;
            }
        }
    });

    return parseFloat(totalPricePerItem).toFixed(2);
}

function getTotalOfItemsAndPrice(shoppingCart) {
    let totalQuantity = 0;
    let totalPrice = 0;

    shoppingCart.forEach(cartItem => {
        totalQuantity += cartItem.quantity;
        totalPrice += cartItem.price * cartItem.quantity;
    });
        document.querySelector('.amount').textContent = `${parseFloat(totalPrice).toFixed(2)}€`;
        document.querySelector('.cart-count').textContent = `${totalQuantity}`;

    return {
        totalQuantity: totalQuantity,
        totalPrice: parseFloat(totalPrice).toFixed(2)
    };
}
const { totalQuantity, totalPrice } = getTotalOfItemsAndPrice(shoppingCart);

// If Scrolling it changes color on header
let prevScrollPos = window.scrollY;
const topbar = document.querySelector('.header');

window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    topbar.classList.remove('scroll');
  } else {
    topbar.classList.add('scroll');
  }
  
  prevScrollPos = currentScrollPos;
});

// Specialregler och filter

// Monday Discount // ON checkout.
function applyMondayDiscount(orderTotal) {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek === 1 && today.getHours() < 10) {
      console.log('Monday Discount: -10%');
      console.log(orderTotal);
      return orderTotal * 0.9;
  }
  return orderTotal;
}


// Weekend Surcharge // Issue with time.
function applyWeekendSurcharge(products) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const currentHour = today.getHours();

  if ((dayOfWeek === 5 && currentHour >= 15) || dayOfWeek === 6 || (dayOfWeek === 0 && currentHour < 3) || dayOfWeek === 1) {
      const weekendSurcharge = 1.15;

      products.forEach((product) => {
          product.price *= weekendSurcharge;
          product.price = +product.price.toFixed(2);
      });
  }
  return products;
}

//const updatedProductPrice = applyWeekendSurcharge(productsArray);

function applyQuantityDiscount(shoppingCart) {
  shoppingCart.forEach(item => {
      const originalPrice = item.originalPrice;
      const quantity = item.quantity;
  
      if (quantity === 9) {
        item.price = parseFloat((originalPrice * 0.9).toFixed(2));
      } else if (quantity === 9 || quantity < 10) {
        item.price = originalPrice;
      }
    });
}

//const updatedProductPrice = applyBulkDiscount(productsArray, 10);

//Shipping Cost
function calculateShippingCost(shoppingCart) {
  const totalQuantity = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalQuantity >= 15) {
      return 0; // Free Shipping!
  } else {
      const totalPrice = shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      const shippingCost = (2.20 + (totalPrice * 0.1)).toFixed(2);
      return shippingCost;
  }
}

const orderForm = document.getElementById('checkOutForm');

function clearOrderForm() {
  orderForm.reset();
  alert("Sorry, your order has expired. Please add products again.");
  location.reload();
}

function startOrderTimer() {
  setTimeout(clearOrderForm, 15 * 60 * 1000);
}

startOrderTimer();


const invoicePaymentOption = document.querySelector('.invoice-option-button');

function checkTotalAmountFormInvoice(totalAmount) {
  if (totalAmount > 80) {
    invoicePaymentOption.disabled = true;
  } else {
    invoicePaymentOption.disabled = false;
  }
}

const totalAmount = 80;
checkTotalAmountFormInvoice(totalAmount);

// filterAndSortProducts('', 0, 0, ''); // Original Array
    // filterAndSortProducts('', 0, 0, 'a-z / z-a');
    // filterAndSortProducts('', 0, 0, 'category');
    // filterAndSortProducts('categoryName', 0, 0, '');
    // filterAndSortProducts('', 0, 0, 'price-low-high / price-high-low');
    // filterAndSortProducts('', 0, 0, 'rating-high-low');
    // filterAndSortProducts('', 0, min-rating, 'rating-high-low');
    // filterAndSortProducts('', min-price, 0, 'rating-high-low');

    //let productsFromArray = filterAndSortProducts('', 0, 0, '');
    //const setPrice = applyWeekendSurcharge(productsFromArray);

    // function increasePrice(products) {
    //     const increasedPrice = product.price * 1.15;
    //     return { ...products, price: increasedPrice },
    //     console.log(products);  
    // }
    
    //const applyWeekendSurchargePrice = increasePrice(products);
    //const filterAndSortProducts = filterAndSortProducts('', 0, 0, '');

function filterAndSortProducts(category = '', minPrice = 0, minRating = 0, sortType = '') {
  if (category === '' && minPrice <= 0 && minRating <= 0 && sortType === '') {
      return [...productsArray];
  }

  let filteredProducts = [...productsArray];

  if (category !== '') {
      filteredProducts = filteredProducts.filter(product => product.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (minPrice > 0) {
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
  }

  if (minRating > 0) {
      filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
  }

  switch (sortType.toLowerCase()) {
      case 'a-z':
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
      case 'z-a':
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
      case 'category':
          filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
          break;
      case 'price-low-high':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
      case 'price-high-low':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
      case 'rating-high-low':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
      default:
          // Do nothing.
          break;
  }

  return filteredProducts;
}

}); // DOM