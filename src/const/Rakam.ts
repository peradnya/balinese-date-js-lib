export class Rakam {
    public static readonly NUJU_PATI = new Rakam(0, 'Nuju Pati');
    public static readonly KALA_TINANTANG = new Rakam(1, 'Kala Tinantang');
    public static readonly DEMANG_KANDHURUWAN = new Rakam(2, 'Demang Kandhuruwan');
    public static readonly SANGGAR_WARINGIN = new Rakam(3, 'Sanggar Waringin');
    public static readonly MANTRI_SINAROJA = new Rakam(4, 'Mantri Sinaroja');
    public static readonly MACAN_KATAWAN = new Rakam(5, 'Macan Katawan');

    private constructor(public readonly id: number, public readonly name: string) { }
}
