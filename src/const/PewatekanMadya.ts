export class PewatekanMadya {
    public static readonly WONG = new PewatekanMadya(0, 'Wong');
    public static readonly GAJAH = new PewatekanMadya(1, 'Gajah');
    public static readonly WATU = new PewatekanMadya(2, 'Watu');
    public static readonly BUTA = new PewatekanMadya(3, 'Buta');
    public static readonly SUKU = new PewatekanMadya(4, 'Suku');

    private constructor(public readonly id: number, public readonly name: string) { }
}
