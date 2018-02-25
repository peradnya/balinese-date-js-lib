export class Caturwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Caturwara(0, 6, "Sri")),
        Object.freeze(new Caturwara(1, 5, "Laba")),
        Object.freeze(new Caturwara(2, 1, "Jaya")),
        Object.freeze(new Caturwara(3, 8, "Menala")),
    ]);

    public static get SRI(): Readonly<Caturwara> { return Caturwara.aValues[0]; }
    public static get LABA(): Readonly<Caturwara> { return Caturwara.aValues[1]; }
    public static get JAYA(): Readonly<Caturwara> { return Caturwara.aValues[2]; }
    public static get MENALA(): Readonly<Caturwara> { return Caturwara.aValues[3]; }

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

    public static get values(): ReadonlyArray<Readonly<Caturwara>> {
        return Caturwara.aValues;
    }
}
