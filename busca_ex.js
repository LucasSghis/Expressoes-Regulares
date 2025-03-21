//Informar que o JavaScript deverá realizar a leitura do arquivo através do código:
const fs = require('fs')
const bancoCsv = '/insira_o_caminho_do_arquivo_database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

//Criar a regex com JavaScript:
const regex = /Anna/  


//Utilizar o método String match() e o console.log() para encontrar a ocorrência e imprimi-la no terminal:
const matchregex = banco.match(regex)
console.log(matchRegex);