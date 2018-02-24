export class Pancasuda {
    public static readonly LEBU_KATIUB_ANGIN = new Pancasuda(0, 'Lebu Katiup Angin');
    public static readonly WISESA_SEGARA = new Pancasuda(1, 'Wisesa Segara');
    public static readonly TUNGGAK_SEMI = new Pancasuda(2, 'Tunggak Semi');
    public static readonly SATRIA_WIBAWA = new Pancasuda(3, 'Satria Wibawa');
    public static readonly SUMUR_SINABA = new Pancasuda(4, 'Sumur Sinaba');
    public static readonly SATRIA_WIRANG = new Pancasuda(5, 'Satria Wirang');
    public static readonly BUMI_KAPETAK = new Pancasuda(6, 'Bumi Kapetak');

    public static readonly lookup = [
        Pancasuda.LEBU_KATIUB_ANGIN,
        Pancasuda.WISESA_SEGARA,
        Pancasuda.TUNGGAK_SEMI,
        Pancasuda.SATRIA_WIBAWA,
        Pancasuda.SUMUR_SINABA,
        Pancasuda.SATRIA_WIRANG,
        Pancasuda.BUMI_KAPETAK,
    ];

    private constructor(public readonly id: number, public readonly name: string) { }
}
