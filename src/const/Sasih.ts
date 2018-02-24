export class Sasih {
    // Standard
    public static readonly KASA = new Sasih(0, 'Kasa');
    public static readonly KARO = new Sasih(1, 'Karo');
    public static readonly KATIGA = new Sasih(2, 'Katiga');
    public static readonly KAPAT = new Sasih(3, 'Kapat');
    public static readonly KALIMA = new Sasih(4, 'Kalima');
    public static readonly KANEM = new Sasih(5, 'Kanem');
    public static readonly KAPITU = new Sasih(6, 'Kapitu');
    public static readonly KAWOLU = new Sasih(7, 'Kawolu');
    public static readonly KASANGA = new Sasih(8, 'Kasanga');
    public static readonly KADASA = new Sasih(9, 'Kadasa');
    public static readonly DESTHA = new Sasih(10, 'Destha');
    public static readonly SADHA = new Sasih(11, 'Sadha');

    // Nampih/Mala Sasih
    public static readonly MALA_DESTHA = new Sasih(12, 'Mala Destha');
    public static readonly MALA_SADHA = new Sasih(13, 'Mala Sadha');
    public static readonly NAMPIH_DESTHA = new Sasih(14, 'Nampih Destha');
    public static readonly NAMPIH_KATIGA = new Sasih(15, 'Nampih Katiga');
    public static readonly NAMPIH_KASA = new Sasih(16, 'Nampih Kasa');
    public static readonly NAMPIH_KADASA = new Sasih(17, 'Nampih Kadasa');
    public static readonly NAMPIH_KARO = new Sasih(18, 'Nampih Karo');
    public static readonly NAMPIH_SADHA = new Sasih(19, 'Nampih Sadha');

    private constructor(public readonly id: number, public readonly name: string) { }

}