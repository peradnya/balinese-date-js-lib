export class Sadwara {
    public static readonly TUNGLEH = new Sadwara(0, 7, 'Tungleh');
    public static readonly ARYANG = new Sadwara(1, 6, 'Aryang');
    public static readonly URUKUNG = new Sadwara(2, 5, 'Urukung');
    public static readonly PANIRON = new Sadwara(3, 8, 'Paniron');
    public static readonly WAS = new Sadwara(4, 9, 'Was');
    public static readonly MAULU = new Sadwara(5, 3, 'Maulu');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
