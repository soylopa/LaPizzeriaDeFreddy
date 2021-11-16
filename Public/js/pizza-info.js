let numero = 1


document.addEventListener("",function(){
    number = numero++;
    numberbefore = number-- 
    let pizzas = eval(`pizza${numero}info`)
    let pizzabefore = eval(`pizza${numberbefore}info`)
    pizzas.classList.toggle("show")
    pizzabefore.classList.toggle("show")
    console.log(numero)
})



// document.querySelector(".img-logo").addEventListener("click",function(){
//     for (let i = 0; i < pizzas.length; i++) {
//         const element = pizzas[i];
//         if element = true
//         console.log(element)
//     } 
// })




// var numero = 1;
// var pizza1 = "Pizza 1";
// var pizza2 = "Pizza 2";
// var pizza3 = "Pizza 3";
// var pizza4 = "Pizza 4";

// function adelantar() {
//     numero ++;
//     if(numero>4)
//         numero = 1;
//         var pizza = document.getElementById("pizza");
//         pizza.src="pizza" + numero + ".png";

// }

// function retroceder() {
//     numero --;
//     if(numero<1)
//         numero = 4;
//         var pizza = document.getElementById("pizza");
//         pizza.src="pizza" + numero + ".png";
// }



let nombrepizza = document.querySelector(".title-pizza");
let descripcion = document.querySelector(".description");
let precio = document.querySelector(".precio")
let img1 = document.querySelector("img-pizza1")




let nombrepizza1 = "<h1>PIZZA PEPPERONI</h1> <h2>PIZZA OF THE MONTH</h2>"
let nombrepizza2 = "<h1>PIZZA SWEET FREDDY</h1> <h2>PIZZA OF THE MONTH</h2>"
let nombrepizza3 = "<h1>PIZZA FIVE NIGHTS</h1> <h2>PIZZA OF THE MONTH</h2>"
let nombrepizza4 = "<h1>PIZZA PARCERITO</h1> <h2>PIZZA OF THE MONTH</h2>"
let descripcion1 = "Mild and creamy cheese, black olives, zesty, pepperoni & our <br>signature Italian-Style Pizza Sauce."
let descripcion2 = "Spiced tomato, onion, parsley, sausage, pickles, mozzarella."
let descripcion3 = "Tomato, olives, artichoke, onion, bacon, mozzarella, cheddar."
let descripcion4 = "Mornay sauce base, mozzarella, crispy bacon, caramelized onion, supreme pineapple."
let precio1 = "$14.99"
let precio2 = "$69.99"
let precio3 = "$42.09"
let precio4 = "$104.99"


function adelantar() {
    numero++
    numberbefore = numero-1
    numberafter = numero+1
    
    let imagenpizza = document.querySelector("img-pizza" + numero);
    let imagenpizzabefore = document.querySelector(`img-pizza${numberbefore}`);
    let imagenpizzaafter = document.querySelector(`img-pizza${numberafter}`);

    if(numero>4){
        numero = 1}
    nombrepizza.innerHTML = eval(`nombrepizza${numero}`);
    descripcion.innerHTML = eval(`descripcion${numero}`);
    precio.innerHTML =  eval(`precio${numero}`);
    // imagenpizza.classList.toggle("position1");
    // imagenpizzabefore.classList.toggle("position1");
    console.log(imagenpizza)
    console.log(nombrepizza)
    console.log(numberafter)

    
}

function retroceder() {
    numero--;
    if(numero<1){
        numero = 4
    }
    nombrepizza.innerHTML = eval(`nombrepizza${numero}`)
    descripcion.innerHTML = eval(`descripcion${numero}`)
    precio.innerHTML =  eval(`precio${numero}`)
}

function togglesizel(){
    document.querySelector(".size-l").classList.toggle("active", true)
    document.querySelector(".size-m").classList.toggle("active") == true ? document.querySelector(".size-m").classList.toggle("active") : console.log("a");
    document.querySelector(".size-s").classList.toggle("active") == true ? document.querySelector(".size-s").classList.toggle("active") : console.log("a");
}
function togglesizes(){
    document.querySelector(".size-s").classList.toggle("active", true)
    document.querySelector(".size-m").classList.toggle("active") == true ? document.querySelector(".size-m").classList.toggle("active") : console.log("a");
    document.querySelector(".size-l").classList.toggle("active") == true ? document.querySelector(".size-l").classList.toggle("active") : console.log("a");
}
function togglesizem(){
    document.querySelector(".size-m").classList.toggle("active", true)
    document.querySelector(".size-s").classList.toggle("active") == true ? document.querySelector(".size-s").classList.toggle("active") : console.log("a");
    document.querySelector(".size-l").classList.toggle("active") == true ? document.querySelector(".size-l").classList.toggle("active") : console.log("a");

}

function togglepizzas(){
    document.querySelector(".position1").classList.toggle("pizza-s", true)
    document.querySelector(".position1").classList.toggle("pizza-m") == true ? document.querySelector(".position1").classList.toggle("pizza-m") : console.log("a");
    document.querySelector(".position1").classList.toggle("pizza-l") == true ? document.querySelector(".position1").classList.toggle("pizza-l") : console.log("a");
}

function togglepizzal(){
    document.querySelector(".position1").classList.toggle("pizza-l", true)
    document.querySelector(".position1").classList.toggle("pizza-m") == true ? document.querySelector(".position1").classList.toggle("pizza-m") : console.log("a");
    document.querySelector(".position1").classList.toggle("pizza-s") == true ? document.querySelector(".position1").classList.toggle("pizza-s") : console.log("a");

}

function togglepizzam(){
    document.querySelector(".position1").classList.toggle("pizza-m", true)
    document.querySelector(".position1").classList.toggle("pizza-s") == true ? document.querySelector(".position1").classList.toggle("pizza-s") : console.log("a");
    document.querySelector(".position1").classList.toggle("pizza-l") == true ? document.querySelector(".position1").classList.toggle("pizza-l") : console.log("a");

}



document.querySelector(".scroll-right").addEventListener("click", adelantar)
document.querySelector(".scroll-left").addEventListener("click", retroceder)
document.querySelector(".q-plus").addEventListener("click",() => {
document.querySelector(".q-number").value++
})
document.querySelector(".q-minus").addEventListener("click",() => {
    document.querySelector(".q-number").value = (document.querySelector(".q-number").value == 1) ? 1 : document.querySelector(".q-number").value-1;
    })

document.querySelector(".size-m").addEventListener("click",togglesizem)
document.querySelector(".size-l").addEventListener("click",togglesizel)
document.querySelector(".size-s").addEventListener("click",togglesizes)
document.querySelector(".size-m").addEventListener("click",togglepizzam)
document.querySelector(".size-l").addEventListener("click",togglepizzal)
document.querySelector(".size-s").addEventListener("click",togglepizzas)