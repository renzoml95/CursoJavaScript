var accion = {
 on : document.getElementById('on'),
 sign : document.getElementById('sign'),
 raiz : document.getElementById('raiz'),
 dividido : document.getElementById('dividido'),
 por : document.getElementById('por'),
 punto :document.getElementById('punto'),
 igual : document.getElementById('igual'),
 menos : document.getElementById('menos'),
 mas : document.getElementById('mas'),
display: document.getElementById('display')
}
var numeros = {
  cero : document.getElementById('0'),
  uno : document.getElementById('1'),
  dos : document.getElementById('2'),
  tres : document.getElementById('3'),
  cuatro : document.getElementById('4'),
  cinco : document.getElementById('5'),
  seis : document.getElementById('6'),
  siete : document.getElementById('7'),
  ocho : document.getElementById('8'),
  nueve : document.getElementById('9')
}

var resultado ="0";

var calculadora = {
  init: function() {
    this.agregarNumeros();//Agrega numeros y limite de numeros
    this.clickON();//Boton ON
    this.teclaPunto();
    this.signo();
    //this.operar(Parametro) Inicializaco en HTMl con onclick , para variar
    this.raiz();
  },
  clickON: function(){
    accion.on.addEventListener("click",function(){
      accion.display.innerHTML= 0
    })
  },
  agregarNumeros: function () {

      numeros.cero.onclick = function() {
        if (accion.display.innerHTML==resultado) {
          accion.display.innerHTML="0"
        }else {if (accion.display.innerHTML.length >= "8") {
              accion.display.innerHTML
            }else {
          if (accion.display.innerHTML=="0") {
            accion.display.innerHTML=0
          }else {accion.display.innerHTML+=0}}}}


      numeros.uno.onclick = function() {
        if (accion.display.innerHTML==resultado) {
          accion.display.innerHTML="1"
        }else {if (accion.display.innerHTML.length >= "8") {
            accion.display.innerHTML
          }else {
        if (accion.display.innerHTML=="0") {
          accion.display.innerHTML=1
        }else {accion.display.innerHTML+=1}}}}

      numeros.dos.onclick = function() {
        if (accion.display.innerHTML==resultado) {
          accion.display.innerHTML="2"
        }else {if (accion.display.innerHTML.length >= "8") {
            accion.display.innerHTML
          }else {
        if (accion.display.innerHTML=="0") {
          accion.display.innerHTML=2
        }else {accion.display.innerHTML+=2}}}}

      numeros.tres.onclick = function() {
        if (accion.display.innerHTML==resultado) {
          accion.display.innerHTML="3"
        }else {if (accion.display.innerHTML.length >= "8") {
            accion.display.innerHTML
          }else {
        if (accion.display.innerHTML=="0") {
          accion.display.innerHTML=3
        }else {accion.display.innerHTML+=3}}}}

        numeros.cuatro.onclick = function() {
          if (accion.display.innerHTML==resultado) {
            accion.display.innerHTML="4"
          }else {if (accion.display.innerHTML.length >= "8") {
              accion.display.innerHTML
            }else {
          if (accion.display.innerHTML=="0") {
            accion.display.innerHTML=4
          }else {accion.display.innerHTML+=4}}}}

        numeros.cinco.onclick = function() {
          if (accion.display.innerHTML==resultado) {
            accion.display.innerHTML="5"
          }else {if (accion.display.innerHTML.length >= "8") {
              accion.display.innerHTML
            }else {
          if (accion.display.innerHTML=="0") {
            accion.display.innerHTML=5
          }else {accion.display.innerHTML+=5}}}}

        numeros.seis.onclick = function() {
          if (accion.display.innerHTML==resultado) {
            accion.display.innerHTML="6"
          }else {if (accion.display.innerHTML.length >= "8") {
              accion.display.innerHTML
            }else {
          if (accion.display.innerHTML=="0") {
            accion.display.innerHTML=6
          }else {accion.display.innerHTML+=6}}}}

        numeros.siete.onclick = function() {
          if (accion.display.innerHTML==resultado) {
            accion.display.innerHTML="7"
          }else {if (accion.display.innerHTML.length >= "8") {
              accion.display.innerHTML
            }else {
          if (accion.display.innerHTML=="0") {
            accion.display.innerHTML=7
          }else {accion.display.innerHTML+=7}}}}

          numeros.ocho.onclick = function() {
            if (accion.display.innerHTML==resultado) {
              accion.display.innerHTML="8"
            }else {if (accion.display.innerHTML.length >= "8") {
                accion.display.innerHTML
              }else {
            if (accion.display.innerHTML=="0") {
              accion.display.innerHTML=8
            }else {accion.display.innerHTML+=8}}}}

          numeros.nueve.onclick = function() {
            if (accion.display.innerHTML==resultado) {
              accion.display.innerHTML="9"
            }else {if (accion.display.innerHTML.length >= "8") {
                accion.display.innerHTML
              }else {
                if (accion.display.innerHTML=="0") {
                  accion.display.innerHTML=9
                }else{accion.display.innerHTML+=9}}}}
        },
        teclaPunto: function () {
          accion.punto.onclick = function() {
            if (accion.display.innerHTML.length >= "7") {
                accion.display.innerHTML
              }else {
            var puntos = accion.display.innerHTML
            var n= puntos.includes(".")
            if(n){
              accion.display.innerHTML
            }else {
              accion.display.innerHTML+="."
            }
          }}
        },
        signo: function () {
        accion.sign.onclick = function () {
          var x = accion.display.innerHTML
          x = x * -1
          accion.display.innerHTML = x
        }
      },
      operar: function(oper) {
            var xi = accion.display.innerHTML
            var x = parseFloat(xi)
            if (oper!="no") {
              accion.display.innerHTML="";
            }
            accion.igual.onclick= function(){
              var yi = accion.display.innerHTML;
              var y = parseFloat(yi)
              var resultado1 = eval (x + oper + y)
              var resultado2 = resultado1.toString()
              var resultado3 = resultado2.substr(0,8);
              resultado = parseFloat(resultado3)
              accion.display.innerHTML = resultado;
            }
          },
        raiz: function(){
          accion.raiz.onclick = function () {
          var xi = accion.display.innerHTML
          var x = parseFloat(xi)
          x = Math.sqrt(x);
          var resultado1 = x
          var resultado2 = resultado1.toString()
          var resultado3 = resultado2.substr(0,8);
          resultado = parseFloat(resultado3)
          accion.display.innerHTML = resultado;
          }
        }

}


window.addEventListener("load",function(){

  calculadora.init();
})



//Achicar accion


//on
accion.on.addEventListener("mousedown",function() {
accion.on.style.borderRadius="40%";
})
accion.on.addEventListener("mouseup",function() {
accion.on.style.borderRadius="0%";
})
accion.on.addEventListener("mouseleave",function() {
accion.on.style.borderRadius="0%";
})

//sign
accion.sign.addEventListener("mousedown",function() {
accion.sign.style.borderRadius="40%";
})
accion.sign.addEventListener("mouseup",function() {
accion.sign.style.borderRadius="0%";
})
accion.sign.addEventListener("mouseleave",function() {
accion.sign.style.borderRadius="0%";
})
//raiz
accion.raiz.addEventListener("mousedown",function() {
accion.raiz.style.borderRadius="40%";
})
accion.raiz.addEventListener("mouseup",function() {
accion.raiz.style.borderRadius="0%";
})
accion.raiz.addEventListener("mouseleave",function() {
accion.raiz.style.borderRadius="0%";
})
//dividido
accion.dividido.addEventListener("mousedown",function() {
accion.dividido.style.borderRadius="40%";
})
accion.dividido.addEventListener("mouseup",function() {
accion.dividido.style.borderRadius="0%";
})
accion.dividido.addEventListener("mouseleave",function() {
accion.dividido.style.borderRadius="0%";
})
//por
accion.por.addEventListener("mousedown",function() {
accion.por.style.borderRadius="40%";
})
accion.por.addEventListener("mouseup",function() {
accion.por.style.borderRadius="0%";
})
accion.por.addEventListener("mouseleave",function() {
accion.por.style.borderRadius="0%";
})
//punto
accion.punto.addEventListener("mousedown",function() {
accion.punto.style.borderRadius="40%";
})
accion.punto.addEventListener("mouseup",function() {
accion.punto.style.borderRadius="0%";
})
accion.punto.addEventListener("mouseleave",function() {
accion.punto.style.borderRadius="0%";
})
//igual
accion.igual.addEventListener("mousedown",function() {
accion.igual.style.borderRadius="40%";
})
accion.igual.addEventListener("mouseup",function() {
accion.igual.style.borderRadius="0%";
})
accion.igual.addEventListener("mouseleave",function() {
accion.igual.style.borderRadius="0%";
})
//menos
accion.menos.addEventListener("mousedown",function() {
accion.menos.style.borderRadius="40%";
})
accion.menos.addEventListener("mouseup",function() {
accion.menos.style.borderRadius="0%";
})
accion.menos.addEventListener("mouseleave",function() {
accion.menos.style.borderRadius="0%";
})
//mas
accion.mas.addEventListener("mousedown",function() {
accion.mas.style.borderRadius="40%";
})
accion.mas.addEventListener("mouseup",function() {
accion.mas.style.borderRadius="0%";
})
accion.mas.addEventListener("mouseleave",function() {
accion.mas.style.borderRadius="0%";
})
//cero
numeros.cero.addEventListener("mousedown",function() {
numeros.cero.style.borderRadius="40%";
})
numeros.cero.addEventListener("mouseup",function() {
numeros.cero.style.borderRadius="0%";
})
numeros.cero.addEventListener("mouseleave",function() {
numeros.cero.style.borderRadius="0%";
})
//uno
numeros.uno.addEventListener("mousedown",function() {
numeros.uno.style.borderRadius="40%";
})
numeros.uno.addEventListener("mouseup",function() {
numeros.uno.style.borderRadius="0%";
})
numeros.uno.addEventListener("mouseleave",function() {
numeros.uno.style.borderRadius="0%";
})
//dos
numeros.dos.addEventListener("mousedown",function() {
numeros.dos.style.borderRadius="40%";
})
numeros.dos.addEventListener("mouseup",function() {
numeros.dos.style.borderRadius="0%";
})
numeros.dos.addEventListener("mouseleave",function() {
numeros.dos.style.borderRadius="0%";
})
//tres
numeros.tres.addEventListener("mousedown",function() {
numeros.tres.style.borderRadius="40%";
})
numeros.tres.addEventListener("mouseup",function() {
numeros.tres.style.borderRadius="0%";
})
numeros.tres.addEventListener("mouseleave",function() {
numeros.tres.style.borderRadius="0%";
})
//cuatro
numeros.cuatro.addEventListener("mousedown",function() {
numeros.cuatro.style.borderRadius="40%";
})
numeros.cuatro.addEventListener("mouseup",function() {
numeros.cuatro.style.borderRadius="0%";
})
numeros.cuatro.addEventListener("mouseleave",function() {
numeros.cuatro.style.borderRadius="0%";
})
//cinco
numeros.cinco.addEventListener("mousedown",function() {
numeros.cinco.style.borderRadius="40%";
})
numeros.cinco.addEventListener("mouseup",function() {
numeros.cinco.style.borderRadius="0%";
})
numeros.cinco.addEventListener("mouseleave",function() {
numeros.cinco.style.borderRadius="0%";
})
//seis
numeros.seis.addEventListener("mousedown",function() {
numeros.seis.style.borderRadius="40%";
})
numeros.seis.addEventListener("mouseup",function() {
numeros.seis.style.borderRadius="0%";
})
numeros.seis.addEventListener("mouseleave",function() {
numeros.seis.style.borderRadius="0%";
})
//siete
numeros.siete.addEventListener("mousedown",function() {
numeros.siete.style.borderRadius="40%";
})
numeros.siete.addEventListener("mouseup",function() {
numeros.siete.style.borderRadius="0%";
})
numeros.siete.addEventListener("mouseleave",function() {
numeros.siete.style.borderRadius="0%";
})
//ocho
numeros.ocho.addEventListener("mousedown",function() {
numeros.ocho.style.borderRadius="40%";
})
numeros.ocho.addEventListener("mouseup",function() {
numeros.ocho.style.borderRadius="0%";
})
numeros.ocho.addEventListener("mouseleave",function() {
numeros.ocho.style.borderRadius="0%";
})
//nueve
numeros.nueve.addEventListener("mousedown",function() {
numeros.nueve.style.borderRadius="40%";
})
numeros.nueve.addEventListener("mouseup",function() {
numeros.nueve.style.borderRadius="0%";
})
numeros.nueve.addEventListener("mouseleave",function() {
numeros.nueve.style.borderRadius="0%";
})
