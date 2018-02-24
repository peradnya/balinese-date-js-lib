export class Dwiwara {
    public static readonly MENGA = new Dwiwara(0, 5, 'Menga');
    public static readonly PEPET = new Dwiwara(1, 4, 'Pepet');

    public static readonly lookup = [
        Dwiwara.MENGA,
        Dwiwara.PEPET,
    ];

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
