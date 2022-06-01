import chalk from 'chalk'
import fs, { link } from 'fs'


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = []
    let temp;
    
    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({[temp[1]]: temp[2]})
    }

    return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}


function trataErro(erro) {
    throw new Error(chalk.red(erro));
}


export async function leArquivo(caminhoArquivo) {  // Função síncrona com async e await
    const encoding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        const links = extraiLinks(texto)
        return links
    } catch(error) {
        trataErro(chalk.red(error))
    }
}

//export async function pegaArquivo(caminho) {
//    const caminhoAbsoluto = path.join(__dirname, '..', caminho)
//    const encoding = 'utf-8'
//    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding })
//    console.log(arquivos)
//}
