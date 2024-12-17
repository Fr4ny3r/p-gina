let cont = document.querySelector(".contenedor");
let contl = document.querySelector(".contenedor_login");
let contr = document.querySelector(".botar_register");
let bo = document.querySelector(".cont_luz")
let bos = document.querySelector(".luz")
let beg = document.querySelector(".beg")
let co = document.querySelector(".cover")
let sigi = document.querySelector(".boton_siguiente")
let coreg = document.querySelector(".contenedor_register_contraseña")
let ro = document.querySelector(".fa-sun")
let i = 0;





const sig = ()=> {

    sigi.addEventListener("click", ()=> {
            
            coreg.classList.add("venir_contenedor_register_contraseña")
            coreg.classList.remove("contenedor_register_contraseña")
            contr.classList.remove("contenedor_register");
            contr.classList.add("botar_register");
            
            
    })
}

sig();

const reg = ()=> {
    let registrar = document.querySelector(".pregunta");
    let p = registrar.addEventListener("click", ()=>{
        cont.setAttribute("style", `
        animation-duration: 1s;
        animation-delay: 0s;
        animation-name: contenedor-irse;

        `)


            contl.classList.add("botar_login");
            contr.classList.add("contenedor_register");



    })
}
reg()

const log = ()=> {
    let login = document.querySelector(".preguntaa");
    let pe = login.addEventListener("click", ()=>{
        contl.classList.remove("botar_login")
        contl.classList.add("contenedor_login");
        
        contr.classList.add("botar_register");
        contr.classList.remove("contenedor_register");

        cont.setAttribute("style", `
        
        animation: both;
        animation-duration: 1s;
        animation-delay: 0s;
        animation-name: contenedor-venirse;


        
        `)


    })
}
log()

const regc = ()=> {
    let login2 = document.querySelector(".preguntaaa");
    let pe = login2.addEventListener("click", ()=>{
        coreg.classList.add("contenedor_register_contraseña");
        coreg.classList.remove("venir_contenedor_register_contraseña");
        contl.classList.remove("botar_login")
        contl.classList.add("contenedor_login");


    })
}
regc()

const itemLuz = ()=> {
bo.addEventListener("click", ()=>{
    i++;
    if (i == 1){
        bos.classList.remove("lulaa");
        bos.classList.add("lula");
        bos.style.animationName = "xd";

        bo.classList.add("cont_luz2");
        bo.classList.remove("cont_luz1");
        bo.style.animationName = "luza";
        cont.style.animationName = "luza";
        contl.style.animationName = "luza";
        cont.style.backgroundColor = "#00000088";

        
        beg.classList.add("foto")
        beg.classList.remove("fotoa")
        beg.style.animationName = "blu";
        ro.style.animationName = "";
        ro.style.animationName = "ro";


 
       
    }else if (i == 2){
        bos.classList.remove("lula");
        bos.classList.add("lulaa");
        bos.style.animationName = "f";


        bo.classList.add("cont_luz2");
        bo.classList.remove("cont_luz1");
        bo.style.animationName = "lu";
        cont.style.animationName = "lu";
        contl.style.animationName = "lu";
        cont.style.backgroundColor = "";


        beg.classList.add("fotoa")
        beg.classList.remove("foto")
        beg.style.animationName = "blua";

        ro.style.animationName = "";
        ro.style.animationName = "ra";


        


        i = 0;
    }

}) 
    

}


itemLuz();


