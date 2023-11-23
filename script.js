/** Todo:
 * Specialregler (lite kvar)
 * Formulär (kunduppgifter, kort och faktura) (pågående)
 * Knapp i shoppingcart (pågående)
 * Total, frakt, rabatt och moms sammanfattning i shoppingcart (pågående)
 * 
 * 
 * Filter (filtrera munkar bokstav, kategori, pris och rating) (pågående)
 * 
 * Themetoggle (ska göras)
 * Tillgänglighet? buttons? (ska göras)
 * kolla igenom/rensa kod (Återanvändning av kod?) (ska göras)
 * Lägga in kommentarer (ska göras)
 */


// Array med objects (produkter)

const productsArray = [
    {
        id: 1, 
        name: 'Bright & Delicious', 
        price: 3.52, 
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
        category: 'Chocolate', 
        rating: 5, 
        imageURL: 'assets/compressed_photos/cobnut-chocolate-and-amazing.png',
        description: 'A donut with a chocolate cover with finely chopped hazelnut',
        quantity: 0,
    },
    {
        id: 4, 
        name: 'Crispy Chocolate', 
        price: 3.22, 
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
        category: 'Chocolate', 
        rating: 3, 
        imageURL: 'assets/compressed_photos/les-is-more-chocolate.png',
        description: 'A chocolate dipped donut with crushed chocolate on top',
        quantity: 0,
    },
    {
        id: 7, 
        name: 'Pink & Still Going Strong', 
        price: 2.58, 
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
        category: 'Plane', 
        rating: 2, 
        imageURL: 'assets/compressed_photos/plane-but-fabolous.png',
        description: 'A plain donut with a little bit of green and white glaze',
        quantity: 0,
    },
    {
        id: 9, 
        name: 'Red Velvet A Match In Heaven', 
        price: 4.84, 
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
        category: 'Sprinkles', 
        rating: 4,
        imageURL: 'assets/compressed_photos/sprinkles-all-the-way.png',
        description: 'A donut with chocolate cover and orange glaze with sprinkles',
        quantity: 0,
    },
];

document.addEventListener('DOMContentLoaded', function() {

let cartItems = [];

document.querySelector("#header").innerHTML = `
<div class="content">
  <header>
    <div class="header">
      <div class="header-inner">
        <div class="hamburger-menu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="menu-logo">Donut Factory</div>
        <div class="cart-total">
          <span class="amount" id="menuCartAmount">0.00€</span>
          <div class="cart-icon" id="cartIcon">
            <img height="25" class="icon-svg" width="25" src="assets/icons/shopping-cart_dark.svg" aria-label="Shopping Cart Button">
            <div class="cart-count" id="menuCartCount">0</div>
          </div>
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

function generateShoppingCartItem(cartItem) {
    const shoppingCartItem = document.createElement('div');
    shoppingCartItem.classList.add('shopping-cart-item');
    shoppingCartItem.id = `shoppingCartItem-${cartItem.id}`;
    shoppingCartItem.innerHTML = `
        <div class="shopping-cart-button">
            <span class="shopping-cart-delete-btn" data-id=${cartItem.id}>
                <img src="assets/icons/close-icon.svg" alt="Icon to remove donut">
            </span>
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
            <button class="shopping-cart-minus-btn" id=shoppingCartBtnMinus-${cartItem.id} data-id=${cartItem.id}>-</button>
            <input type="text" id=shoppingCartInputValue-${cartItem.id} value=${cartItem.quantity}>
            <button class="shopping-cart-plus-btn" id=shoppingCartBtnPlus-${cartItem.id} data-id=${cartItem.id}>+</button>
        </div>
        <div class="shopping-cart-total-price" id=shoppingCartTotalPrice-${cartItem.id}>${parseFloat(cartItem.quantity * cartItem.price).toFixed(2)} €</div>
    </div>
    `;

    return shoppingCartItem;
}

function renderShoppingCartItems() {
    const shoppingCartItemsContainer = document.getElementById('shoppingCartItems');
    shoppingCartItemsContainer.innerHTML = '';

    cartItems.forEach(cartItem => {
        const cartItemElement = generateShoppingCartItem(cartItem);
        shoppingCartItemsContainer.appendChild(cartItemElement);

        const buttonsDeleteItemsFromCart = cartItemElement.querySelectorAll('.shopping-cart-delete-btn');

        buttonsDeleteItemsFromCart.forEach(button => {
            button.addEventListener('click', function() {
                const itemIdToRemove = parseInt(button.getAttribute('data-id'));
                const itemToRemove = cartItems.find(item => item.id === itemIdToRemove);
                document.querySelector('.amount').textContent = `0.00€`;
                document.querySelector('.cart-count').textContent = `0`;
                removeItemFromCart(itemToRemove);
            });
        });
        const shoppingCartBtnAdd = document.querySelector(`#shoppingCartBtnPlus-${cartItem.id}`);
        shoppingCartBtnAdd.addEventListener('click', function(event) {
            const target = event.target;
            if (target.matches(`#shoppingCartBtnPlus-${cartItem.id}`)) {
                addToCart(cartItem);
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
                console.log('SDDF: ', cartItem.quantity);
                removeFromCart(cartItem);
                const inputElement = cartItemElement.querySelector(`#shoppingCartInputValue-${cartItem.id}`);
                inputElement.value = cartItem.quantity;
                const totalPriceElement = cartItemElement.querySelector(`#shoppingCartTotalPrice-${cartItem.id}`);
                totalPriceElement.textContent = `${parseFloat(cartItem.quantity * cartItem.price).toFixed(2)}€`;
            }
        });
    });
    console.log('CartItems are rendered!');
    console.log(calculateShippingCost(cartItems));
}

const shoppingCartButton = document.querySelector('#cartIcon');
shoppingCartButton.addEventListener('click', function() {
    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    renderShoppingCartItems();
});

const menu = document.querySelector('.hamburger-menu');

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');

    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

menu.addEventListener('click', function() {
    console.log('Toggle Menu!');
    toggleMenu(); 
});

function generateStarRating(value) {
    const maxRating = 5;
    const fullStar = '★';
    const emptyStar = '☆';

    const fullStars = fullStar.repeat(value);
    const emptyStars = emptyStar.repeat(maxRating - value);

    return fullStars + emptyStars;
}

function addToTotalPrice(cartItems, itemId, itemPrice) {
    let totalPricePerItem = itemPrice;

    cartItems.forEach(item => {
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

function removeFromTotalPrice(cartItems, itemId, itemPrice) {
    let totalPricePerItem = itemPrice;

    cartItems.forEach(item => {
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

function displayProducts() {
    
    // filterAndSortProducts('', 0, 0, ''); // Original Array
    // filterAndSortProducts('', 0, 0, 'a-z / z-a');
    // filterAndSortProducts('', 0, 0, 'category');
    // filterAndSortProducts('categoryName', 0, 0, '');
    // filterAndSortProducts('', 0, 0, 'price-low-high / price-high-low');
    // filterAndSortProducts('', 0, 0, 'rating-high-low');
    // filterAndSortProducts('', 0, min-rating, 'rating-high-low');
    // filterAndSortProducts('', min-price, 0, 'rating-high-low');

    let productsFromArray = filterAndSortProducts('', 0, 0, '');

    const productItemsUL = document.querySelector('#product-items');
    productsFromArray.forEach(donut => {
        const li = document.createElement('li');
        li.classList.add('donut-item');
        li.id = 'donut-item';

        //itemImage
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        const img = document.createElement('img');
        img.src = donut.imageURL;
        img.alt = donut.description; 
        img.loading = 'lazy';
        img.width = '1000';
        img.height = '1000';
        itemImage.appendChild(img);

        //itemRating
        const itemRating = document.createElement('div');
        itemRating.classList.add('item-rating');
        itemRating.id = `item-rating-${donut.id}`;
        itemRating.textContent = generateStarRating(donut.rating);

        //itemDetails
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        //itemNamePrice
        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        const itemNameText = document.createElement('p');
        itemNameText.textContent = `${donut.name}`;
        itemName.appendChild(itemNameText);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        const itemPriceText = document.createElement('p');
        itemPriceText.textContent = `${donut.price}€`;
        itemPrice.appendChild(itemPriceText);
        

        //itemCategory
        const itemCategory = document.createElement('div');
        itemCategory.classList.add('item-category');
        const itemCategoryText = document.createElement('p');
        itemCategoryText.textContent = `Category: ${donut.category}`;
        itemCategory.appendChild(itemCategoryText);

        //itemTotal
        const itemTotal = document.createElement('div');
        itemTotal.classList.add('item-total');
        const itemTotalText = document.createElement('p');
        itemTotalText.id = `item-total-${donut.id}`;
        itemTotalText.textContent = `Total: 0€`;
        itemTotal.appendChild(itemTotalText);

        //itemAmount
        const itemAmount = document.createElement('div');
        itemAmount.classList.add('item-amount');
        const btnMinus = document.createElement('button');
        btnMinus.textContent = '-';
        btnMinus.classList.add('btn-minus');
        const amount = document.createElement('span');
        amount.id = `item-amount-${donut.id}`;
        amount.classList.add('amount');
        amount.textContent = 0;
        const btnPlus = document.createElement('button');
        btnPlus.textContent = '+';
        btnPlus.classList.add('btn-plus');

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

        //Append everything to li (show on screen)
        li.appendChild(itemImage);
        li.appendChild(itemRating);
        li.appendChild(itemDetails);
        productItemsUL.appendChild(li);

        btnPlus.addEventListener('click', function() { addToCart(donut) });
        btnMinus.addEventListener('click', function() { removeFromCart(donut) });
    });
}

displayProducts();

// Adding items to cart from item object
function addToCart(donut) {
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

    const totalPrice = addToTotalPrice(cartItems, donut.id, donut.price);
    console.log('ADDED TO CART!');
    const foundItemIndex = cartItems.findIndex(item => item.id === donut.id);
    if (foundItemIndex !== -1) {
        cartItems[foundItemIndex].quantity++;
        document.getElementById(`item-amount-${donut.id}`).textContent = cartItems[foundItemIndex].quantity;
        document.getElementById(`item-total-${donut.id}`).textContent = `Total: ${parseFloat(totalPrice).toFixed(2)} €`;
    } else {
        cartItems.push({ ...donut, quantity: 1 });
        document.getElementById(`item-amount-${donut.id}`).textContent = 1;
        document.getElementById(`item-total-${donut.id}`).textContent = `Total: ${parseFloat(totalPrice).toFixed(2)} €`;
    }
    console.log('VARUKORG: ', cartItems);
    getTotalItemsAndPrice(cartItems);
}


function removeFromCart(donut) {
    const totalPrice = removeFromTotalPrice(cartItems, donut.id, donut.price);
    console.log('DONUT BORTTAGEN: ', donut.name);
    console.log('REMOVED');

    const priceAmount = document.getElementById('menuCartAmount');
    priceAmount.classList.add('priceAmountZoomOut');

    priceAmount.addEventListener('animationend', function() {
        priceAmount.classList.remove('priceAmountZoomOut');
    });

    const indexToRemove = cartItems.findIndex(item => item.id === donut.id);
    if (indexToRemove !== -1) {
        if (cartItems[indexToRemove].quantity > 0) {
            cartItems[indexToRemove].quantity--;
            document.getElementById(`item-amount-${donut.id}`).textContent = cartItems[indexToRemove].quantity;
            document.getElementById(`item-total-${donut.id}`).textContent = `Total: ${parseFloat(totalPrice).toFixed(2)}€`;
            if (cartItems[indexToRemove].quantity === 0) {
                cartItems.splice(indexToRemove, 1);
                const cartItemElement = document.querySelector(`#shoppingCartItem-${donut.id}`);
                if (cartItemElement) {
                    cartItemElement.remove();
                    if (cartItems.length === 0) {
                        const shoppingCart = document.querySelector('.shopping-cart');
                        shoppingCart.classList.toggle('active');
                        document.body.classList.toggle('no-scroll');
                    }
                }
            }
        }
    }
    console.log('VARUKORG: ', cartItems);
    getTotalItemsAndPrice(cartItems);
}

function removeItemFromCart(cartItem) {
    console.log('CART ITEMS IN: ', cartItems);
    const indexToRemove = cartItems.findIndex(item => item.id === cartItem.id);
    if (indexToRemove !== -1) {
        const itemToRemove = cartItems[indexToRemove];
        if (itemToRemove.quantity > 0) {
            cartItems.splice(indexToRemove, 1);
            const cartItemElement = document.querySelector(`#shoppingCartItem-${cartItem.id}`);
            if (cartItemElement) {
                cartItemElement.remove();
                if (cartItems.length === 0) {
                    const shoppingCart = document.querySelector('.shopping-cart');
                    shoppingCart.classList.toggle('active');
                    document.body.classList.toggle('no-scroll');
                }
            }
            getTotalItemsAndPrice(cartItems);
            document.querySelector(`#item-total-${cartItem.id}`).textContent = `${parseFloat(totalPrice).toFixed(2)}€`;
            document.querySelector(`#item-amount-${cartItem.id}`).textContent = `${totalQuantity}`;
        }
    }
    console.log('CART ITEMS AFTER: ', cartItems);
}

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


// Monday Discount
function applyMondayDiscount(orderTotal) {
    const today = new Data();
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 1 && today.getHours() < 10) {
        return orderTotal * 0.9;
    }
    return orderTotal;
}

// Weekend Surcharge
function applyWeekendSurcharge(productsArray) {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    const updatedProductPrice = productsArray.map(item => {
        const newItem = { ...item};

        if((currentDay === 3 && currentHour >= 15) || (currentDay === 1 && currentHour === 3)) {
            newItem.price = (item.price * 1.15).toFixed(2);
        }

        return newItem;
    });

    return updatedProductPrice;
}

//Shipping Cost
function calculateShippingCost(cartItems) {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    if (totalQuantity >= 15) {
        return 0; // Free Shipping!
    } else {
        const totalPrice = cartItems.reduce((acc, item) => acc + (item.price*item.quantity), 0);
        const shippingCost = (2.20 + (totalPrice * 0.1)).toFixed(2);
        return shippingCost;
    }
}



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

function getTotalItemsAndPrice() {
    let totalQuantity = 0;
    let totalPrice = 0;
  
    cartItems.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });
            document.querySelector('.amount').textContent = `${parseFloat(totalPrice).toFixed(2)}€`;
            document.querySelector('.cart-count').textContent = `${totalQuantity}`;
  
    return {
        totalQuantity: totalQuantity,
        totalPrice: parseFloat(totalPrice).toFixed(2)
    };
  }
  const { totalQuantity, totalPrice } = getTotalItemsAndPrice(cartItems);
});

/* ------------------------------------------ */

// Check out button - shopping cart
// New View with 3 sections:
// Section 1: (contact/shipping details
// Section 2: payment + discount code + accept conditions + news letter, 
// Section 3: summary + clear order and place order)

