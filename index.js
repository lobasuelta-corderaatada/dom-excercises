// Paso 1 y 2
let titulo = document.getElementById("miTitulo");
let tituloPrincipal = "Frutas";
titulo.textContent = tituloPrincipal;

// Paso 3
let hf = document.querySelectorAll(".hf");
for(let i=0; i<hf.length; i++) {
    hf[i].style.backgroundColor = "orange";
}

// Paso 4
let pes = document.querySelector("footer p");
pes.textContent = "Jadranka Romeo - Cohort 5";

// Paso 5
let contenedor = document.getElementById("contenedor");

// Paso 6
function generaCard(cardData){
    let result = `<div class="card"> <img src="${cardData.foto}"> <p>${cardData.nombre}</p> <p>${cardData.descripcion}</p> </div>`;
    return result;
}

// Paso 7 y 8
function generarCards(cardsDatas){
    for(let i=0; i<cardsDatas.length; i++){
        let card = generaCard(cardsDatas[i]);
        contenedor.innerHTML += card;        
    }
}
generarCards(frutas);

// Paso 9
let lista = document.getElementById("lista");
let listaPrincipal = "Frutas Dulces";
lista.textContent = listaPrincipal;

// Paso 10
function generaLista(listaDeFrutas){
    let result = [];
    for(let i=0; i<listaDeFrutas.length; i++){
        if(listaDeFrutas[i].esDulce==true){
            let elemento = document.createElement("p");
            elemento.innerText = listaDeFrutas[i].nombre;
            result.push(elemento);
        }
    }
    return result;
}

// Paso 11
let elementos = generaLista(frutas);
for (let i=0; i<elementos.length; i++){
    lista.appendChild(elementos[i]);
}
