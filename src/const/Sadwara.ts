export class Sadwara {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Sadwara(0, 7, "Tungleh")),
        Object.freeze(new Sadwara(1, 6, "Aryang")),
        Object.freeze(new Sadwara(2, 5, "Urukung")),
        Object.freeze(new Sadwara(3, 8, "Paniron")),
        Object.freeze(new Sadwara(4, 9, "Was")),
        Object.freeze(new Sadwara(5, 3, "Maulu")),
    ]);

    public static get TUNGLEH(): Readonly<Sadwara> { return Sadwara.aValues[0]; }
    public static get ARYANG(): Readonly<Sadwara> { return Sadwara.aValues[1]; }
    public static get URUKUNG(): Readonly<Sadwara> { return Sadwara.aValues[2]; }
    public static get PANIRON(): Readonly<Sadwara> { return Sadwara.aValues[3]; }
    public static get WAS(): Readonly<Sadwara> { return Sadwara.aValues[4]; }
    public static get MAULU(): Readonly<Sadwara> { return Sadwara.aValues[5]; }

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

    public static get values(): ReadonlyArray<Readonly<Sadwara>> {
        return Sadwara.aValues;
    }
}
