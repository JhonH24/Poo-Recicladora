class Cliente {
  constructor(nombre, apellido, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
  }

  getNombre() {
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

  getDni() {
    return this.dni;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }

  setDni(dni) {
    this.dni = dni;
  }

  mostrarInfo() {
    let info = `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dni: ${this.dni}`
    console.log(info)
  }

};

module.exports = Cliente;