export class Triwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Triwara(0, 9, "Pasah")),
        Object.freeze(new Triwara(1, 4, "Beteng")),
        Object.freeze(new Triwara(2, 7, "Kajeng")),
    ]);

    public static get PASAH(): Readonly<Triwara> { return Triwara.aValues[0]; }
    public static get BETENG(): Readonly<Triwara> { return Triwara.aValues[1]; }
    public static get KAJENG(): Readonly<Triwara> { return Triwara.aValues[2]; }

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

    public static get values(): ReadonlyArray<Readonly<Triwara>> {
        return Triwara.aValues;
    }
}
