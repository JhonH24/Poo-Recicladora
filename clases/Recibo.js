const Recibo = class Recibo {
    constructor(cliente, arrayDeEnvases) {
        this.cliente = cliente;
        this.arrayDeEnvases = arrayDeEnvases;
    }

    getCliente() {
        return this.cliente;
    }

    setCliente(cliente) {
        this.cliente = cliente
    }

    getArrayDeEnvases() {
        return this.arrayDeEnvases;
    }

    setArrayDeEnvases(arrayDeEnvases) {
        this.arrayDeEnvases = arrayDeEnvases;
    }

    mostrarInfo() {
        let info = `Cliente: ${this.cliente}, Envases: ${this.arrayDeEnvases}`
        console.log(info)
    }

    mostrarDatos() {
        console.log("Datos del recibo: ");
        this.cliente.mostrarInfo();
        console.log("-----------------------------------------------------");
        console.log("Datos del/ de los envase/s: ");
        for (let i = 0; i < this.arrayDeEnvases.length; i++) {
            this.arrayDeEnvases[i].mostrarInfo();
            console.log("-----------------------------------------------------");
        }
    }

}
module.exports = Recibo;