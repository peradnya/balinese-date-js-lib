export class Dasawara {
    public static readonly PANDITA = new Dasawara(0, 5, 'Pandita');
    public static readonly PATI = new Dasawara(1, 7, 'Pati');
    public static readonly SUKA = new Dasawara(2, 10, 'Suka');
    public static readonly DUKA = new Dasawara(3, 4, 'Duka');
    public static readonly SRI = new Dasawara(4, 6, 'Sri');
    public static readonly MANUH = new Dasawara(5, 2, 'Manuh');
    public static readonly MANUSA = new Dasawara(6, 3, 'Manusa');
    public static readonly RAJA = new Dasawara(7, 8, 'Raja');
    public static readonly DEWA = new Dasawara(8, 9, 'Dewa');
    public static readonly RAKSASA = new Dasawara(9, 1, 'Raksasa');

    public static readonly lookup = [
        Dasawara.PANDITA,
        Dasawara.PATI,
        Dasawara.SUKA,
        Dasawara.DUKA,
        Dasawara.SRI,
        Dasawara.MANUH,
        Dasawara.MANUSA,
        Dasawara.RAJA,
        Dasawara.DEWA,
        Dasawara.RAKSASA,
    ];

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
