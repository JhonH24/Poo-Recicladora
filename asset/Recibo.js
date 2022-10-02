const Recibo = class Recibo {
    constructor(cliente, arrayDeEnvases){
        this.cliente = cliente;
        this.arrayDeEnvases = arrayDeEnvases;
    }

    get Cliente() {
        return this.cliente;
    }

    set Cliente(cliente) {
        this.cliente = cliente
    }

    get ArrayDeEnvases() {
        return this.arrayDeEnvases;
    }

    set ArrayDeEnvases(arrayDeEnvases) {
        this.arrayDeEnvases = arrayDeEnvases;
    }

    mostrarDatos(){
        console.log("Datos del recibo: ");
        this.cliente.mostrarDatos();
        console.log("-----------------------------------------------");
        console.log("Datos del/ de los envase/s: ");
        for (let i = 0; i < this.arrayDeEnvases.length; i++){
            this.arrayDeEnvases[i].mostrarDatos();
            console.log("--------------------------------------------")
        }
    }
}

module.exports = Recibo;