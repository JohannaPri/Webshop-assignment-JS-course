//Array with objects (donuts and information)
const productsArray = [
    {
        id: 1, 
        name: 'Bright & Delicious', 
        price: 3.55, 
        originalPrice: 3.55,
        category: 'Vegan', 
        rating: 4, 
        imageURL: 'assets/compressed_photos/bright-and-delicious-min.png',
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
        imageURL: 'assets/compressed_photos/bloody-strawberry-min.png',
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
        imageURL: 'assets/compressed_photos/cobnut-chocolate-and-amazing-min.png',
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
        imageURL: 'assets/compressed_photos/crispy-chocolate-min.png',
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
        imageURL: 'assets/compressed_photos/extra-extra-caramel-min.png',
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
        imageURL: 'assets/compressed_photos/les-is-more-chocolate-min.png',
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
        imageURL: 'assets/compressed_photos/pink-still-going-strong-min.png',
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
        imageURL: 'assets/compressed_photos/plane-but-fabolous-min.png',
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
        imageURL: 'assets/compressed_photos/red-velvet-match-in-heaven-min.png',
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
        imageURL: 'assets/compressed_photos/sprinkles-all-the-way-min.png',
        description: 'A donut with chocolate cover and orange glaze with sprinkles',
        quantity: 0,
    },
];

let shoppingCart = [];
let productsFromArray = [];

document.addEventListener('DOMContentLoaded', function() {
    //DarkMode 
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
    
    //Filter
    function filterAndSortProducts(category = '', minPrice = 0, minRating = 0, sortType = '') {
      if (category === '' && minPrice <= 0 && minRating <= 0 && sortType === '') {
          return [...productsArray];
      }
      //Copies the original array to filterproducts
      let filteredProducts = [...productsArray];

      //Not using category 
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
              //Do nothing.
              break;
      }
    
      return filteredProducts;
    }
    //When window onload (are loaded)
    window.onload = function() {
      let productsFromArray = [...productsArray];
      fetchAndUpdateProduct(productsFromArray);
  }

    function fetchAndUpdateProduct(products) {
      //applyQuantityDiscount(products);
      renderProducts(applyWeekendSurcharge(products));
    }
    
    //InnerHTML including the header and menu
document.querySelector('#header').innerHTML = `
<main class="main" id="main">
<div class="content">
  <header>
    <div class="header">
      <div class="header-inner">
        <button class="hamburger-menu" aria-label="open menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <div class="menu-logo">Donut Factory</div>
        <div class="cart-total">
          <span class="amount" id="menuCartAmount">0.00€</span>
          <button class="cart-icon" id="cartIcon" aria-label="Shopping Cart Button">
            <img class="icon-svg" src="assets/icons/shopping-cart_dark.svg" width="27" height="27" alt="Icon for shopping cart">
            <span class="cart-count" id="menuCartCount">0</span>
          </button>
        </div>
      </div>
    </div>
      <ul class="product-items" id="productItems"></ul>
  </header>
  <button class="filter-icon" id="filterIcon" aria-label="Filter button">
  <img class="filter-icon-svg" src="assets/icons/filter-list.svg" width="35" height="35" alt="Icon to filter the donuts">
  </button>
  <nav class="menu-links" id="menu-links">
  <ul class="menu-items">
      <li><a href="#products">About us</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#contact">Deals</a></li>
  </ul>
  </nav>
</div>
</main>
`;

//InnerHTML - checkout with all sections 
document.querySelector("#checkOut").innerHTML = `
<div class="check-out-form">
            <form id="checkOutForm">
              <div class="checkout-section" id="section1">
                  <h2>Shipping Details</h2>

                  <label for="firstName">First Name:</label>
                  <input type="text" id="firstName" name="firstName" required>

                  <label for="lastName">Last Name:</label>
                  <input type="text" id="lastName" name="lastname" required>

                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required>

                  <label for="phoneNumber">Phone Number:</label>
                  <input type="tel" id="phoneNumber" name="phonenumber" required>

                  <label for="address">Address:</label>
                  <input type="text" id="address" name="address" required>

                  <label for="zipCode">Zip Code:</label>
                  <input type="text" id="zipCode" name="zipcode" required>
                  
                  <label for="city">City:</label>
                  <input type="text" id="city" name="city" required>
                  
                  <label for="pinCode">Pin Code:</label>
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
                      <label for="socialSecurityNumber">Social Security Number:</label>
                      <input type="text" id="socialSecurityNumber" name="socialSecurityNumber" placeholder="19880708-3568">
                    </div>
                  <div class="button-container">
                    <button id="checkOutPrevious1" type="button">Previous</button>
                    <button id="checkOutNext2" type="button">Next</button>
                  </div>
              </div> 
              <div class="checkout-section" id="section3">
                  <h2>Order Details</h2>

                  <table class="checkout-information">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody class="order-summary-table-items" id="orderSummaryTableItems">
                    </tbody>
                  </table>


                  <div class="checkout-price-amount">
                    <div class="order-subtotal" id="orderSubTotal">Subtotal: <span id="SSubTotal">0.00€</span></div>
                    <div class="order-discount" id="orderDiscount">Discount(S): <span id="SDiscount"></span></div>
                    <div class="order-shipping" id="orderShipping">Shipping: <span id="SShipping">0.00€</span></div>
                    <div class="order-grandtotal" id="orderGrandTotal">Grandtotal: <span id="SGrandTotal">0.00€</span></div>
                  </div>
                  
                  <div class="checkbox-discount-container">
                  <div class="discount-code">
                  <label for="discountCode">Discount Code:</label>
                  <input type="text" id="discountCode" name="discountCode">
                  </div>
                  <div class="checkbox-containers" id="personalDataProcessing">
                    <div class="personaldata-container">
                      <label for="personalDataAccept">
                        <input type="checkbox" id="personalDataAccept" name="personalDataProcessing" aria-label=" accept personal data processing" >
                        <span>I agree with the conditions</span>
                      </label>
                    </div>
                    <div class="newsletter-container" id="newsLetterSubscription">
                    <label for="newsLetter">
                      <input type="checkbox" id="newsLetter" aria-label="checkbox to subscribe on newsletter" name="newsLetterSubscription" checked>
                      <span>Subscribe to Our Newsletter</span>
                    </label>
                  </div>
                </div>
                  </div>
                  <div class="button-container order-summary">
                      <button id="checkOutReset" type="button">Reset All</button>
                      <button id="checkOutPrevious2" type="button">Previous</button>
                      <button id="placeOrder" type="submit">Place Order</button>
                  </div>
              </div>
          </form>
          </div>
`;

//Filter innerHTML 
document.querySelector("#filterDiv").innerHTML = `
<div class="filter-view" id="filterView">
    <h2>Filter Options</h2>
    <div class="filters">
        <label>
            <input type="checkbox" id="filterTopRated" aria-label="check-box to filter the donuts">
            <span>Top Rated</span>
        </label>
        <select id="filterSortOrderLH">
            <option value="">Sort by price</option>
            <option value="low-to-high">Low to High Price</option>
            <option value="high-to-low">High to Low Price</option>
        </select>
        <select id="filterSortOrderAZ">
            <option value="">Sort by name</option>
            <option value="a-to-z">A to Z Name</option>
            <option value="z-to-a">Z to A Name</option>
        </select>
    </div>
</div>
`;

//Button (icon) to get to shoppingcart
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

//Card and invoice
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
//Buttons in checkout section
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

//Confirmations when clicking reset all. Choose between cancel or OK
function handleConfirmation() {
  const confirmation = confirm("Press OK to start over completely. Press CANCEL to only clear the form (your shopping cart will not be emptied).");

  if (confirmation) {
    location.reload();
  } else {
    form.reset();
    currentSection = 0;
    showSection(currentSection);
  }
}

function resetForm() {
  handleConfirmation();
}

nextButton1.addEventListener("click", function (event) {
  event.preventDefault();

  //Customer information
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phonenumber = document.getElementById("phoneNumber").value.trim();
  const address = document.getElementById("address").value.trim();
  const zipCode = document.getElementById("zipCode").value.trim();
  const city = document.getElementById("city").value.trim();

  //Error messages 
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

//Card and Invoice validation 
nextButton2.addEventListener("click", function (event) {
  event.preventDefault();

  const ssnInput = document.getElementById("socialSecurityNumber");
  const cardName = document.getElementById("cardHolderName").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();

  const ssnPattern = /^(19|20)?(\d{6}[-+]|\d{8})\d{4}$/;

if (ssnPattern.test(ssnInput.value)) {
  navigateToNext();
} else if (cardName !== '' && cardNumber !== '') {
  navigateToNext()
} else {
  alert("Opps! Something went wrong! Please try again.");
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
//Place Order Button - the last step
const placeOrderButton = document.getElementById('placeOrder');
placeOrderButton.addEventListener('click', function(event) {
event.preventDefault();
personalDataCheckboxChecker();
});

//Checking if personal data is checked or not
function personalDataCheckboxChecker() {
  const personalDataCheckbox = document.getElementById('personalDataAccept');
  const isPersonalDataChecked = personalDataCheckbox.checked;

  //When clicking on place order
  if (isPersonalDataChecked) {
    collectFormData();
    alert('Thank you for your order!\n\nWe will deliver your donuts to your address within 2 workingdays!\n\nHave a nice day!');
  } else {
    alert('You need to accept our terms of conditions.');
    return;
  }

}

showSection(currentSection);

//Choose between card or invoice
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
    menu.classList.contains('active') ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
}

menu.addEventListener('click', function() {
    console.log('Toggle Menu!');
    toggleMenu(); 
});
//Order summary 
function addItemToOrderSummary(cartItem) {
  const orderSummaryTable = document.getElementById('orderSummaryTableItems');

  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = cartItem.name;

  const quantityCell = document.createElement('td');
  quantityCell.textContent = cartItem.quantity;

  const priceCell = document.createElement('td');
  priceCell.textContent = `${(cartItem.quantity * cartItem.price).toFixed(2)}€`;

  newRow.appendChild(nameCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(priceCell);

  orderSummaryTable.appendChild(newRow);
}
//Shopping cart icon and inside of shoppingcart
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
                    } width="24" height="24" alt="Icon to remove donut" width="24" height="24" aria-label="Button to remove donut from shopping cart">
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
            <button class="shopping-cart-minus-btn" aria-label="Remove from shopping cart" id=shoppingCartBtnMinus-${
              cartItem.id
            } data-id=${cartItem.id}>-</button>
            <input type="text" id=shoppingCartInputValue-${cartItem.id} value=${
      cartItem.quantity
    }>
            <button class="shopping-cart-plus-btn" aria-label="Add to shopping cart" id=shoppingCartBtnPlus-${
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

//ShoppingCart - Renders items in shoppingcart
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
        startOrderTimer();
        const totalAmount = shoppingCart.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        checkTotalAmountFormInvoice(totalAmount);
        const checkOutView = document.querySelector(".check-out");
        const shoppingCartDiv = document.querySelector('.shopping-cart');
        checkOutView.classList.toggle("active");
        shoppingCartDiv.classList.remove('active');

      console.log('CLICK!');
      console.log(shoppingCart);
      shoppingCart.map((cartItem) => addItemToOrderSummary(cartItem));
      addToOrderSummarySubTotal(shoppingCart); 
    });
}

function renderProducts(products) {
  const productItemsUL = document.querySelector("#productItems");
  productItemsUL.innerHTML = "";


  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add('donut-item');
    li.id = `donut-item-${product.id}`;

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

    //Buttons for adding and removing the choosen item to/from shoppingcart array.
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

//Animation for shoppingcart icon and total amount in header
function addToShoppingCart(product) {
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

    //Total amount (price)
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

    //calculateShippingCost(shoppingCart);
    //applyQuantityDiscount(shoppingCart, product.id, 10);
    //renderShoppingCartItems();
}

//Remove item from shoppingcart
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

//Summary subtotal, discount, shipping and grandtotal
function addToOrderSummarySubTotal(shoppingCart) {
  let totalPrice = 0;

  shoppingCart.forEach(cartItem => {    
    totalPrice += cartItem.price * cartItem.quantity;
  });

  const orderSummarySubTotal = document.getElementById('SSubTotal');
  orderSummarySubTotal.textContent = `${parseFloat(totalPrice).toFixed(2)}€`;

  let shippingCost = calculateShippingCost(shoppingCart);
  let mondayDiscount = applyMondayDiscount(totalPrice) ? applyMondayDiscount(totalPrice) : 0;

  let grandTotalPrice = parseFloat(totalPrice += shippingCost -= mondayDiscount).toFixed(2);
  console.log(`SubTotal: ${totalPrice}€\nShippingcost: ${shippingCost}€\nMonday Discount: -${mondayDiscount}€\nGrand Total: ${grandTotalPrice}€`);


  //show the Grand Total.
  const orderSummaryGrandTotal = document.getElementById('SGrandTotal');
  orderSummaryGrandTotal.textContent = `${parseFloat(totalPrice).toFixed(2)}€`;
}

//If Scrolling it changes color on header
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

//Special rules

//Monday Discount // ON checkout.
function applyMondayDiscount(orderTotal) {
  const today = new Date();
  const dayOfWeek = today.getDay();

  if (dayOfWeek === 1 && today.getHours() < 10) {
      console.log('Monday Discount: -10%');
      console.log(orderTotal);
      let orderTotalPrice = (orderTotal * 0.1);

      const orderSummaryDiscount = document.getElementById('orderDiscount');
      const discountText = document.createElement("p");
      discountText.textContent = `Monday 10% Off: -${orderTotalPrice}€`;
      orderSummaryDiscount.appendChild(discountText);

      return orderTotalPrice;
  }
}

//Weekend Surcharge // Issue with time. Without currentHour < 3 its working.
function applyWeekendSurcharge(products) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const currentHour = today.getHours();

  if ((dayOfWeek === 5 && currentHour >= 15) || dayOfWeek === 6 || (dayOfWeek === 1 && currentHour < 3) || dayOfWeek === 0) {
      const weekendSurcharge = 1.15;

      products.forEach((product) => {
          product.price *= weekendSurcharge;
          product.price = +product.price.toFixed(2);
      });
  }
  return products;
}

//const updatedProductPrice = applyWeekendSurcharge(productsArray);

//10% discount if you buy more than 10 of the same donut.
function applyQuantityDiscount(shoppingCart, itemId, discountPercentage) {
  const itemToDiscount = shoppingCart.find(item => item.id === itemId);

  if (itemToDiscount) {
      if (itemToDiscount.quantity > 9 && !itemToDiscount.discountApplied) {
          const originalPrice = itemToDiscount.price;
          const discountedPrice = originalPrice * (1 - discountPercentage / 100);
          itemToDiscount.price = parseFloat(discountedPrice.toFixed(2));
          itemToDiscount.discountApplied = true;
          console.log(`Bulk discount of ${discountPercentage}% applied to item ${itemId}. New price: ${itemToDiscount.price}`);
      } else if (itemToDiscount.quantity < 10 && itemToDiscount.discountApplied) {
          itemToDiscount.price = itemToDiscount.originalPrice;
          itemToDiscount.discountApplied = false;
          console.log(`Bulk discount removed from item ${itemId}. Original price restored: ${itemToDiscount.price}`);
      } else {
          console.log(`No changes in discount applied to item ${itemId}.`);
      }
  } else {
      console.log(`Item with ID ${itemId} not found in shopping cart.`);
  }
}

//Shipping Cost
function calculateShippingCost(shoppingCart) {
  const totalQuantity = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);

  if (totalQuantity >= 15) {
    return 0; // Free Shipping!
  } else {
    const totalPrice = shoppingCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingCost = (2.20 + (totalPrice * 0.1)).toFixed(2);
    console.log('Shopping Cart Total Price: ' + totalPrice.toFixed(2));
    console.log('Shipping Cost: ' + shippingCost);
    const summaryShipping = document.getElementById('orderShipping');
    summaryShipping.textContent = `Shippingcost: ${shippingCost}€`;
    return shippingCost; // Parse the result to a float and return
  }
}
//The webshop will reload if their is not a placed order within 15 minutes
const orderForm = document.getElementById('checkOutForm');

function clearOrderForm() {
  orderForm.reset();
  alert("Sorry, your order has expired. Please add products again.");
  location.reload();
}

function startOrderTimer() {
  setTimeout(clearOrderForm, 15 * 60 * 1000);
}

//If amount is over 80€ you can not choose to pay with invoice
const invoicePaymentOption = document.querySelector('.invoice-option-button');

function checkTotalAmountFormInvoice(totalAmount) {
  if (totalAmount > 80) {
    invoicePaymentOption.disabled = true;
  } else {
    invoicePaymentOption.disabled = false;
  }
}

//const totalAmount = 81;

//Filters - Rating, high to low price, low to high price and a to z and z to a

//FilterAndSortProducts('', 0, 0, ''); // Original Array
    // filterAndSortProducts('', 0, 0, 'a-z / z-a');
    // filterAndSortProducts('', 0, 0, 'category');
    // filterAndSortProducts('categoryName', 0, 0, '');
    // filterAndSortProducts('', 0, 0, 'price-low-high / price-high-low');
    // filterAndSortProducts('', 0, 0, 'rating-high-low');
    // filterAndSortProducts('', 0, min-rating, 'rating-high-low');
    // filterAndSortProducts('', min-price, 0, 'rating-high-low');

    const filterButton = document.getElementById('filterIcon');
    filterButton.addEventListener('click', function() {
      const filterView = document.getElementById('filterView');
      filterView.classList.toggle('active');
    });

const filterRatingCheckbox = document.getElementById('filterTopRated');
const filterSortPrice = document.getElementById('filterSortOrderLH');
const filterSortName = document.getElementById('filterSortOrderAZ');

filterRatingCheckbox.addEventListener('change', applyFilters);
filterSortPrice.addEventListener('change', applyFilters);
filterSortName.addEventListener('change', applyFilters);

function applyFilters() {
  const isCheckedRating = filterRatingCheckbox.checked;
  const sortPriceValue = filterSortPrice.value;
  const sortNameValue = filterSortName.value;

  if (sortPriceValue === 'low-to-high') {
    renderProducts(filterAndSortProducts('', 0, 0, 'price-low-high'));
  } else if (sortPriceValue === 'high-to-low') {
    renderProducts(filterAndSortProducts('', 0, 0, 'price-high-low'));
  } else {
    if (isCheckedRating) {
      renderProducts(filterAndSortProducts('', 0, 0, 'rating-high-low'));
    } else if (sortNameValue === 'a-to-z') {
      renderProducts(filterAndSortProducts('', 0, 0, 'a-z'));
    } else if (sortNameValue === 'z-to-a') {
      renderProducts(filterAndSortProducts('', 0, 0, 'z-a'));
    } else {
      renderProducts(filterAndSortProducts('', 0, 0, ''));
    }
  }
}

}); //DOM