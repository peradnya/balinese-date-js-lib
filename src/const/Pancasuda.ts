export class Pancasuda {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Pancasuda(0, "Lebu Katiup Angin")),
        Object.freeze(new Pancasuda(1, "Wisesa Segara")),
        Object.freeze(new Pancasuda(2, "Tunggak Semi")),
        Object.freeze(new Pancasuda(3, "Satria Wibawa")),
        Object.freeze(new Pancasuda(4, "Sumur Sinaba")),
        Object.freeze(new Pancasuda(5, "Satria Wirang")),
        Object.freeze(new Pancasuda(6, "Bumi Kapetak")),
    ]);

    public static get LEBU_KATIUB_ANGIN(): Readonly<Pancasuda> { return Pancasuda.aValues[0]; }
    public static get WISESA_SEGARA(): Readonly<Pancasuda> { return Pancasuda.aValues[1]; }
    public static get TUNGGAK_SEMI(): Readonly<Pancasuda> { return Pancasuda.aValues[2]; }
    public static get SATRIA_WIBAWA(): Readonly<Pancasuda> { return Pancasuda.aValues[3]; }
    public static get SUMUR_SINABA(): Readonly<Pancasuda> { return Pancasuda.aValues[4]; }
    public static get SATRIA_WIRANG(): Readonly<Pancasuda> { return Pancasuda.aValues[5]; }
    public static get BUMI_KAPETAK(): Readonly<Pancasuda> { return Pancasuda.aValues[6]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Pancasuda>> {
        return Pancasuda.aValues;
    }
}
