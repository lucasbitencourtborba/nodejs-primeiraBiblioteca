import chalk from 'chalk'
import { leArquivo } from './index.js'
import { validaURLs } from './httpValidacao.js'


async function processaTexto(caminhoArquivo){
    const resultado = await leArquivo(caminhoArquivo[2])
    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('Links Validados'), await validaURLs(resultado))
    }else {
        console.log(chalk.yellow("Lista de links"), resultado)
    }
}

const caminho = process.argv
caminho.forEach((val, index) => {
    console.log(chalk.blue(`${index} : ${val}`))
})

processaTexto(caminho)
