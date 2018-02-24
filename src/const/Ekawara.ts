export class Ekawara {
    public static readonly VOID  = new Ekawara(0, 0, 'Void');
    public static readonly LUANG = new Ekawara(1, 1, 'Luang');

    private constructor(
        public readonly id: number,
        public readonly urip: number,
        public readonly name: string) { }
}
