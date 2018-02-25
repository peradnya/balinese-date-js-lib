export class Jejapan {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Jejapan(0, "Mina")),
        Object.freeze(new Jejapan(1, "Taru")),
        Object.freeze(new Jejapan(2, "Sato")),
        Object.freeze(new Jejapan(3, "Patra")),
        Object.freeze(new Jejapan(4, "Wong")),
        Object.freeze(new Jejapan(5, "Paksi")),
    ]);

    public static get MINA(): Readonly<Jejapan> { return Jejapan.aValues[0]; }
    public static get TARU(): Readonly<Jejapan> { return Jejapan.aValues[1]; }
    public static get SATO(): Readonly<Jejapan> { return Jejapan.aValues[2]; }
    public static get PATRA(): Readonly<Jejapan> { return Jejapan.aValues[3]; }
    public static get WONG(): Readonly<Jejapan> { return Jejapan.aValues[4]; }
    public static get PAKSI(): Readonly<Jejapan> { return Jejapan.aValues[5]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Jejapan>> {
        return Jejapan.aValues;
    }
}
