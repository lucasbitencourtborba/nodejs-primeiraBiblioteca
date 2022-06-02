import { leArquivo } from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('leArquivo::', () => {
    it('must be a function', () => {
        expect(typeof leArquivo).toBe('function')
    })
    it('should return a array with results', async () => {
        const resultado = await leArquivo('./test/texto1.md')
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await leArquivo('/home/juliana/Documents/alura/lib-markdown/test/texto1_semlinks.md')
        expect(resultado).toBe('Não há links');
      })
      it('deve lançar um erro na falta de arquivo', () => {
        async function capturaErro() {
          await leArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos')
          expect(capturaErro).toThrowError(/não há arquivo no caminho/)
        }
      })
})

