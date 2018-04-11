// Accedo al servicio de la base de datos
var database = firebase.database();

// Accedo a un documento
var ref = database.ref('encuesta');

// Eventos

ref.on('value', function(ss) { // cada vez que ocurra un cambio la variable(ss) tendra un valor distinto
    // codigo que quieras realizar
    var encuesta = ss.val(); // El método val() devuelve el valor de lo que hay en la encuesta.
    // Si no existe la referencia encuesta te devulve "null".
    console.log(encuesta);
    getId('preg').innerHTML = encuesta.pregunta;
    getId('desc').innerHTML = encuesta.descripcion;
});

// Trabajando con colecciones

var refRespuestas = database.ref('respuestas');

refRespuestas.on('child_added', function(ss) {
    var respuesta = ss.val();
    var item = document.createElement('li');
    item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '">' + respuesta.respuesta;
    getId('lista').appendChild(item);
});

getId('votar').addEventListener('click', function() {
    
});

// refRespuestas.on('child_removed', function(ss) {
//     var respuesta = ss.val();
//     var item = document.createElement('li');
//     item.innerHTML = '<input name="respuesta" type="radio" value="' + respuesta.valor + '">' + respuesta.respuesta;
//     getId('lista').appendChild(item);
// });