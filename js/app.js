// montrer la cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        // on spécifie quel typ de class nous voulons basculer (toggle)
        cart.classList.toggle('show-cart')
    });
})();

//ajouter des articles au panier

(function () {
    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {

            if (event.target.parentElement.classList.contains("store-item-icon")) {
                let recuperSrcImg = event.target.parentElement.previousElementSibling.src;
                //console.log(recuperSrcImg);


                const item = {};
                item.img = `${recuperSrcImg}`;

                //console.log(item)

                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name
                //console.log(name);


                let prix = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                item.prix = prix
                //console.log(prix);

                let finalPrix = prix.slice(1).trim();
                item.prix = finalPrix;

                //console.log(finalPrix);
                const cartItem = document.createElement("div");
                cartItem.classList.add(
                    "cart-item",
                    "d-flex",
                    "justify-content-between",
                    "text-capitalize",
                    "my-3",
                );
                cartItem.innerHTML =
                    `
                               <img src="${item.img}" class="img-fluid rounded-circle  " id="item-img" alt="" style="width: 5rem; height: 5rem;">
                            <div class="cart-item-text">

                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.prix}</span>
                            </div>
                            <a href="#" id='cart-item-remove' class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                            </a>
                        </div>
                `
            
                //select cart

                const cart = document.getElementById("cart");
                const total = document.querySelector(".cart-total-container");

                cart.insertBefore(cartItem,total);
                alert("Voiture ajouter a votre panier")

                showTotals();

            };
        });
    });
//    show totals
function showTotals() {
  const total = [];
  const items = document.querySelectorAll('.cart-item-price');

  items.forEach(function(item){
    total.push(parseFloat(item.textContent))
  })
// console.log(total);
// show numbers avec reduce
const totalMoney = total.reduce(function(total, item){
    total += item; 
return total;
},0)
//  toFIxed(2) combien de chiffre apres avoir ete faits dans mon cas 
const finalMoney = totalMoney.toFixed(2)
// console.log(finalMoney);
document.getElementById('cart-total').textContent = finalMoney;
document.querySelector('.item-total').textContent = finalMoney;
document.getElementById('item-count').textContent = total.length;
}
//suprimer l'article ajouter au panier
(function deleteItem(){
    const suprimerItem = document.getElementById('cart');
    //console.log(suprimerItem);
    suprimerItem.addEventListener('click', e =>{
        if(e.target.parentElement.classList.contains('cart-item-remove')){
            const item = e.target.parentElement.parentElement;
            item.parentElement.removeChild(item);
            showTotals();
        }
        
    })
   
})();
})();




// // montrer la cart

// (function(){
//     const cartInfo = document.getElementById('cart-info');
//     const cart = document.getElementById('cart');

//     cartInfo.addEventListener('click', function(){
//         // on spécifie quel typ de class nous voulons basculer (toggle)
//         cart.classList.toggle('show-cart')
//     });
// })();

// // add items to the cart
// (function(){
//     const cartBtn = document.querySelectorAll('.store-item-icon');

//     cartBtn.forEach(function(btn){
//         btn.addEventListener('click', function(event){
//             // console.log(event.target); 

//             if (event.target.parentElement.classList.contains('store-item-icon'))
//             {
//                 let fullPath = event.target.parentElement.previousElementSibling.src;
//                 // pos j'ai utiliser +3 pour pourvoir extraire des caracteres sur de l'image key word slice()
//                 let pos = fullPath.indexOf('img') +3;
//                 // console.log(pos);
//                 let partPath = fullPath.slice(pos);
//                 // console.log(partPath);

//                 const item = {}
                
//                 item.img = `${partPath}`;
//                 // pour afficher le nom propre du gateau selectionner
//                 let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
//                 item.name = name;
//                 // price pour afficher le prix 
//                 let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;

//                 // pour afficher juste le nombre et le key word trim() supprimer les espace vide
//                 let finalPrice = price.slice(1).trim();

//                 // pour les afficher dans le meme accolade
//                 item.finalPrice = finalPrice
//                 // console.log(name);
//                 // console.log(finalPrice);
//                 // console.log(price);
//                 console.log(item);
//             } 

//             const cartItem = document.createElement('div');
//             cartItem.classList.add(
//             'cart-item',
//             'd-flex',
//             'justify-content-between',
//             'text-capitalize',
//             'my-3'
//             );
//             cartItem.innerHTML =
//             `
//                         <!-- cart item -->
                
//                     <img src="${item.img}" class="img-fluid rounded-circle  " id="item-img" alt="" style="width: 5rem; height: 3rem;">
//                     <div class="cart-item-text">

//                     <p id="cart-item-title" class="font-weight-bold mb-0">Voiture</p>
//                     <span> ${item.name}</span>
//                     <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.prix}</span>
//                     </div>
//                     <a href="#" id='cart-item-remove' class="cart-item-remove">
//                     <i class="fas fa-trash"></i>
//                     </a>
//                 </div>
//                 <!--end of  cart item -->
//         `
//             //select cart

//             const cart = document.getElementById("cart");
//             const total = document.querySelector(".cart-total-container");

//             cart.insertBefore(cartItem,total);
//             alert("Voiture ajouter a votre panier")

//             afficherTotal();


//         })
//     })
// })();


