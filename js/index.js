const btnSingIn=document.getElementById("sing-in");
const btnSingUp=document.getElementById("sing-up");
const formRegistro=document.querySelector(".register");
const formLogin=document.querySelector(".login")

btnSingIn.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    formRegistro.classList.remove("hide");
})

btnSingUp.addEventListener("click", e =>{
    formRegistro.classList.add("hide");
    formLogin.classList.remove("hide");
})


let nombre=document.getElementById("idNombre");
let apellido=document.getElementById("idApellido");
let email=document.getElementById("idEmail");
let contra=document.getElementById("contra");

let validacion=()=>{
    console.log('Enviando Formulario...')

    if(nombre.value === null || nombre.value ===''){
        alert("Ingrese su nombre")

    }else if(apellido.value === null || apellido.value ===''){
        alert("Ingrese su nombre")

    }else if(contra.value === null || contra.value ===''){
        alert("Ingrese su contraseña")
    }

}
