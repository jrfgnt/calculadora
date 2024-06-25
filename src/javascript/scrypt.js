var botoes = document.querySelectorAll('.botoes')
var visor = document.getElementById('visor')
var btnClicado
var arrayVisor = []
var vlrAtual
var resp
var operadorAtual
var verificaFloat = false
var ultimoDigitado 
var numeroAnterior 
var numeroAtual
var vlrAbsoluto
var ultimoOperador = ''

const calculadora = {
    soma: function(a, b) {
        return a+b
    }, 

    subtracao: function(a,b) {
        return a-b
    }, 

    divisao: function (a,b) {
        return a/b
    }, 

    multiplicao: function(a,b) {
        return a*b
    }
    
}

function clickInic (button) {

   btnClicado = button.value
   if (btnClicado == 'C') {
    limpaVisor()
   } else {

   let utmDig = verificaUltimoDigitado()

   if(isNaN(utmDig) == true) {
    ultimoOperador = utmDig
    }

        if (+btnClicado >= 0) {
            arrayVisor.push(btnClicado)
            alteraVisor()
        } else if (btnClicado === '.'){
            const numero = Number(visor.innerText)
            verificaFloat =  Number.isInteger(numero)

            if (verificaFloat == true) {
                arrayVisor.push(btnClicado)
                alteraVisor()
            } else {
                alert('SOMENTE UM PONTO PARA CADA NÚMERO FLUTUANTE')
            }
            
                 
    
        }else if (btnClicado === '<') {

            apagaNumero()
            
        } else if (btnClicado === '=') {
            
            if(numeroAnterior == null) {
                visualizaNumeroAnterior()
                vlrAtual = numeroAnterior
            }  else {
                visualizaNumeroAtual()
            }
            
            
            defineOperacao() 
            imprimeResultaoFinal()
            numeroAnterior = 0
            numeroAtual = 0
            vlrAtual = 0
            
            
         
            
        }else {
                    
            operadorAtual = btnClicado  

            if(numeroAnterior == null) {
                visualizaNumeroAnterior()
                vlrAtual = numeroAnterior
            }  else {
                visualizaNumeroAtual()
            }
            
        
                    arrayVisor.push(btnClicado)
                    alteraVisor()
                    defineOperacao()
                    
            
            
        }
   }
}


function defineOperacao () {
    const numAtual = parseFloat(numeroAtual)
    const vAtual = parseFloat(vlrAtual)
  
    switch (ultimoOperador) {

        case '+': 
        
          
            vlrAtual = calculadora.soma(vAtual, numAtual)

                       
                
        break;
        case '-' :

        calculadora.subtracao()

        break;
        case 'X' : 
        
        calculadora.multiplicao()

        break; 
        case '/' : 

        calculadora.divisao()

        break;


    }






}



const apagaNumero = () => {
    arrayVisor.pop()
    alteraVisor()
}

function limpaVisor(){
    arrayVisor.length = 0
    vlrAtual = 0
    numeroAtual = 0
    numeroAnterior = 0
    visor.innerText = ''
}

const alteraVisor = () => {

    visor.innerText = `${arrayVisor.join('')}`
 

}

function visualizaNumeroAtual () {

    if (numeroAnterior == null) {
        let num = Number(visor.innerText)
        numeroAnterior = num
    } else {
        let textoVisor = visor.innerText
        if (ultimoOperador !== null) {
            let indiceOperador = textoVisor.lastIndexOf(ultimoOperador)
            let num2 = textoVisor.substring(indiceOperador)
            numeroAtual = Number(num2)

            
        }
        
        
       
    }
    
}

function visualizaNumeroAnterior() {

    const num = Number(visor.innerText)
    numeroAnterior = num
    
    
    
}

function verificaUltimoDigitado (){
    ultimoDigitado = arrayVisor[arrayVisor.length -1] 

    return(ultimoDigitado)
}

function imprimeResultaoFinal(){
    visor.innerText = `${vlrAtual}` 
    arrayVisor.length = 0
    arrayVisor.push(vlrAtual)
}

botoes.forEach(function(botao) {
    botao.addEventListener('click', function addEvento(){
        clickInic(botao)
    })
})


                