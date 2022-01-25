/*
ATIVIDADE 1
MATHEUS RAMOS DE ALMEIDA
*/

const AdressMatcher = require('./Atividade1ClassConsumer');

describe("String Manipulations", () => {
    const STREET = 'Rua Zilah Corrêa Araujo 364 Corrêa';
    let start = '';
    let adress = '';

    beforeAll(() => {
        adress = new AdressMatcher(STREET);
  });

    it('1) Must return the index of the first substring', () => {
        expect(adress.findStreetName('Rua')).toBe(0);

        expect(adress.findStreetName('Zilah')).toBe(4);

        expect(adress.findStreetName('Corrêa')).toBe(10);

        expect(adress.findStreetName('Araujo')).toBe(17);

        expect(adress.findStreetName('364')).toBe(24);
    });

    it('2) Must return the index of the last substring', () => {
        expect(adress.findStreetNumber('Corrêa')).toBe(28);
    });

    it('3) Must return the substring between two other strings', () => {
        expect(adress.findWordBetweenStreetNameAndStreeNumber('Rua ', ' Zilah')).toBeNull();

        expect(adress.findWordBetweenStreetNameAndStreeNumber('364 ', ' Araujo')).toBeNull();

        expect(adress.findWordBetweenStreetNameAndStreeNumber('364 ', ' Corrêa')).toBeNull();

        expect(adress.findWordBetweenStreetNameAndStreeNumber('Rua ', ' Corrêa ')).toBe('Zilah');

        expect(adress.findWordBetweenStreetNameAndStreeNumber('Zilah ', ' Araujo')).toBe('Corrêa');

        expect(adress.findWordBetweenStreetNameAndStreeNumber('Corrêa ', ' 364')).toBe('Araujo');
    });

    it('4) Must return a string composed of the first 2 and the last 2 characters of the given text', () => {
        expect(adress.findBothEnds()).toBe('Ruêa');
    });

    it('5) Must return a string where all occurrences of its first character have been changed to the chosen term', () => {
        adress = new AdressMatcher('caccle');
        start = adress.hideStreetName('c');
        expect(start).toBe('ca**le');
    });

});