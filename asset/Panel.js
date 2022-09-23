//Modularizado de clases
const Cliente = require("./Cliente");
const Envase = require("./Envase");
const Recibo = require("./Recibo");
let valorDevolucionTotal = 0;

//Bloque Declarativo

let envase01 = new Envase("Botella", "1L", "5x15cm", 50, "Vidrio");
let envase02 = new Envase("Lata", "500ml", "3x7cm", 25, "Aluminio");
let envase03 = new Envase("Botella", "3L", "10x40cm", 100, "Plastico");
let envase04 = new Envase("Botella", "1.5L", "10x20cm", 75, "Plastico");

//metodos
function botonInicio() {
  console.log("Proceso iniciado: Ingrese un envase");
  console.log("Escaneando envase...");
  let arrayDeEnvases = [envase01, envase02, envase03, envase04];
}

function continua() {
  let confirm = prompt("Desea continuar ingresando envases? (si/no)");
  if (confirm === "si") {
    console.log("Escaneando envase...");
    pressInicio = true;
  } else {
    console.log("Proceso cancelado, gracias por usar nuestra tecnologia.");
    pressInicio = false;
  }
}

function botonImprimir() {
    console.log("Proceso finalizado, imprimiendo recibo...");
    console.log("Datos del recibo: " + "\n" + "Datos del cliente: " + "\n" + "\n" +  "Nombre: " + cliente1.getNombre() + "\n" + "Apellido: " + cliente1.getApellido() + "ID: " + cliente1.getId());

    console.log("Datos del/ de los envase/s: " + "\n");
    for (Envase in arrayDeEnvases) {
        console.log("Tipo: " + arrayDeEnvases[Envase].getTipoEnvase() + "\n" +
            "Capacidad: " + arrayDeEnvases[Envase].getCapacidad() + "\n" +
            "Precio: " + arrayDeEnvases[Envase].getPrecio() + "\n" +
            "Peso: " + arrayDeEnvases[Envase].getPeso() + "\n" +
            "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n" +
            "Peso total: " + arrayDeEnvases[Envase].getPesoTotal() + "\n" +
            "-----------------------------------------------------" + "\n");
    }
}
const cliente1 = new Cliente("Victor", "Stevan", 14658749);
const recibo1 = new Recibo(cliente1, arrayDeEnvases);

botonInicio();
continua();
cliente1.imprimirRecibo();
recibo1.mostrarDatos();
console.log("Se han ingresado " + arrayDeEnvases.length + " envases");
