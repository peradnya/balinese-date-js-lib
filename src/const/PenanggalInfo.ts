export class PenanggalInfo {
    private static readonly aValues = Object.freeze([
        Object.freeze(new PenanggalInfo(0, "Tilem")),
        Object.freeze(new PenanggalInfo(1, "Penanggal")),
        Object.freeze(new PenanggalInfo(2, "Purnama")),
        Object.freeze(new PenanggalInfo(3, "Pangelong")),
    ]);

    public static get TILEM(): Readonly<PenanggalInfo> { return PenanggalInfo.aValues[0]; }
    public static get PENANGGAL(): Readonly<PenanggalInfo> { return PenanggalInfo.aValues[1]; }
    public static get PURNAMA(): Readonly<PenanggalInfo> { return PenanggalInfo.aValues[2]; }
    public static get PANGELONG(): Readonly<PenanggalInfo> { return PenanggalInfo.aValues[3]; }

    private constructor(
        private readonly nId: number,
        private readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<PenanggalInfo>> {
        return PenanggalInfo.aValues;
    }
}
