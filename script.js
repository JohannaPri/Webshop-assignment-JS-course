/**
 * Skapa array med object i
 * skapa funktion för att generera sections
 * Skapa loop i funktioner för att loopa igenom objekten i arrayen
 */

//themeToggle mörkt/ljust ska vara med!

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
        imageURL: './assets/compressed_photos/crispy-chocolate.png',
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

let cartItems = [];

function toggleShoppingCart() {
    const shoppingCart = document.querySelector('#shopping-cart');
    shoppingCart.classList.toggle('active');
}

const menu = document.querySelector('.hamburger-menu');

function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');

    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
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

function getTotalQuantityById(cartItems) {
    let totalQuantityById = {};

    cartItems.forEach(item => {
        const { id, quantity } = item;

        if (totalQuantityById[id]) {
            totalQuantityById[id] += quantity;
        } else {
            totalQuantityById[id] = quantity;
        }
    });

    return totalQuantityById;
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

    const productItemsUL = document.querySelector('#product_items');

    productsArray.forEach(donut => {
        const li = document.createElement('li');
        li.classList.add('donut-item');
        li.id = 'donut-item';

        //itemImage
        const itemImage = document.createElement('div');
        itemImage.classList.add('item-image');
        const img = document.createElement('img');
        img.src = donut.imageURL;
        img.alt = donut.description; 
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
        const itemNamePrice = document.createElement('div');
        itemNamePrice.classList.add('item-name-price');
        const itemNamePriceText = document.createElement('p');
        itemNamePriceText.textContent = `${donut.name} | ${donut.price} €`;
        itemNamePrice.appendChild(itemNamePriceText);

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
        itemTotalText.textContent = `Total: 0 €`;
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
        itemDetails.appendChild(itemNamePrice);
        itemDetails.appendChild(itemCategory);
        itemDetails.appendChild(itemTotal);
        itemDetails.appendChild(itemAmount);

        //Render
        li.appendChild(itemImage);
        li.appendChild(itemRating);
        li.appendChild(itemDetails);
        productItemsUL.appendChild(li);

        btnPlus.addEventListener('click', function() { addToCart(donut) });

        btnMinus.addEventListener('click', function() { removeFromCart(donut)});

        console.log(`ID: ${donut.id} in cart: ${getTotalQuantityById(cartItems, donut.id)}`);
        
    });
}

displayProducts();


function addToCart(donut) {
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
}


function removeFromCart(donut) {
    const totalPrice = removeFromTotalPrice(cartItems, donut.id, donut.price);
    console.log('DONUT BORTTAGEN: ', donut.name);
    console.log('REMOVED');

    const indexToRemove = cartItems.findIndex(item => item.id === donut.id);
    if (indexToRemove !== -1) {
        if (cartItems[indexToRemove].quantity > 0) {
            cartItems[indexToRemove].quantity--;
            document.getElementById(`item-amount-${donut.id}`).textContent = cartItems[indexToRemove].quantity;
            document.getElementById(`item-total-${donut.id}`).textContent = `Total: ${parseFloat(totalPrice).toFixed(2)} €`;
            if (cartItems[indexToRemove].quantity === 0) {
                cartItems.splice(indexToRemove, 1);
            }
        }
    }
    console.log('VARUKORG: ', cartItems);
}


