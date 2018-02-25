export class Sangawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Sangawara(0, 5, "Dangu")),
        Object.freeze(new Sangawara(1, 8, "Jangur")),
        Object.freeze(new Sangawara(2, 9, "Gigis")),
        Object.freeze(new Sangawara(3, 3, "Nohan")),
        Object.freeze(new Sangawara(4, 7, "Ogan")),
        Object.freeze(new Sangawara(5, 1, "Erangan")),
        Object.freeze(new Sangawara(6, 4, "Urungan")),
        Object.freeze(new Sangawara(7, 6, "Tulus")),
        Object.freeze(new Sangawara(8, 8, "Dadi")),
    ]);

    public static get DANGU(): Readonly<Sangawara> { return Sangawara.aValues[0]; }
    public static get JANGUR(): Readonly<Sangawara> { return Sangawara.aValues[1]; }
    public static get GIGIS(): Readonly<Sangawara> { return Sangawara.aValues[2]; }
    public static get NOHAN(): Readonly<Sangawara> { return Sangawara.aValues[3]; }
    public static get OGAN(): Readonly<Sangawara> { return Sangawara.aValues[4]; }
    public static get ERANGAN(): Readonly<Sangawara> { return Sangawara.aValues[5]; }
    public static get URUNGAN(): Readonly<Sangawara> { return Sangawara.aValues[6]; }
    public static get TULUS(): Readonly<Sangawara> { return Sangawara.aValues[7]; }
    public static get DADI(): Readonly<Sangawara> { return Sangawara.aValues[8]; }

    private constructor(
        private readonly nId: number,
        private readonly nUrip: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get urip(): number {
        return this.nUrip;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Sangawara>> {
        return Sangawara.aValues;
    }
}
