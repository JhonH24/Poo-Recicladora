const Envase = class Envase {
  constructor(tipoEnvase, capacidad, diametro, valor, material) {
    this.tipoEnvase = tipoEnvase;
    this.capacidad = capacidad;
    this.diametro = diametro;
    this.valor = valor;
    this.material = material;
  }

  getTipoEnvase() {
    return this.tipoEnvase;
  }

  setTipoEnvase(tipoEnvase) {
    this.tipoEnvase = tipoEnvase;
  }

  getCapacidad() {
    return this.capacidad;
  }

  setCapacidad(capacidad) {
    this.capacidad = capacidad;
  }

  getDiametro() {
    return this.diametro;
  }

  setDiametro(diametro) {
    this.diametro = diametro;
  }

  getValor() {
    return this.valor;
  }

  setValor(valor) {
    this.valor = valor;
  }

  getMaterial() {
    return this.material;
  }

  setMaterial(material) {
    this.material = material;
  }

  mostrarDatos() {
    console.log("Datos del envase: ");
    console.log("Tipo: " + this.getTipoEnvase());
    console.log("Capacidad: " + this.getCapacidad());
    console.log("Diametro: " + this.getDiametrio());
    console.log("Material: " + this.getMaterial());
    console.log("Valor Devolucion X Un: $ " + this.valor.toFixed(2));
  }
};

module.exports = Envase;