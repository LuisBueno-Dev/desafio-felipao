let nome = "Luis"
let nivel = ""
let xp = 9999;

let niveis = ["Ferro","Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

console.log("Os niveis disponiveis são")
for (let i = 0; i < niveis.length; i++) {
    console.log(niveis[i])
}

if (xp <= 1000) {
    nivel = niveis[0]
} else if (xp >= 1001 && xp <= 2000) {
    nivel = niveis[1]
} else if (xp >= 2001 && xp <= 5000) {
    nivel = niveis[2]
} else if (xp >= 5001 && xp <= 7000) {
    nivel = niveis[3]
} else if (xp >= 7001 && xp <= 8000) {
    nivel = niveis[4]
} else if (xp >= 9001 && xp <= 9000) {
    nivel = niveis[5]
} else if (xp >= 9001 && xp <= 10000) {
    nivel = niveis[6]
} else if (xp >= 10001) {
    nivel = niveis[7]
} 

console.log("O Herói de nome " + nome + " está no nível de " + nivel)