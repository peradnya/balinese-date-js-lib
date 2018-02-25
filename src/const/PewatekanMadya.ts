export class PewatekanMadya {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PewatekanMadya(0, "Wong")),
        Object.freeze(new PewatekanMadya(1, "Gajah")),
        Object.freeze(new PewatekanMadya(2, "Watu")),
        Object.freeze(new PewatekanMadya(3, "Buta")),
        Object.freeze(new PewatekanMadya(4, "Suku")),
    ]);

    public static get WONG(): Readonly<PewatekanMadya> { return PewatekanMadya.aValues[0]; }
    public static get GAJAH(): Readonly<PewatekanMadya> { return PewatekanMadya.aValues[1]; }
    public static get WATU(): Readonly<PewatekanMadya> { return PewatekanMadya.aValues[2]; }
    public static get BUTA(): Readonly<PewatekanMadya> { return PewatekanMadya.aValues[3]; }
    public static get SUKU(): Readonly<PewatekanMadya> { return PewatekanMadya.aValues[4]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PewatekanMadya>> {
        return PewatekanMadya.aValues;
    }
}
