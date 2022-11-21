//Modularizado de clases
const Cliente = require('./clases/Cliente')
const Envase = require('./clases/Envase')
const Recibo = require('./clases/Recibo')
let valorDevolucionTotal = 0;

//Bloque declarativo
var envase01 = new Envase("Botella", "750 ml", 50, 9, "Vidrio", 68.7)
var envase02 = new Envase("Lata", "330 ml", 50, 9, "Plastico", 68.7)
var envase03 = new Envase("Botella", "1000 ml", 50, 9, "Vidrio", 68.7)
let arrayDeEnvases = [envase01, envase02, envase03]

const cliente1 = new Cliente(0001, "Juan", "Perez");
const recibo1 = new Recibo(cliente1, arrayDeEnvases);


// console.log("Datos del/ de los envase/s: " + "\n");
// for (Envase in arrayDeEnvases) {
//     console.log("Tipo: " + arrayDeEnvases[Envase].getTipo() + "\n" +
//         "Capacidad: " + arrayDeEnvases[Envase].getCapacidad() + "\n" +
//         "Precio: " + arrayDeEnvases[Envase].getValor() + "\n" +
//         "Dimensiones: " + arrayDeEnvases[Envase].getDiametro() + "\n" +
//         "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n" +
//         "-----------------------------------------------------" + "\n");
// }


recibo1.mostrarInfo()


// botonInicio();
// continua();
// cliente1.imprimirRecibo();
// recibo1.mostrarDatos();
// console.log("Se han ingresado " + arrayDeEnvases.length + " envases");