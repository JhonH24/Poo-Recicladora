const Cliente = class Cliente {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }

  setApellido(apellido) {
    this.apellido = apellido;
  }

  getDni() {
    return this.dni;
  }

  setDni(dni) {
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
