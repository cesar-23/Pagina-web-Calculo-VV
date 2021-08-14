const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas= [
    {
        pregunta : "1. Cual es una caracteristica de coordenadas cilindricas?",
        respuestas :{
            a: "El uso de Ro",
            b: "'Z' es constante",
            c: "Z = J*cos(teta)         (J = jacobiano)"
        },
        respuestaCorrecta: "b" 
    }, 
    {
        pregunta : "2. Con que unidad se mide los angulos en cordenadas cilindrcas/esfericas?",
        respuestas :{
            a: "Grado sexagesimal",
            b: "Grado centesimal",
            c: "Radian"
        },
        respuestaCorrecta: "c"
    },
    {
        pregunta : "3. Cual NO es una aplicacion de integrales triples?",
        respuestas :{
            a: "Calculo de superficies de solidos",
            b: "Calculo de centro de masa",
            c: "Calculo de volumenes de solidos"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta : "4. Que define que metodo utilizar(Coordenadas Esfericas, Coordenadas cilindircas?",
        respuestas :{
            a: "No depende de nada, son herramientas practicas",
            b: "Depende de percepcion del problema",
            c: "Depende de la figura del solido"
        },
        respuestaCorrecta: "a"
    }
];

function mostrarTest(){
    const preguntasYrespuestas=[];

    preguntas.forEach((preguntaActual, numeroDePregunta)=>{
        const respuestas = [];
        for(letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
                `<label>
                    <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                </label>`
            );
        }
        preguntasYrespuestas.push(
            `<div class="cuestion"> ${preguntaActual.pregunta} </div>
            <div class="respuestas"> ${respuestas.join('')} </div>
            ` 
        );
    });
    contenedor.innerHTML = preguntasYrespuestas.join('');
}
mostrarTest();

function mostrarResultado(){
    const respuestas= contenedor.querySelectorAll(".respuestas");
    let respuestaCorrecta = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
        const todasLasRespuestas = respuestas[numeroDePregunta];
        const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
        const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas) || {}).value;

        if(respuestaElegida == preguntaActual.respuestaCorrecta){
            respuestaCorrecta++;

            respuestas[numeroDePregunta].style.color = 'blue';
        } else{
            respuestas[numeroDePregunta].style.color = 'red';
        }
    });

    resultadoTest.innerHTML='Usted ha acertado '+respuestaCorrecta+ ' preguntas de un total de '+ preguntas.length;
}

botonRes.addEventListener('click', mostrarResultado);