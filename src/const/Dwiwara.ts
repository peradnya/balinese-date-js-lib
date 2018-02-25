export class Dwiwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Dwiwara(0, 5, "Menga")),
        Object.freeze(new Dwiwara(1, 4, "Pepet")),
    ]);

    public static get MENGA(): Readonly<Dwiwara> { return Dwiwara.aValues[0]; }
    public static get PEPET(): Readonly<Dwiwara> { return Dwiwara.aValues[1]; }

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

    public static get values(): ReadonlyArray<Readonly<Dwiwara>> {
        return Dwiwara.aValues;
    }
}
