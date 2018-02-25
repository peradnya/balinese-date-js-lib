export class Ekawara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Ekawara(0, 0, "Void")),
        Object.freeze(new Ekawara(1, 1, "Luang")),
    ]);

    public static get VOID(): Readonly<Ekawara> { return Ekawara.aValues[0]; }
    public static get LUANG(): Readonly<Ekawara> { return Ekawara.aValues[1]; }

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

    public static get values(): ReadonlyArray<Readonly<Ekawara>> {
        return Ekawara.aValues;
    }
}
