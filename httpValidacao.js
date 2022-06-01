import fetch from "node-fetch"
import { trataErro } from "./index.js"


export async function verificarLink(arrayURLs) {
    try {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const response = await fetch(url)
        return `${response.status} - ${response.statusText}`
    }))
    return arrayStatus
    } catch(error) {
        trataErro(error)
    }   
}

export function obtemArrayDeURLs(arrayLinks){
    const arrayURLs = arrayLinks.map(function(objetoDoArray){
        return Object.values(objetoDoArray).join()
    })
    return arrayURLs
}

export async function validaURLs(arrayLinks) {
    const links = obtemArrayDeURLs(arrayLinks)
    const statusLinks = await verificarLink(links)
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, status: statusLinks[indice]
    }))
    return resultados
}

