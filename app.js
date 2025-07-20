// Control de Presupuesto - Versión Minimalista
function Movimiento(tipo, nombre, valor){
    //Propiedades
    this.tipo = tipo;
    this.nombre = nombre;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
    // Funciones o metodos
    this.esUningreso = function(){
        return this.tipo === "ingreso";
    }
    this.esUnGasto = function(){
        return this.tipo === "gasto";
    }
}; 
let presupuesto = [];
const mov01 = new Movimiento("gasto", "Comida", 300);
const mov02 = new Movimiento("ingreso", "Freelance", 500);
presupuesto.push(mov01);
presupuesto.push(mov02);
console.log(presupuesto.length);
console.log(presupuesto);
console.log(presupuesto[1].esUningreso());