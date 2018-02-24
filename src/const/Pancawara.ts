export class Pancawara {
    public static readonly PAING = new Pancawara(0, 9, 3, 'Paing');
    public static readonly PON = new Pancawara(1, 7, 4, 'Pon');
    public static readonly WAGE = new Pancawara(2, 4, 5, 'Wage');
    public static readonly KLIWON = new Pancawara(3, 8, 1, 'Kliwon');
    public static readonly UMANIS = new Pancawara(4, 5, 2, 'Umanis');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly kupih: number,
        public readonly name: string) { }
}
