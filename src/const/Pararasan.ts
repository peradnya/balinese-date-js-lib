export class Pararasan {
    public static readonly LAKU_PANDITA_SAKTI = new Pararasan(0, 'Laku Pandita Sakti');
    public static readonly ARAS_TUDING = new Pararasan(1, 'Aras Tuding');
    public static readonly ARAS_KEMBANG = new Pararasan(2, 'Aras Kembang');
    public static readonly LAKU_BINTANG = new Pararasan(3, 'Laku Bintang');
    public static readonly LAKU_BULAN = new Pararasan(4, 'Laku Bulan');
    public static readonly LAKU_SURYA = new Pararasan(5, 'Laku Surya');
    public static readonly LAKU_AIR = new Pararasan(6, 'Laku Air');
    public static readonly LAKU_BUMI = new Pararasan(7, 'Laku Bumi');
    public static readonly LAKU_API = new Pararasan(8, 'Laku Api');
    public static readonly LAKU_ANGIN = new Pararasan(9, 'Laku Angin');

    public static readonly lookup = [
        Pararasan.LAKU_PANDITA_SAKTI,
        Pararasan.ARAS_TUDING,
        Pararasan.ARAS_KEMBANG,
        Pararasan.LAKU_BINTANG,
        Pararasan.LAKU_BULAN,
        Pararasan.LAKU_SURYA,
        Pararasan.LAKU_AIR,
        Pararasan.LAKU_BUMI,
        Pararasan.LAKU_API,
        Pararasan.LAKU_ANGIN,
    ];

    private constructor(public readonly id: number, public readonly name: string) { }
}
