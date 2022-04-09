console.log("////////boneco.js///////////\n")

console.log("Boneco completo");


let forca = {
    tipohaste: "madeira",
    tipocorda: "nylon",
};

let boneco = {
    membros: [
        "cabeça", 
        "Braço Direito", 
        "Braço Esquerdo", 
        "Tronco", 
        "Perna Direita", 
        "Perna Esquerda"
    ],
    nome: "Chucky",
    altura: 1.52,
    peso: 58
};

console.log(boneco);
console.log(forca);

//Exportação via CommonJS
module.exports = [boneco, forca];