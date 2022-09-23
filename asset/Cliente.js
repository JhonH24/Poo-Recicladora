const Cliente = class Cliente {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  get Nombre() {
    return this.nombre;
  }

  set Nombre(nombre) {
    this.nombre = nombre;
  }

  get Apellido() {
    return this.apellido;
  }

  set Apellido(apellido) {
    this.apellido = apellido;
  }

  get Dni() {
    return this.dni;
  }

  set Dni(dni) {
    this.dni = dni;
  }

  mostrarDatos() {
    console.log("Datos del Cliente");
    console.log("Nombre: " + this.getNombre());
    console.log("Apellido: " + this.getApellido());
    console.log("Nombre: " + this.getDni());
  }
};
//     Metodos

function botonInicio() {
  console.log("Proceso iniciado: Ingrese un envase");
  console.log("Escaneando envase...");
  let array_de_envases = [envase01, envase02, envase03, envase04];
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
            "Precio: " + arrayDeEnvases[Envase].getPrecio() + "\n" +
            "Peso: " + arrayDeEnvases[Envase].getPeso() + "\n" +
            "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n" +
            "Peso total: " + arrayDeEnvases[Envase].getPesoTotal() + "\n" +
            "-----------------------------------------------------" + "\n");
    }
}

module.exports = Cliente;