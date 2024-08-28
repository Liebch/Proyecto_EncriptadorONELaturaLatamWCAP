let btnEncriptar = document.querySelector(".encriptarBtn");
let btnDesencriptar = document.querySelector(".desencriptarBtn");
let btnCopiar = document.querySelector(".copiarBtn");

let textoUsuario = document.getElementById("texto");
let resul = document.getElementById("resultado");

textoUsuario.addEventListener("input", function () { 

    this.style.height = "auto"; 
    this.style.height = (this.scrollHeight) + "px";

});

arranque ();


function ocultar() {
    let copy_Btn =document.querySelector(".copiarBtn");
    let encriptacion = document.querySelector(".cuandoNoHayNada");
    
    
    copy_Btn.style.display="block";
    encriptacion.style.display = "none";
}

function arranque(){
    
    let ocultar_Btn =document.querySelector(".copiarBtn");
    let espacioResul = document.querySelector(".espacioResulado"); 
    let ptexto = document.querySelector("#resultado");

    ocultar_Btn.style.display= "none";
    espacioResul.style.display= "none";
    ptexto.style.display= "none";



}




btnDesencriptar.addEventListener ("click", function () {

    forzarMinusculas ();

    let desencr= textoUsuario.value;
    let textDesencr = desencriptar (desencr);



    if (desencr==="")  {
        
        alert ("No hay ningun mensaje para desencriptar");
        
    } else {
        
        forzarMinusculas ();
        ocultar ();

        document.querySelector(".cuandoNoHayNada").style.display="none";
        document.querySelector(".espacioResulado").style.display="block"

    resul.textContent = textDesencr;
    resul.style.display="block";
    textoUsuario.value="";
    }
    return false;

})

;

btnEncriptar.addEventListener ("click", function () {

    forzarMinusculas ();

    let encr= textoUsuario.value;
    let textEncr = encriptar (encr) ;




    if (encr==="")  {
        
        alert ("No hay ningun mensaje para encriptar");
        
    } else {
        
        
        ocultar ();

        document.querySelector(".cuandoNoHayNada").style.display="none";
        document.querySelector(".espacioResulado").style.display="block"

        resul.textContent = textEncr;
        resul.style.display="block";
        textoUsuario.value="";
        forzarMinusculas ();
    }
    return false;


});


btnCopiar.addEventListener ("click", function () {
    
    let textocopiado = resul.textContent; 


    
        if (textocopiado) {
            navigator.clipboard.writeText(textocopiado).then(() => {

                alert("Copiado :)");
            }).catch(err => {
                console.error( err);
            });
        } else {
            alert("No hay texto para copiar")
            ;
        }
});




function desencriptar (texto1) {
  let reemplazo = {
    'ai' : 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};
  return texto1.replace(/ai|enter|imes|ober|ufat/g, match => reemplazo [match]);
};
 
function encriptar (texto2) {
    let reemplazo = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
      return texto2.replace(/a|e|i|o|u/g, match => reemplazo [match]);
};

    function forzarMinusculas() {
        let texto = textoUsuario.value;
        
        texto = texto.toLowerCase();
        texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        texto = texto.replace(/[^a-z\s]/g, '');

        textoUsuario.value = texto;
    };