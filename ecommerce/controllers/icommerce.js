const opcion__pago = document.getElementById("opcion__pago")
const pedidos =document.getElementById("pedidos")
const pedido =document.getElementById("pedido")
const Subcribite = document.getElementById("Subcribite")
const fomulario = document.getElementById("fomulario")
const escripcion = document.getElementById("escripcion")
const carro__compras= document.getElementById("carro__compras")
const container__modal = document.getElementById("container__modal")
const producto__modal = document.getElementById("producto__modal")
const bienvenida =document.getElementById("bienvenida")
const mensaje__nombre= document.getElementById("mensaje__nombre")
const direccion= document.getElementById("direccion")
const enviar= document.getElementById("enviar")
const ver =document.getElementById("ver")
const descuentos = document.getElementById("descuento")
const container__fondo = document.getElementById("container__fondo")
const container__ecomer__titulo = document.getElementById("container__ecomer__titulo")
const Ver__descuentos = document.getElementById("Ver__descuentos")
const boton = document.getElementById("btnboton")
const descuentosLocura = document.getElementById("descuentos-locura")
const verdescripcion = document.getElementById("verdescripcion")
const descripcion = document.getElementById("descripcion")

setTimeout(() => {
  descuentosLocura.textContent="Descuentos de locura"
}, 2100);


const mensaje=setTimeout(() => {
  bienvenida.innerText ="¡ Bienvenidos/a !"
  new TypeIt("#bienvenida", {
      strings: `Compra hoy y lleva descuento del fin de mes`,
 }).go();

}, 2000);


// pedido
pedidos.addEventListener("click",(e)=>{
  e.preventDefault()
  confirm("Para pedidos, click en aceptar y click donde apunta la mano")
if (pedido.style.display==="none") {
  pedido.style.display="inline"
  

} else {
  pedido.style.display="none"

}
 
})


 // // boton de producto



function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}



// almacenar la lista de productos 
// const productos__guardados = []
// Api
// const container__ecomer =document.getElementById("container__ecomer")
// const reducir = producto.splice(1,12)
// reducir.forEach(e =>{
//     const contenido_carrito=document.createElement("article")
//   contenido_carrito.classList.add("contenedor__producto")
//   contenido_carrito.innerHTML+=`<h2>${e.title} </h2>
//   <img src="${e.images} " alt="" class="imagen_ecomen">
//   <p class="descripcion">${e.description} </p>
//      <p class="estrellas"> ✨⭐✨⭐✨</p>
//   <h1> $  ${e.price}</h1>
//   <button class="compra" id="compra">Comprar</button>
 
//   `
  

//     const agregar  = document.createElement("button")
//     agregar.classList.add("agregar")
//     agregar.innerText = "Agregar"
  
//     console.log(contenido_carrito)
//     agregar.addEventListener("click",(event)=>{
//       event.preventDefault()
//       productos__guardados.push(e.title,
//         e.images,
//         e.description,
//         e.price)
      
        
//         contenido_carrito.appendChild(agregar)
//          container__ecomer.append(contenido_carrito)
  
        
//       }) 
 
      
// })
// const titulo__modal =document.createElement("h1")
// titulo__modal.innerText= "produto"
// carro__compras.addEventListener("click",(ev)=>{
//   ev.preventDefault()
 
//   productos__guardados.forEach(modal =>{
  

//     producto__modal.innerHTML =`<h2>${modal.title} </h2> 
//     <img src="${modal.images} " alt="" class="imagen_ecomen"> 
//     <p class="descripcion">${modal.description} </p>
//     <h1> $  ${modal.price}</h1>
//     <button class="compra" id="compra">Comprar</button>
//     `
    

//     container__modal.appendChild(titulo__modal)
  
//   })

// })
// boton de producto

ver.addEventListener("click" ,() =>{

  if(container__fondo.style.display==="none") {
    container__fondo.style.display= "inline"

    ver.style.display = "none"
  } else {
    container__fondo.style.display= "none"
   
  }

}) 


