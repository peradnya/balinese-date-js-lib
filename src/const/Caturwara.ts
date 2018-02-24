export class Caturwara {
    public static readonly SRI = new Caturwara(0, 6, 'Sri');
    public static readonly LABA = new Caturwara(1, 5, 'Laba');
    public static readonly JAYA = new Caturwara(2, 1, 'Jaya');
    public static readonly MENALA = new Caturwara(3, 8, 'Menala');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
