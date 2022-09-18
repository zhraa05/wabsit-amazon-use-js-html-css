
function getCartitem() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let count = 0;
        snapshot.docs.forEach((doc) => {
            count += doc.data().quantity;
        })
        setCartCounter(count);
    })
}

function setCartCounter(count) {
    document.querySelector(".cart-item-number").innerText = count;
}

getCartitem();