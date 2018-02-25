export class Saptawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Saptawara(0, 5, 6, 3, "Redite")),
        Object.freeze(new Saptawara(1, 4, 4, 4, "Soma")),
        Object.freeze(new Saptawara(2, 3, 3, 5, "Anggara")),
        Object.freeze(new Saptawara(3, 7, 6, 6, "Buda")),
        Object.freeze(new Saptawara(4, 8, 5, 7, "Wrespati")),
        Object.freeze(new Saptawara(5, 6, 7, 1, "Sukra")),
        Object.freeze(new Saptawara(6, 9, 8, 2, "Saniscara")),
    ]);

    public static get REDITE(): Readonly<Saptawara> { return Saptawara.aValues[0]; }
    public static get SOMA(): Readonly<Saptawara> { return Saptawara.aValues[1]; }
    public static get ANGGARA(): Readonly<Saptawara> { return Saptawara.aValues[2]; }
    public static get BUDA(): Readonly<Saptawara> { return Saptawara.aValues[3]; }
    public static get WRESPATI(): Readonly<Saptawara> { return Saptawara.aValues[4]; }
    public static get SUKRA(): Readonly<Saptawara> { return Saptawara.aValues[5]; }
    public static get SANISCARA(): Readonly<Saptawara> { return Saptawara.aValues[6]; }

    private constructor(
        private readonly nId: number,
        private readonly nUrip: number,
        private readonly nKertaaji: number,
        private readonly nKupih: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get urip(): number {
        return this.nUrip;
    }

    public get kertaaji(): number {
        return this.nKertaaji;
    }

    public get kupih(): number {
        return this.nKupih;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Saptawara>> {
        return Saptawara.aValues;
    }
}
