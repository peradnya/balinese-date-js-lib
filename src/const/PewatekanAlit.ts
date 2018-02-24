export class PewatekanAlit {
    public static readonly LINTAH = new PewatekanAlit(0, 'Lintah');
    public static readonly ULER = new PewatekanAlit(1, 'Uler');
    public static readonly GAJAH = new PewatekanAlit(2, 'Gajah');
    public static readonly LEMBU = new PewatekanAlit(3, 'Lembu');

    public static readonly lookup = [
        PewatekanAlit.LINTAH,
        PewatekanAlit.ULER,
        PewatekanAlit.GAJAH,
        PewatekanAlit.LEMBU,
    ];

    private constructor(public readonly id: number, public readonly name: string) { }
}
