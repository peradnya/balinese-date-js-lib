export class Dasawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Dasawara(0, 5, "Pandita")),
        Object.freeze(new Dasawara(1, 7, "Pati")),
        Object.freeze(new Dasawara(2, 10, "Suka")),
        Object.freeze(new Dasawara(3, 4, "Duka")),
        Object.freeze(new Dasawara(4, 6, "Sri")),
        Object.freeze(new Dasawara(5, 2, "Manuh")),
        Object.freeze(new Dasawara(6, 3, "Manusa")),
        Object.freeze(new Dasawara(7, 8, "Raja")),
        Object.freeze(new Dasawara(8, 9, "Dewa")),
        Object.freeze(new Dasawara(9, 1, "Raksasa")),
    ]);

    public static get PANDITA(): Readonly<Dasawara> { return Dasawara.aValues[0]; }
    public static get PATI(): Readonly<Dasawara> { return Dasawara.aValues[1]; }
    public static get SUKA(): Readonly<Dasawara> { return Dasawara.aValues[2]; }
    public static get DUKA(): Readonly<Dasawara> { return Dasawara.aValues[3]; }
    public static get SRI(): Readonly<Dasawara> { return Dasawara.aValues[4]; }
    public static get MANUH(): Readonly<Dasawara> { return Dasawara.aValues[5]; }
    public static get MANUSA(): Readonly<Dasawara> { return Dasawara.aValues[6]; }
    public static get RAJA(): Readonly<Dasawara> { return Dasawara.aValues[7]; }
    public static get DEWA(): Readonly<Dasawara> { return Dasawara.aValues[8]; }
    public static get RAKSASA(): Readonly<Dasawara> { return Dasawara.aValues[9]; }

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

    public static get values(): ReadonlyArray<Readonly<Dasawara>> {
        return Dasawara.aValues;
    }
}
