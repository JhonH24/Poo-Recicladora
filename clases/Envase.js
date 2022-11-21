class Envase {
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

  mostrarInfo() {
    let info = `Tipo_Envase: ${this.tipoEnvase}, Capacidad: ${this.capacidad}, Diametro: ${this.diametro}, Valor: ${this.valor}, Material: ${this.material}`
    console.log(info)
  }
};

module.exports = Envase;