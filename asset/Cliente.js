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

module.exports = Cliente;
