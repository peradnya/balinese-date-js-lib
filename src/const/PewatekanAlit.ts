export class PewatekanAlit {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PewatekanAlit(0, "Lintah")),
        Object.freeze(new PewatekanAlit(1, "Uler")),
        Object.freeze(new PewatekanAlit(2, "Gajah")),
        Object.freeze(new PewatekanAlit(3, "Lembu")),
    ]);

    public static get LINTAH(): Readonly<PewatekanAlit> { return PewatekanAlit.aValues[0]; }
    public static get ULER(): Readonly<PewatekanAlit> { return PewatekanAlit.aValues[1]; }
    public static get GAJAH(): Readonly<PewatekanAlit> { return PewatekanAlit.aValues[2]; }
    public static get LEMBU(): Readonly<PewatekanAlit> { return PewatekanAlit.aValues[3]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PewatekanAlit>> {
        return PewatekanAlit.aValues;
    }
}
