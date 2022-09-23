const Envase = class Envase {
  constructor(tipoEnvase, capacidad, diametro, valor, material) {
    this.tipoEnvase = tipoEnvase;
    this.capacidad = capacidad;
    this.diametro = diametro;
    this.valor = valor;
    this.material = material;
  }

  get TipoEnvase() {
    return this.tipoEnvase;
  }

  set TipoEnvase(tipoEnvase) {
    this.tipoEnvase = tipoEnvase;
  }

  get Capacidad() {
    return this.capacidad;
  }

  set Capacidad(capacidad) {
    this.capacidad = capacidad;
  }

  get Diametro() {
    return this.diametro;
  }

  set Diametro(diametro) {
    this.diametro = diametro;
  }

  get Valor() {
    return this.valor;
  }

  set Valor(valor) {
    this.valor = valor;
  }

  get Material() {
    return this.material;
  }

  set Material(material) {
    this.material = material;
  }

  mostrarDatos() {
    console.log("Datos del envase: ");
    console.log("Tipo: " + this.getTipoEnvase);
    console.log("Capacidad: " + this.getCapacidad());
    console.log("Diametro: " + this.getDiametrio());
    console.log("Material: " + this.getMaterial());
    console.log("Valor Devolucion X Un: $ " + this.valor.toFixed(2));
  }
};

module.exports = Envase;