//Modularizado de clases
const Cliente = require("./Cliente");
const Envase = require("./Envase");
const Recibo = require("./Recibo");
let valorDevolucionTotal = 0;

//Bloque Declarativo

const envase01 = new Envase("Botella", "1L", "5x15cm", 50, "Vidrio");
const envase02 = new Envase("Lata", "500ml", "3x7cm", 25, "Aluminio");
const envase03 = new Envase("Botella", "3L", "10x40cm", 100, "Plastico");
const envase04 = new Envase("Botella", "1.5L", "10x20cm", 75, "Plastico");
const cliente1 = new Cliente("Victor", "Stevan", 14658749);
const recibo1 = new Recibo(cliente1, arrayDeEnvases);


//metodos

function botonInicio() {
  console.log("Proceso iniciado: Ingrese un envase");
  console.log("Escaneando envase...");
  let arrayDeEnvases = [envase01, envase02, envase03, envase04];
}

function continua() {
  let confirm = prompt("Desea continuar ingresando envases?(si/no)");

  if (confirm === "si") {
    console.log("Escaneando Envase...");
    pressInicio = true;
  } else {
    console.log("Proceso cancelado");
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
          "Diametro: " + arrayDeEnvases[Envase].getDiametro() + "\n" +
          "Precio: " + arrayDeEnvases[Envase].getValor() + "\n" +
          "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n" +
          "-----------------------------------------------------" + "\n");
  }
}

botonInicio();
continua();
botonImprimir();
cliente1.imprimirRecibo();
recibo1.mostrarDatos();
console.log("Se han ingresado " + arrayDeEnvases.length + " envases");
