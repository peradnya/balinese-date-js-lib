export class PawatekanAlit {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PawatekanAlit(0, "Lintah")),
        Object.freeze(new PawatekanAlit(1, "Uler")),
        Object.freeze(new PawatekanAlit(2, "Gajah")),
        Object.freeze(new PawatekanAlit(3, "Lembu")),
    ]);

    public static get LINTAH(): Readonly<PawatekanAlit> { return PawatekanAlit.aValues[0]; }
    public static get ULER(): Readonly<PawatekanAlit> { return PawatekanAlit.aValues[1]; }
    public static get GAJAH(): Readonly<PawatekanAlit> { return PawatekanAlit.aValues[2]; }
    public static get LEMBU(): Readonly<PawatekanAlit> { return PawatekanAlit.aValues[3]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PawatekanAlit>> {
        return PawatekanAlit.aValues;
    }
}
