import { leArquivo } from './index.js'
import { validaURLs } from './httpValidacao.js'


async function processaTexto(caminhoArquivo){
    const resultado = await leArquivo(caminhoArquivo[2])
    if (caminho[3] === 'validar'){
        console.log('Links Validados', await validaURLs(resultado))
    }else {
        console.log("Lista de links", resultado)
    }
}

const caminho = process.argv
caminho.forEach((val, index) => {
    console.log(`${index} : ${val}`)
})

processaTexto(caminho)
