import fetch from "node-fetch"

export async function verificarLink(arrayURLs) {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const response = await fetch(url)
        return response.status
    }))
    return arrayStatus
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
    return statusLinks
}

