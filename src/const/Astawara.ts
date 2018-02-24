export class Astawara {
    public static readonly SRI = new Astawara(0, 6, 'Sri');
    public static readonly INDRA = new Astawara(1, 5, 'Indra');
    public static readonly GURU = new Astawara(2, 8, 'Guru');
    public static readonly YAMA = new Astawara(3, 9, 'Yama');
    public static readonly LUDRA = new Astawara(4, 3, 'Ludra');
    public static readonly BRAHMA = new Astawara(5, 7, 'Brahma');
    public static readonly KALA = new Astawara(6, 1, 'Kala');
    public static readonly UMA = new Astawara(7, 4, 'Uma');

    public static readonly lookup = [
        Astawara.SRI,
        Astawara.INDRA,
        Astawara.GURU,
        Astawara.YAMA,
        Astawara.LUDRA,
        Astawara.BRAHMA,
        Astawara.KALA,
        Astawara.UMA,
    ];

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
