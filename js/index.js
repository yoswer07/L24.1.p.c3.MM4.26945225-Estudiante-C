/* 
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
inserte un estudiante en una posición dada (siendo 0 la primera posición).
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: insertarEstudEnPosicion.
Parámetros: estudiantes (array de objetos estudiante), nombre, semestre, nota y posición.
Retorno: array de objetos estudiante con el estudiante insertado en la posición indicada
(siendo 0 la primera posición).
*/

let estudiantes = [
    {nombre: 'Luis', semestre: 5, nota: 14},
    {nombre: 'Andres', semestre: 6, nota: 17},
    {nombre: 'Ana', semestre: 7, nota: 19},
    {nombre: 'Alejandro', semestre: 6, nota: 12},
    {nombre: 'Maria', semestre: 8, nota: 15},
];

let insertarEstudEnPosicion = (estudiantes, nombre, semestre, nota, posicion) => {
    let nuevoEstudiante = {nombre: nombre, semestre: semestre, nota: nota};
    estudiantes.splice(posicion, 0, nuevoEstudiante);
    return estudiantes;
}

let salida = document.getElementById('salida');
let estudianteAgregado = insertarEstudEnPosicion(estudiantes, 'Pedro', 2, 14, 1);
salida.innerHTML = `Estudiantes: <br>`;
estudianteAgregado.forEach((estudiante) => {
    salida.innerHTML += `Nombre: ${estudiante.nombre} - Semestre: ${estudiante.semestre} - Nota: ${estudiante.nota}<br>`;
});