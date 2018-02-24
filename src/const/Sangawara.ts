export class Sangawara {
    public static readonly DANGU = new Sangawara(0, 5, 'Dangu');
    public static readonly JANGUR = new Sangawara(1, 8, 'Jangur');
    public static readonly GIGIS = new Sangawara(2, 9, 'Gigis');
    public static readonly NOHAN = new Sangawara(3, 3, 'Nohan');
    public static readonly OGAN = new Sangawara(4, 7, 'Ogan');
    public static readonly ERANGAN = new Sangawara(5, 1, 'Erangan');
    public static readonly URUNGAN = new Sangawara(6, 4, 'Urungan');
    public static readonly TULUS = new Sangawara(7, 6, 'Tulus');
    public static readonly DADI = new Sangawara(8, 8, 'Dadi');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
