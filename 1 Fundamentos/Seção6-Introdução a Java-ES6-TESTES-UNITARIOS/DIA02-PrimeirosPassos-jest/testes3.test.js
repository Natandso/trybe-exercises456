const encode = require('./exercicio3');

describe('Testando encode e Decode', () => {
    it('Teste se encode e decode são funções;', () => {
        expect(typeof encode.encode).toBe('function')
    });

    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode.encode('a,e,i,o,u')).toBe('1,2,3,4,5')
    });

    it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        expect(encode.decode('1,2,3,4,5')).toBe('a,e,i,o,u')
    });

     it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode.encode('7,8,9,10,11')).not.toBe('a,e,i,o,u')
    });

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode.encode('1,2,3,4,5')).toHaveLenght('5')
    });


});