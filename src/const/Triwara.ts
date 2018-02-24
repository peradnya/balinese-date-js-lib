export class Triwara {
    public static readonly PASAH = new Triwara(0, 9, 'Pasah');
    public static readonly BETENG = new Triwara(1, 4, 'Beteng');
    public static readonly KAJENG = new Triwara(2, 7, 'Kajeng');

    public static readonly lookup = [
        Triwara.PASAH,
        Triwara.BETENG,
        Triwara.KAJENG,
    ];

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
