
function getcartitem() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartitem = [];
        snapshot.docs.forEach((doc) => {
            cartitem.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateCartItems(cartitem);
        gettotelcost(cartitem)
    })
}

function decreaseCount(itemid) {
    let cartitem = db.collection('cart-items').doc(itemid)
    cartitem.get().then(function (doc) {
        if (doc.exists) {
            if (doc.data().quantity > 1) {
                cartitem.update({
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}
function increaseCount(itemid) {
    let cartitem = db.collection('cart-items').doc(itemid)
    cartitem.get().then(function (doc) {
        if (doc.exists) {
            if (doc.data().quantity > 0) {
                cartitem.update({
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}
function deletitem(itemid) {
    db.collection("cart-items").doc(itemid).delete();
}

function gettotelcost(items) {
    let totelcost = 0
    items.forEach((item) => {
        totelcost += (item.price * item.quantity)
    })
    document.querySelector(".total-cost-number").innerText = numeral(totelcost).format("$0,0.00")
}


function generateCartItems(cartitem) {
    let itemsHTML = "";
    cartitem.forEach((item) => {
        itemsHTML += `
            <div class="cart-item flex items-center pb-4 border-b border-gray-100">
                <div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
                    <img class="w-full h-full object-contain" src="${item.image}">
                </div>
                <div class="cart-item-details flex-grow">
                    <div class="cart-item-title font-bold text-sm text-gray-600">
                    ${item.name}
                    </div>
                    <div class="cart-item-brand text-sm text-gray-400">
                    ${item.make}
                    </div>
                </div>
                <div class="cart-item-counter w-48 flex items-center">
                    <div data-id="${item.id}" class="cart-item-decrease text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-200 mr-2 cursor-pointer">
                        <i class="fas fa-chevron-left fa-xs"></i>
                    </div>
                    <h4 class="text-gray-400">x ${item.quantity}</h4>
                    <div data-id="${item.id}" class="cart-item-increase text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-200 ml-2 cursor-pointer">
                        <i class="fas fa-chevron-right fa-xs"></i>
                    </div>
                </div>
                <div class="cart-item-total-cost w-48 font-bold text-gray-400">
                    ${numeral(item.price * item.quantity).format('$0,0.00')}
                </div>
                <div data-id="${item.id}"  class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `
    })
    document.querySelector(".cart-items").innerHTML = itemsHTML;
    crateEventListener()
}
function crateEventListener() {
    let dcresbtn = document.querySelectorAll(".cart-item-decrease")
    let incresbtn = document.querySelectorAll(".cart-item-increase")
    let deletbtn = document.querySelectorAll(".cart-item-delete")

    dcresbtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            decreaseCount(btn.dataset.id);
        })
    })


    incresbtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            increaseCount(btn.dataset.id)
        })
    })


    deletbtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            deletitem(btn.dataset.id)
        })
    })
}
getcartitem()