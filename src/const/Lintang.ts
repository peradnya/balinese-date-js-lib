export class Lintang {
    private static readonly aValues = Object.freeze([
        Object.freeze(new Lintang(0, "Gajah")),
        Object.freeze(new Lintang(1, "Kiriman")),
        Object.freeze(new Lintang(2, "Perahu Sarat")),
        Object.freeze(new Lintang(3, "Tiwa Tiwa")),
        Object.freeze(new Lintang(4, "Sangka Tikel")),
        Object.freeze(new Lintang(5, "Bubu Bolong")),
        Object.freeze(new Lintang(6, "Sungenge")),
        Object.freeze(new Lintang(7, "Uluku")),
        Object.freeze(new Lintang(8, "Pedati")),
        Object.freeze(new Lintang(9, "Kuda")),
        Object.freeze(new Lintang(10, "Gajah Mina")),
        Object.freeze(new Lintang(11, "Bade")),
        Object.freeze(new Lintang(12, "Mangelut")),
        Object.freeze(new Lintang(13, "Pagelangan")),
        Object.freeze(new Lintang(14, "Kala Sungsang")),
        Object.freeze(new Lintang(15, "Kukus")),
        Object.freeze(new Lintang(16, "Asu")),
        Object.freeze(new Lintang(17, "Kartika")),
        Object.freeze(new Lintang(18, "Naga")),
        Object.freeze(new Lintang(19, "Angsa Angrem")),
        Object.freeze(new Lintang(20, "Panah")),
        Object.freeze(new Lintang(21, "Patrem")),
        Object.freeze(new Lintang(22, "Lembu")),
        Object.freeze(new Lintang(23, "Depat")),
        Object.freeze(new Lintang(24, "Tangis")),
        Object.freeze(new Lintang(25, "Salah Ukur")),
        Object.freeze(new Lintang(26, "Perahu Pegat")),
        Object.freeze(new Lintang(27, "Puwuh Atarung")),
        Object.freeze(new Lintang(28, "Lawean")),
        Object.freeze(new Lintang(29, "Kelapa")),
        Object.freeze(new Lintang(30, "Yuyu")),
        Object.freeze(new Lintang(31, "Lumbung")),
        Object.freeze(new Lintang(32, "Kumba")),
        Object.freeze(new Lintang(33, "Udang")),
        Object.freeze(new Lintang(34, "Begoong")),
    ]);

    public static get GAJAH(): Readonly<Lintang> { return Lintang.aValues[0]; }
    public static get KIRIMAN(): Readonly<Lintang> { return Lintang.aValues[1]; }
    public static get PERAHU_SARAT(): Readonly<Lintang> { return Lintang.aValues[2]; }
    public static get TIWA_TIWA(): Readonly<Lintang> { return Lintang.aValues[3]; }
    public static get SANGKA_TIKEL(): Readonly<Lintang> { return Lintang.aValues[4]; }
    public static get BUBU_BOLONG(): Readonly<Lintang> { return Lintang.aValues[5]; }
    public static get SUNGENGE(): Readonly<Lintang> { return Lintang.aValues[6]; }
    public static get ULUKU(): Readonly<Lintang> { return Lintang.aValues[7]; }
    public static get PEDATI(): Readonly<Lintang> { return Lintang.aValues[8]; }
    public static get KUDA(): Readonly<Lintang> { return Lintang.aValues[9]; }
    public static get GAJAH_MINA(): Readonly<Lintang> { return Lintang.aValues[10]; }
    public static get BADE(): Readonly<Lintang> { return Lintang.aValues[11]; }
    public static get MANGELUT(): Readonly<Lintang> { return Lintang.aValues[12]; }
    public static get PAGELANGAN(): Readonly<Lintang> { return Lintang.aValues[13]; }
    public static get KALA_SUNGSANG(): Readonly<Lintang> { return Lintang.aValues[14]; }
    public static get KUKUS(): Readonly<Lintang> { return Lintang.aValues[15]; }
    public static get ASU(): Readonly<Lintang> { return Lintang.aValues[16]; }
    public static get KARTIKA(): Readonly<Lintang> { return Lintang.aValues[17]; }
    public static get NAGA(): Readonly<Lintang> { return Lintang.aValues[18]; }
    public static get ANGSA_ANGREM(): Readonly<Lintang> { return Lintang.aValues[19]; }
    public static get PANAH(): Readonly<Lintang> { return Lintang.aValues[20]; }
    public static get PATREM(): Readonly<Lintang> { return Lintang.aValues[21]; }
    public static get LEMBU(): Readonly<Lintang> { return Lintang.aValues[22]; }
    public static get DEPAT(): Readonly<Lintang> { return Lintang.aValues[23]; }
    public static get TANGIS(): Readonly<Lintang> { return Lintang.aValues[24]; }
    public static get SALAH_UKUR(): Readonly<Lintang> { return Lintang.aValues[25]; }
    public static get PERAHU_PEGAT(): Readonly<Lintang> { return Lintang.aValues[26]; }
    public static get PUWUH_ATARUNG(): Readonly<Lintang> { return Lintang.aValues[27]; }
    public static get LAWEAN(): Readonly<Lintang> { return Lintang.aValues[28]; }
    public static get KELAPA(): Readonly<Lintang> { return Lintang.aValues[29]; }
    public static get YUYU(): Readonly<Lintang> { return Lintang.aValues[30]; }
    public static get LUMBUNG(): Readonly<Lintang> { return Lintang.aValues[31]; }
    public static get KUMBA(): Readonly<Lintang> { return Lintang.aValues[32]; }
    public static get UDANG(): Readonly<Lintang> { return Lintang.aValues[33]; }
    public static get BEGOONG(): Readonly<Lintang> { return Lintang.aValues[34]; }

    private constructor(
        public readonly nId: number,
        public readonly sName: string) { }

    public get id(): number {
        return this.nId;
    }

    public get name(): string {
        return this.sName;
    }

    public static get values(): ReadonlyArray<Readonly<Lintang>> {
        return Lintang.aValues;
    }
}
