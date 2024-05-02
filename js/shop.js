// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = []; 
var total = 0; 

// Exercise 1
    // 1. Loop to get the item to add to the cart
    // 2. Add found product to the cart array

    function buy(id) {
        let product = products.find(item => item.id === id);

        if (product) { 
    
            let findProduct = cart.find(item => item.id === id);
    
            if (findProduct) {
                findProduct.quantity += 1;                

            } else {
                product.quantity = 1;
                cart.push(product);
            }            
    
            total += product.price; 
            console.log("Producto agregado:", product);
    
            printCart(); 
            countProduct(); 
            calculateTotal (); 
        } 
    }
    function countProduct() {
        countCart = cart.length;
        document.getElementById("count_product").innerHTML = countCart;
    }

// Exercise 2
   // Clean the cart

function cleanCart() { 
        cart = []; // Reinicia el carrito vaciándolo
        total = 0; // Reinicia el total a cero
        console.log ("carrito vacio")
        countProduct(); // Actualiza la cantidad de productos mostrados
        printCart(); // Vuelve a imprimir el carrito (probablemente quieras borrar los elementos del DOM también)
    }
    

// Exercise 3
   // Calculate the total
function calculateTotal() {
    total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity; // Multiplica el precio por la cantidad de cada producto
    }
    console.log("El precio total es de $" + total);
    applyPromotionsCart(); // Aplica promociones después de calcular el total
}

// Exercise 4
    // Implement promotions

function applyPromotionsCart() {
    //  Almacenar la cantidad total de cada producto con una oferta.
    let productQuantitiesWithOffer = {};
    // Calcular la cantidad total de cada producto con una oferta.
    cart.forEach(product => {
        if (product.offer) {
            productQuantitiesWithOffer[product.id] = productQuantitiesWithOffer[product.id] || 0;
            productQuantitiesWithOffer[product.id] += product.quantity;
        }
    });

    // Aplicar descuentos en base de la cantidad total de productos en oferta 
    cart.forEach(product => {
        if (product.offer) {
            var quantityWithOffer = productQuantitiesWithOffer[product.id] || 0;
            if (quantityWithOffer >= product.offer.number) {
                product.discountPercent = product.offer.percent;
            } else {
                product.discountPercent = 0;
            }
        } else {
            product.discountPercent = 0;
        }
    });
}


// Exercise 5
     // Fill the shopping cart modal manipulating the shopping cart dom

function printCart() {

    // Aplicar promociones antes de imprimir el carrito
    applyPromotionsCart();

    let printedCart = [];
    let totalDiscount = 0; // Variable para almacenar el descuento total

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];

        // Calcular el subtotal con descuento
        let subtotalWithDiscount = product.price * product.quantity * (1 - (product.discountPercent / 100));

        // Calcular el descuento para este producto
        let discount = (product.price * product.quantity) - subtotalWithDiscount;
        totalDiscount += discount; // Añadir el descuento al total

        printedCart.push(
            `<tr>
                <th>${product.name}</th>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>${discount.toFixed(2)}</td>
                <td>${subtotalWithDiscount.toFixed(2)}</td>
                <td><a type="button" onclick="removeFromCart(${product.id})"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
            </tr>`
        );
    }
    document.getElementById("cart_list").innerHTML = printedCart.join("");

    // Restar el descuento total del precio total antes de mostrarlo
    document.getElementById("total_price").innerHTML = (total - totalDiscount).toFixed(2);
}

// ** Nivell II **

// Exercise 7
      // Implement removing items from cart
function removeFromCart(id) {
        // Buscar el índice del producto en el carrito
        const index = cart.findIndex(product => product.id === id);
    
        if (index !== -1) {
            if (cart[index].quantity > 1) {
                // Decrementar la cantidad si es mayor que 1
                cart[index].quantity -= 1;
            } else {
                // Si la cantidad es 1, eliminar el producto del carrito
                cart.splice(index, 1);
            }
            calculateTotal();
            printCart();
            // Actualizar la cantidad de productos mostrados
            countProduct();
            console.log("Producto eliminado del carrito");
        } else {
            console.log("El producto no está en el carrito");
        }
    }
    
function open_modal() {
    printCart();
}