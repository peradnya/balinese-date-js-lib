export class Saptawara {
    public static readonly REDITE = new Saptawara(0, 5, 6, 3, 'Redite');
    public static readonly SOMA = new Saptawara(1, 4, 4, 4, 'Soma');
    public static readonly ANGGARA = new Saptawara(2, 3, 3, 5, 'Anggara');
    public static readonly BUDA = new Saptawara(3, 7, 6, 6, 'Buda');
    public static readonly WRESPATI = new Saptawara(4, 8, 5, 7, 'Wrespati');
    public static readonly SUKRA = new Saptawara(5, 6, 7, 1, 'Sukra');
    public static readonly SANISCARA = new Saptawara(6, 9, 8, 2, 'Saniscara');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly kertaaji: number,
        public readonly rakam: number,
        public readonly name: string) { }
}
